import json
from rest_framework import status
from rest_framework import filters
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework.generics import GenericAPIView, ListAPIView, CreateAPIView
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework_jwt.settings import api_settings

from django.http import Http404
from django import http
from django.views.generic.base import TemplateView, View
from django.http import HttpResponse, HttpResponseRedirect
from django.core.urlresolvers import reverse_lazy
from django.contrib.auth.models import User
from django.urls import reverse
from django.contrib.auth import login
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.contrib.auth.decorators import login_required


from .utils import resolve_google_oauth
from .models import GoogleUser, UserProxy, Category, Interest, Event, Attend
from .serializers import CategorySerializer, EventSerializer, EventDetailSerializer, GoogleUserSerializer, UserSerializer
from .setpagination import LimitOffsetpage
from .slack import get_slack_name, notify_channel, notify_user


class LoginRequiredMixin(object):

    '''View mixin which requires that the user is authenticated.'''

    @method_decorator(login_required)
    def dispatch(self, request, *args, **kwargs):
        return super(LoginRequiredMixin, self).dispatch(
            request, *args, **kwargs)


class ExemptCSRFMixn(object):
    """View mixin defined to exempt csrf."""

    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super(ExemptCSRFMixn, self).dispatch(
    request, *args, **kwargs)


class DashBoardView(TemplateView):

    template_name = 'index.html'


class GoogleLoginView(APIView):

    permission_classes = (AllowAny,)

    def get_oauth_token(self, userproxy, google_user):
        jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
        jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER
        payload = jwt_payload_handler(userproxy)
        token = jwt_encode_handler(payload)

        serializer = GoogleUserSerializer(google_user)

        body = {
          'token': token,
          'user': serializer.data,
        }

        return body

    def post(self, request, format=None):

        idinfo = resolve_google_oauth(request)
        import pdb; pdb.set_trace()
        try:
            if idinfo.data:
                if isinstance(idinfo.data, dict):
                    return Response(idinfo.data)
        except Exception as e:
            pass

        # check if it is a returning user.
        try:
            google_user = GoogleUser.objects.get(google_id=idinfo['sub'])
            google_user.check_diff(idinfo)
            userproxy = UserProxy.objects.get(id=google_user.app_user.id)
            userproxy.check_diff(idinfo)

        except GoogleUser.DoesNotExist:
            # proceed to create the user
            email_length = len(idinfo['email'])
            hd_length = len(idinfo['hd']) + 1
            userproxy = UserProxy(
                username=idinfo['email'][:email_length - hd_length],
                email=idinfo['email'],
                first_name=idinfo['given_name'],
                last_name=idinfo['family_name']
            )
            userproxy.save()
            google_user = GoogleUser(google_id=idinfo['sub'],
                                     app_user=userproxy,
                                     appuser_picture=idinfo['picture'])
            google_user.save()

        response = self.get_oauth_token(userproxy, google_user)
        return Response(response, status=status.HTTP_200_OK)


class CategoryListView(ListAPIView):
    """List all Categories."""

    model = Category
    serializer_class = CategorySerializer
    pagination_class = LimitOffsetpage
    filter_fields = ('name',)
    queryset = Category.objects.all()


class JoinSocialClubView(TemplateView):
    """Join a social club."""

    def post(self, request):

        body_unicode = request.body.decode('utf-8')
        body_data = json.loads(body_unicode)


        email = body_data.get('email')
        club_id = body_data.get('club_id')
        user = request.user

        # get the category for the club_id
        user_category = Category.objects.get(id=club_id)

        user_interest = Interest(
            follower=user,
            follower_category = user_category
        )
        user_interest.save()

        # send @dm to user on slack
        slack_name = get_slack_name(user)
        message  = "you have successfully joined {} social club".format(user_category.name)
        notify_user(message, slack_name)


        return http.response.JsonResponse({
            'message': 'registration successful',
            'status': 200
        })


class SocialClubDetail(GenericAPIView):
    """List all Social Club Details."""

    model = Event
    serializer_class = CategorySerializer

    def get(self, request, *args, **kwargs):
        category_id = kwargs.get('pk')
        try:
            category = Category.objects.get(id=category_id)
        except Category.DoesNotExist:
            raise Http404

        serializer = CategorySerializer(category)
        return Response(serializer.data)


class AttendSocialEventView(TemplateView):
    """Attend a social event."""

    def post(self, request):

        body_unicode = request.body.decode('utf-8')
        body_data = json.loads(body_unicode)

        email = body_data.get('email')
        club_id = body_data.get('club_id')
        event_id = body_data.get('event_id')

        try:
             my_event.objects.get(id=category_id)
        except Event.DoesNotExist:
            raise Http404

        user_attendance = Attend(
            user=request.user,
            event = my_event
        )

        user_attendance.save()

        return http.response.JsonResponse({
            'message': 'registration successful',
            'status': 200
        })


class CreateEventView(TemplateView):
    pass

    def post(self, request, *args, **kwargs):

        body_unicode = request.body.decode('utf-8')
        body_data = json.loads(body_unicode)

        title = body_data.get('title')
        description = body_data.get('description')
        venue = body_data.get('venue')
        date = body_data.get('date')
        time = body_data.get('time'),
        featured_image = body_data.get('featured_image')
        social_event_id = body_data.get('category_id')

        try:
            social_event = Category.objects.get(id=int(social_event_id)) # ensure this does not fail.
        except Category.DoesNotExist:
            raise Http404

        new_event = Event(
            title=title,
            description=description,
            venue=venue,
            date=date,
            time=time,
            featured_image=featured_image,
            creator=request.use,
            social_event=social_event
        )

        new_event.save()

        # send @dm to user on slack
        slack_name = get_slack_name(user)
        message  = "New Social event {} has just been created".format(new_event.title)

        # to do (pending on event detail page) build URI for event page to add to message)
        notify_channel(message)

        return http.response.JsonResponse({
            'message': 'registration successful',
            'status': 200
        })


class SignOutView(View, LoginRequiredMixin):

    '''Logout User from session.'''

    def get(self, request, *args, **kwargs):
        logout(request)
        return HttpResponseRedirect(
            reverse_lazy('homepage'))


class EventDetail(GenericAPIView):
    """List all Social Club Details."""

    model = Event
    serializer_class = EventDetailSerializer

    def get(self, request, *args, **kwargs):
        event_id = kwargs.get('pk')
        try:
            event = Event.objects.get(id=event_id)
        except Event.DoesNotExist:
            raise Http404

        serializer = EventDetailSerializer(event)
        return Response(serializer.data)

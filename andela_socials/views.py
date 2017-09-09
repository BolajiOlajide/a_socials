from rest_framework import status
from rest_framework import filters
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework.generics import GenericAPIView, ListAPIView, CreateAPIView
from rest_framework.views import APIView

from django.http import Http404
from django.views.generic.base import TemplateView, View
from django.http import HttpResponse, HttpResponseRedirect
from django.core.urlresolvers import reverse_lazy
from django.contrib.auth.models import User
from django.urls import reverse
from django.contrib.auth import login

from .utils import resolve_google_oauth
from .models import GoogleUser, UserProxy, Category
from .serializers import CategorySerializer
from .setpagination import LimitOffsetpage


class DashBoardView(TemplateView):
    
    template_name = 'index.html'

class HomeView(TemplateView):
    
    template_name = "main.html"

    def dispatch(self, request, *args, **kwargs):
        if request.user.is_authenticated():
            return HttpResponseRedirect(
                reverse_lazy('dashboard'))
        return super(HomeView, self).dispatch(request, *args, **kwargs)


class GoogleLoginView(View):

    def get(self, request, format=None):

        idinfo = resolve_google_oauth(request)

        try:
            if type(idinfo.data) == type(dict()):
                return HttpResponse(idinfo.data)
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

            userproxy = UserProxy(
                username=idinfo['name'],
                email=idinfo["email"],
                first_name=idinfo['given_name'],
                last_name=idinfo['family_name']
            )
            userproxy.save()
            google_user = GoogleUser(google_id=idinfo['sub'],
                                     app_user=userproxy,
                                     appuser_picture=idinfo['picture'])
            google_user.save()

        # log in user 
        userproxy.backend = 'django.contrib.auth.backends.ModelBackend'
        login(request, userproxy)

        return HttpResponse("success", content_type="text/plain")

class CategoryListView(ListAPIView):
    """List all Categories."""

    model = Category
    serializer_class = CategorySerializer
    pagination_class = LimitOffsetpage
    filter_fields = ('name',)
    queryset = Category.objects.all()


from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from api import views
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    url(r'^auth/login/?$', views.GoogleLoginView.as_view(),
        name='auth_login'),

    url(r'^auth/token/?$', obtain_jwt_token),

    url(r'^categories/?$', views.CategoryListView.as_view(),
        name='apicategory'),

    url(r'^home/?$',
        views.DashBoardView.as_view(),
        name='dashboard'
        ),

    url(r'^join/?$', views.JoinSocialClubView.as_view(),
        name='join'
        ),

    url(r'^categories/?$', views.CategoryListView.as_view(),
        name='apicategory'),

    url(r'^category/(?P<pk>[0-9]+)/events/?$', views.SocialClubDetail.as_view(),
        name="user-detail"),

    url(r'^attend/?$', views.AttendSocialEventView.as_view(),
        name='attend'
        ),

    url(r'^create/event/?$', views.CreateEventView.as_view(),
        name='create_event'
        ),

    url(r'^signout/$',
        views.SignOutView.as_view(),
        name='signout'
        ),

    url(r'^event/(?P<pk>[0-9]+)/?$', views.EventDetail.as_view(),
        name='event_detail'
        ),
]

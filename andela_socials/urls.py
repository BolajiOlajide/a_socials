from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from andela_socials import views


urlpatterns = [
    url(r'^auth/login/$', views.GoogleLoginView.as_view(),
        name='auth_login'),

    url(r'^user/dashboard/$',
        views.DashBoardView.as_view(),
        name='dashboard'
        ),

]

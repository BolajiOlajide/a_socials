from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from andela_socials import views


urlpatterns = [
    url(r'^auth/login/$', views.GoogleLoginView.as_view(),
        name='auth_login'),

    url(r'^categories/$', views.CategoryListView.as_view(),
        name='apicategory'),

    url(r'^home/$',
        views.DashBoardView.as_view(),
        name='dashboard'
        ),
    url(r'^join/$', views.JoinSocialClubView.as_view(),
        name='join'
        ),
    url(r'^categories/$', views.CategoryListView.as_view(),
        name='apicategory'),
    url(r'^category/(?P<pk>[0-9]+)/events/$', views.SocialClubDetail.as_view(),
        name="user-detail"),
<<<<<<< HEAD

    url(r'^attend/$', views.AttendSocialEventView.as_view(),
        name='attend'
        ),
=======
>>>>>>> Create social club endpoint (#6)
]

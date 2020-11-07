from django.urls import path, include

from knox.views import LogoutView
from rest_framework import routers
from .views import UserAPIView,RegisterAPIView,LoginAPIView, ProfileUpdateAPI,Userdata,Userprofile

router = routers.DefaultRouter()
router.register('profile', Userprofile, 'profile')
router.register('users', Userdata, 'users')

urlpatterns = [
    path('', include('knox.urls')),
    path('', include(router.urls)),
    path('users/<int:user_pk>/', Userprofile.as_view({'get': 'list'})),
    path('register', RegisterAPIView.as_view()),
    path('login', LoginAPIView.as_view()),
    path('logout', LogoutView.as_view(), name='knox_logout'),
]
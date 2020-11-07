from django.urls import path, include

from rest_framework import routers

from .views import BackRoutine, Drip

router = routers.DefaultRouter()
router.register('back', BackRoutine, 'back')
router.register('drip', Drip, 'drip')

urlpatterns = [
    path('', include(router.urls)),
    path('back/<int:user_pk>', BackRoutine.as_view({'get': 'list'})),
]
from rest_framework.routers import DefaultRouter
from django.urls import path

from .views import JobViewSet, LoginView

router = DefaultRouter()
router.register('jobs', JobViewSet)

urlpatterns = [path('auth/login/', LoginView.as_view())] + router.urls

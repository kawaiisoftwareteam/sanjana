from rest_framework.routers import DefaultRouter
from django.urls import path

from .views import CandidateCVViewSet, JobViewSet, LoginView

router = DefaultRouter()
router.register('jobs', JobViewSet)
router.register('cvs', CandidateCVViewSet)

urlpatterns = [path('auth/login/', LoginView.as_view())] + router.urls

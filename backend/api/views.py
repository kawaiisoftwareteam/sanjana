from rest_framework import viewsets
from rest_framework.authtoken.models import Token
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth import authenticate

from .models import Job
from .serializers import JobSerializer


class JobViewSet(viewsets.ModelViewSet):
    """Public read access; create/update/delete need an admin token."""
    queryset = Job.objects.all()
    serializer_class = JobSerializer

    def get_permissions(self):
        if self.action in ('list', 'retrieve'):
            return [AllowAny()]
        return super().get_permissions()


class LoginView(APIView):
    authentication_classes = []
    permission_classes = [AllowAny]

    def post(self, request):
        user = authenticate(username=request.data.get('username'), password=request.data.get('password'))
        if not user or not user.is_staff:
            return Response({'detail': 'Invalid username or password'}, status=400)
        token, _ = Token.objects.get_or_create(user=user)
        return Response({'token': token.key})

from django.shortcuts import render
from rest_framework import viewsets
from portfolio.api.serializers import UserSerializer, ProjectSerializer
from portfolio.models import User, Project


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    # lookup_field = 'username'


class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
from rest_framework import serializers
from portfolio.models import User, Project


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        # fields = ('id', 'username', 'first_name', 'last_name', 'email', 'is_staff', 'date_joined', 'about')
        # read_only_fields = ('date_joined', 'username')


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project

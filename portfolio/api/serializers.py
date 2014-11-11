from rest_framework import serializers
from portfolio.models import User, Project


class UserSerializer(serializers.ModelSerializer):
    project_count = serializers.SerializerMethodField('get_project_count')

    class Meta:
        model = User
        fields = ('id', 'project_count', 'username', 'first_name', 'last_name', 'email', 'is_staff', 'date_joined', 'about')
        read_only_fields = ('date_joined',)

    def get_project_count(self, obj):
        return obj.project.count()


class ProjectSerializer(serializers.ModelSerializer):
    owner = UserSerializer(read_only=True)

    class Meta:
        model = Project

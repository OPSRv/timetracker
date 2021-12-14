from django.db.models import query
from rest_framework import serializers
from django.conf import settings
from .models import CustomUser, Project, Task, TimeLog


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('id', 'username', 'position', 'email',
                  'birth_date', 'user_picture')


class TaskSerializerDetail(serializers.ModelSerializer):
    performer = UserSerializer(required=False)
    author = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = Task
        fields = '__all__'


class ProjectSerializerDetail(serializers.ModelSerializer):
    performers = UserSerializer(many=True, read_only=True)

    class Meta:
        model = Project
        fields = ('id', 'name', 'description', 'performers', 'tasks')
        slug_field = 'name'
        depth = 1


class TimeLogSerializer(serializers.ModelSerializer):
    task = TaskSerializerDetail(required=False)

    class Meta:
        model = TimeLog
        fields = '__all__'


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'

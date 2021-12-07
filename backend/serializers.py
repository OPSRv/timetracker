from rest_framework import serializers
from django.conf import settings
from .models import CustomUser, Project, Task, TimeLog


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('id', 'username', 'position', 'email',
                  'birth_date', 'user_picture')


class ProjectSerializer(serializers.ModelSerializer):

    class Meta:
        model = Project
        fields = ('id', 'name', 'description', 'performers')
        lookup_field = 'name'
        slug_field = 'name'


class TaskSerializer(serializers.ModelSerializer):
    performer = UserSerializer(required=False)
    author = serializers.HiddenField(default=serializers.CurrentUserDefault())
    project = ProjectSerializer(required=False)

    class Meta:
        model = Task
        fields = ('id', 'theme', 'description', 'date_start', 'date_end', 'update', 'task_type', 'task_priority',
                  'estimated_time', 'comments', 'performer', 'author', 'project')


class TimeLogSerializer(serializers.ModelSerializer):
    task = TaskSerializer()

    class Meta:
        model = TimeLog
        fields = ('id', 'spent_time', 'comment', 'task')

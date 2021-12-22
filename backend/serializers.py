from django.db.models import fields, query
from rest_framework import serializers
from django.conf import settings
from .models import CustomUser, Project, Task, TimeLog


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('id', 'username', 'position', 'email',
                  'birth_date', 'user_picture', 'is_staff')
        # fields = '__all__'


class TimeLogSerializer(serializers.ModelSerializer):

    class Meta:
        model = TimeLog
        fields = ('id', 'task', 'spent_time', 'comment')


class TaskSerializerDetail(serializers.ModelSerializer):
    performer = UserSerializer(required=False)
    timelog = TimeLogSerializer(many=True, read_only=True)

    class Meta:
        model = Task
        fields = '__all__'
        # fields = ('id', 'theme', 'description', 'date_start', 'date_end', 'update', 'task_type',
        #           'task_priority', 'estimated_time', 'comments', 'author', 'project', 'performer', 'timelog')
        # depth = 1


class ProjectSerializerDetail(serializers.ModelSerializer):
    performers = UserSerializer(many=True, read_only=True)

    class Meta:
        model = Project
        fields = ('id', 'name', 'description', 'performers', 'tasks')
        slug_field = 'name'
        depth = 1


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'

from rest_framework import serializers

from .models import CustomUser, Project, Task, TimeLog

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('id', 'username', 'position', 'email', 'birth_date', 'user_picture',)

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ('id', 'name', 'description', 'slug')

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ('id', 'theme', 'description', 'date_start', 'date_end', 'update', 'task_type', 'task_priority',
                    'estimated_time', 'comments', 'performer', 'author', 'project')

class TimeLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = TimeLog
        fields = ('id', 'spent_time', 'comment', 'task')
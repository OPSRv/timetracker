from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from .models import CustomUser, Project, Task, TimeLog
from .serializers import ProjectSerializerDetail, ProjectSerializer, UserSerializer, TaskSerializer, TaskSerializerDetail, TimeLogSerializer
from .base.permissions import IsPerformersOrAdminViews
from django.core.mail import send_mail
from django.core.mail.message import EmailMultiAlternatives
from django.template.loader import render_to_string
from django.db import models
from django.dispatch import receiver
from django_model_changes import ChangesMixin


class UserViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer
    lookup_field = 'username'
    permission_classes = [AllowAny]


class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    lookup_field = 'name'


class ProjectDetailViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializerDetail
    lookup_field = 'name'
    permission_classes = [IsPerformersOrAdminViews]

    def get_queryset(self):
        if self.request.user.is_superuser:
            return Project.objects.all()
        else:
            return self.request.user.performers.all()


class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    lookup_field = 'theme'
    permission_classes = [AllowAny]


class TaskDetailViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializerDetail
    lookup_field = 'theme'
    permission_classes = [AllowAny]


class TimeLogViewSet(viewsets.ModelViewSet):
    queryset = TimeLog.objects.all()
    serializer_class = TimeLogSerializer
    permission_classes = [AllowAny]

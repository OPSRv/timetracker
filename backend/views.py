from django.http import request
from django.http.response import JsonResponse
from rest_framework import generics, viewsets
from rest_framework.permissions import AllowAny, IsAdminUser
from rest_framework.views import APIView

from timetracker.settings import EMAIL_HOST_USER
from .models import CustomUser, Project, Task, TimeLog
from .serializers import ProjectSerializerDetail, ProjectSerializer, UserSerializer, TaskSerializer, TaskSerializerDetail, TimeLogSerializer
from .base.permissions import IsPerformersOrAdminViews

from django.core.mail import message, send_mail
from django.shortcuts import render, redirect
from django.template.loader import render_to_string
from django.core.mail import EmailMultiAlternatives


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
    permission_classes = [AllowAny]
    # permission_classes = [IsPerformersOrAdminViews]

    # def get_queryset(self):
    #     return self.request.user.performers.all()


class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    lookup_field = 'theme'
    permission_classes = [AllowAny]

    def save(self):
        send_mail(
            'Subject here',
            'Here is the message.',
            EMAIL_HOST_USER,
            ['ops_rv@ukr.net'],
            fail_silently=False,
        )
        print(EMAIL_HOST_USER)


class TaskDetailViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializerDetail
    lookup_field = 'theme'
    permission_classes = [AllowAny]


class TimeLogViewSet(viewsets.ModelViewSet):
    queryset = TimeLog.objects.all()
    serializer_class = TimeLogSerializer
    permission_classes = [AllowAny]

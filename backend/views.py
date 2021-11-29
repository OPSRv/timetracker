from rest_framework import generics, viewsets
from .models import CustomUser, Project, Task, TimeLog
from .serializers import ProjectSerializer, UserSerializer, TaskSerializer, TimeLogSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

class TimeLogViewSet(viewsets.ModelViewSet):
    queryset = TimeLog.objects.all()
    serializer_class = TimeLogSerializer


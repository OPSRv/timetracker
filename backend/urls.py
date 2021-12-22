from django.urls import include, path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'projects', views.ProjectDetailViewSet)
router.register(r'project-create', views.ProjectViewSet, basename='project')
router.register(r'task', views.TaskDetailViewSet)
router.register(r'task-create', views.TaskViewSet)
router.register(r'timelog', views.TimeLogViewSet)


urlpatterns = [
    path('api/', include(router.urls)),
]

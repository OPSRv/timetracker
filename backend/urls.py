from django.urls import include, path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'project', views.ProjectViewSet)
router.register(r'task', views.TaskViewSet)
router.register(r'timelog', views.TimeLogViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]

from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings
from django.conf.urls.static import static
from django.urls.conf import re_path


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('backend.urls')),
    path('api/auth/', include('djoser.urls')),
    path('api/auth-token/', include('djoser.urls.authtoken')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.utils.safestring import mark_safe
from .models import CustomUser, Project, Task, TimeLog


@admin.register(CustomUser)
class CustomUserAdmin(UserAdmin):
    list_display = ['get_image', 'username', 'position', 'is_staff']
    list_display_links = ('username', 'get_image', 'position', 'is_staff')
    readonly_fields = ('get_image',)

    def get_image(self, obj):
        return mark_safe(f'<img src="{obj.user_picture.url}" width="64" height="64">')

    get_image.short_description = 'user_picture'

    # Add user
    add_fieldsets = (
        *UserAdmin.add_fieldsets,
        (
            'Custom fields',
            {
                'fields': (
                    'position',
                    'birth_date',
                    'user_picture',
                )
            }
        )
    )

    # Edit user
    fieldsets = (
        *UserAdmin.fieldsets,
        (
            'Custom fields',
            {
                'fields': (
                    'position',
                    'birth_date',
                    'user_picture',
                )
            }
        )
    )


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    model = Project
    list_display = ['id', 'name', 'description']


@admin.register(Task)
class TaskAdmin(admin.ModelAdmin):
    model = Task
    list_display = ['id', 'theme', 'description', 'date_start', 'date_end', 'update', 'task_type', 'task_priority',
                    'estimated_time', 'comments', 'performer', 'author', 'project']


@admin.register(TimeLog)
class TimeLogAdmin(admin.ModelAdmin):
    model = TimeLog
    list_display = ['id', 'spent_time', 'comment', 'task']

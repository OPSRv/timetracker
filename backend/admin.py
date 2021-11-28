from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser, Project, Task, TimeLog


@admin.register(CustomUser)
class CustomUserAdmin(UserAdmin):
    inlines = []
    model = CustomUser
    list_display = ['username', 'position', 'email', 'birth_date', 'user_picture', 'is_staff']

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
    list_display = ['id', 'name', 'description', 'slug']


@admin.register(Task)
class TaskAdmin(admin.ModelAdmin):
    model = Task
    list_display = ['id', 'theme', 'description', 'date_start', 'date_end', 'update', 'task_type', 'task_priority',
                    'estimated_time', 'comments', 'performer', 'author', 'project']


@admin.register(TimeLog)
class TimeLogAdmin(admin.ModelAdmin):
    model = TimeLog
    list_display = ['id', 'spent_time', 'comment', 'task']

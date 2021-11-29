from django.db import models
from django.db.models import JSONField
from django.urls import reverse
from django.contrib.auth.models import AbstractUser
from datetime import date
from django.conf import settings


def upload_to_user_picture(instance, filename):
    return f'user_picture/{filename}'.format(filename=filename)


class CustomUser(AbstractUser):
    """ Custom  of user model """
    position = models.CharField(max_length=255, verbose_name="Position")
    birth_date = models.DateField(default=date.today)
    user_picture = models.ImageField(verbose_name="Завантаження фото", upload_to=upload_to_user_picture,
                                     default='user_picture/default_user_picture.png')


class Project(models.Model):
    """ Project of model """
    name = models.CharField(max_length=128, blank=False, verbose_name='Project name')
    description = JSONField(default=dict)
    slug = models.SlugField(max_length=255, unique=True, db_index=True, verbose_name="URL")

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('project', kwargs={'project_slug': self.slug})

    class Meta:
        verbose_name = 'Project'
        verbose_name_plural = 'Projects'
        ordering = ['id']


class Task(models.Model):
    """ Task of model """
    theme = models.CharField(max_length=255, verbose_name="Theme task")
    description = models.TextField(blank=False, verbose_name="Description")
    date_start = models.DateTimeField(blank=False, auto_now=False, auto_now_add=False, verbose_name="Date start")
    date_end = models.DateTimeField(blank=False, auto_now=False, auto_now_add=False, verbose_name="Date end")
    update = models.DateTimeField(auto_now=True, auto_now_add=False)
    FEATURE = 'feature'
    BUG = 'bug'
    TASK_TYPE = [
        (FEATURE, 'feature'),
        (BUG, 'bug'),
    ]
    task_type = models.CharField(choices=TASK_TYPE, default=FEATURE, max_length=7, db_index=True)
    NORMAL = 'normal'
    HIGH = 'high'
    URGENT = 'urgent'
    TASK_PRIORITY = [
        (NORMAL, 'normal'),
        (HIGH, 'high'),
        (URGENT, 'urgent'),
    ]
    task_priority = models.CharField(choices=TASK_PRIORITY, default=NORMAL, max_length=6)
    estimated_time = models.PositiveSmallIntegerField(default=0, verbose_name='Estimated hours')
    comments = JSONField()
    performer = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='+')
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='CustomUser')
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='Project')



    class Meta:
        verbose_name = 'Task'
        verbose_name_plural = 'Tasks'
        ordering = ['id']

class TimeLog(models.Model):
    """ TimeLog of model """
    spent_time = models.PositiveSmallIntegerField(verbose_name='Spent time')
    comment = models.CharField(max_length=255, verbose_name='Comment')
    task = models.ForeignKey(Task, on_delete=models.CASCADE, related_name='Task')

    class Meta:
        verbose_name = 'TimeLog'
        verbose_name_plural = 'TimeLog'
        ordering = ['id']

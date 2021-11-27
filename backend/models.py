from django.db import models
from django.db.models import JSONField
from django.db.models import Choices
from django.urls import reverse


class Project(models.Model):
    """ Project model """
    name = models.CharField(max_length=128, blank=False, verbose_name='Project name')
    description = JSONField()
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
    """ Task model """
    theme = models.CharField(max_length=255, verbose_name="Theme task")
    description = models.TextField(blank=False, verbose_name="Description")
    date_start = models.DateTimeField(blank=False, auto_now=False, auto_now_add=False, verbose_name="Date start")
    date_end = models.DateTimeField(blank=False, auto_now=False, auto_now_add=False, verbose_name="Date end")
    FEATURE = 'F'
    BUG = 'B'
    TASK_TYPE = [
        (FEATURE, 'feature'),
        (BUG, 'bug'),
    ]
    task_type = models.CharField(choices=TASK_TYPE, default=FEATURE, max_length=1, db_index=True)
    NORMAL = 'N'
    HIGH = 'H'
    URGENT = 'U'
    TASK_PRIORITY = [
        (NORMAL, 'normal'),
        (HIGH, 'high'),
        (URGENT, 'urgent'),
    ]
    task_priority = models.CharField(choices=TASK_PRIORITY, default=NORMAL, max_length=1)
    estimated_time = models.PositiveSmallIntegerField(verbose_name='Estimated hours')
    comments = JSONField()
    performer = models.ForeignKey('auth.User', on_delete=models.CASCADE,)

class TimeLog(models.Model):
    spent_time = models.PositiveSmallIntegerField(verbose_name='Spent time')
    comment = models.CharField(max_length=255, verbose_name="Сomment")

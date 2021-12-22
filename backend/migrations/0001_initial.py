# Generated by Django 3.2.9 on 2021-12-21 14:53

import backend.models
import datetime
from django.conf import settings
import django.contrib.auth.models
import django.contrib.auth.validators
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='CustomUser',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('username', models.CharField(error_messages={'unique': 'A user with that username already exists.'}, help_text='Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.', max_length=150, unique=True, validators=[django.contrib.auth.validators.UnicodeUsernameValidator()], verbose_name='username')),
                ('first_name', models.CharField(blank=True, max_length=150, verbose_name='first name')),
                ('last_name', models.CharField(blank=True, max_length=150, verbose_name='last name')),
                ('email', models.EmailField(blank=True, max_length=254, verbose_name='email address')),
                ('is_staff', models.BooleanField(default=False, help_text='Designates whether the user can log into this admin site.', verbose_name='staff status')),
                ('is_active', models.BooleanField(default=True, help_text='Designates whether this user should be treated as active. Unselect this instead of deleting accounts.', verbose_name='active')),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now, verbose_name='date joined')),
                ('position', models.CharField(max_length=255, verbose_name='Position')),
                ('birth_date', models.DateField(default=datetime.date.today)),
                ('user_picture', models.ImageField(default='user_picture/default_user_picture.png', upload_to=backend.models.upload_to_user_picture, verbose_name='upload foto')),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.Group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.Permission', verbose_name='user permissions')),
            ],
            options={
                'verbose_name': 'user',
                'verbose_name_plural': 'users',
                'abstract': False,
            },
            managers=[
                ('objects', django.contrib.auth.models.UserManager()),
            ],
        ),
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=128, verbose_name='Project name')),
                ('description', models.TextField(verbose_name='Description')),
                ('slug', models.SlugField(blank=True, unique=True)),
                ('performers', models.ManyToManyField(related_name='performers', to=settings.AUTH_USER_MODEL, verbose_name='performers')),
            ],
            options={
                'verbose_name': 'Project',
                'verbose_name_plural': 'Projects',
                'ordering': ['id'],
            },
        ),
        migrations.CreateModel(
            name='Task',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('theme', models.CharField(max_length=255, verbose_name='Theme task')),
                ('description', models.TextField(verbose_name='Description')),
                ('date_start', models.DateTimeField(verbose_name='Date start')),
                ('date_end', models.DateTimeField(verbose_name='Date end')),
                ('update', models.DateTimeField(auto_now=True)),
                ('task_type', models.CharField(choices=[('feature', 'feature'), ('bug', 'bug')], db_index=True, default='feature', max_length=7)),
                ('task_priority', models.CharField(choices=[('normal', 'normal'), ('high', 'high'), ('urgent', 'urgent')], default='normal', max_length=6)),
                ('estimated_time', models.PositiveSmallIntegerField(default=0, verbose_name='Estimated hours')),
                ('comments', models.JSONField(blank=True, default=list)),
                ('author', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='+', to=settings.AUTH_USER_MODEL)),
                ('performer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='+', to=settings.AUTH_USER_MODEL)),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='tasks', to='backend.project')),
            ],
            options={
                'verbose_name': 'Task',
                'verbose_name_plural': 'Tasks',
                'ordering': ['id'],
            },
        ),
        migrations.CreateModel(
            name='TimeLog',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('spent_time', models.PositiveSmallIntegerField(verbose_name='Spent time')),
                ('comment', models.CharField(max_length=255, verbose_name='Comment')),
                ('task', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='timelog', to='backend.task')),
            ],
            options={
                'verbose_name': 'TimeLog',
                'verbose_name_plural': 'TimeLog',
                'ordering': ['id'],
            },
        ),
    ]

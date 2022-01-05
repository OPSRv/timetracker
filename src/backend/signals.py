from django.core.mail.message import EmailMultiAlternatives
from django.dispatch import receiver
from django.template.loader import render_to_string
from .models import Task, CustomUser
from django.db.models.signals import post_save, pre_save
from django.core.mail import send_mail


@receiver(pre_save, sender=Task)
def send_email_if_changed(sender, instance, **kwargs):
    try:
        obj = Task.objects.get(pk=instance.pk)
    except Task.DoesNotExist:
        pass
    else:
        if not obj.theme == instance.theme or obj.description == instance.description or obj.date_start == instance.date_start or obj.date_end == instance.date_end or obj.task_type == instance.task_type or obj.task_priority == instance.task_priority or obj.estimated_time == instance.estimated_time or obj.comments == instance.comments or obj.performer.username == instance.performer.username:

            context = {
                'task': [obj.theme, obj.description, obj.date_start, obj.date_end,
                         obj.task_type, obj.task_priority, obj.estimated_time, obj.performer.username],

                'task_new': [instance.theme,
                             instance.description,
                             instance.date_start,
                             instance.date_end,
                             instance.task_type,
                             instance.task_priority,
                             instance.estimated_time,
                             instance.performer.username]
            }

            html_body = render_to_string('email.html', context)
            msg_performer = EmailMultiAlternatives(
                subject=f'Hello performer {instance.performer.username}', to=[instance.performer.email])
            msg_performer.attach_alternative(html_body, "text/html")
            msg_performer.send()

            msg_author = EmailMultiAlternatives(
                subject=f'Hello author {obj.author.username}', to=[obj.author.email])
            msg_author.attach_alternative(html_body, "text/html")
            msg_author.send()

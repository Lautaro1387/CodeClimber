from django.contrib.auth.models import AbstractUser, AbstractBaseUser
from django.db import models
from django.conf import settings

import uuid

class User(AbstractUser, AbstractBaseUser):
    points = models.IntegerField(default=0)
    medals = models.IntegerField(default=0)

    def get_medals(self):
        return self.medals

    def get_points(self):
        return self.points

    def __str__(self):
        return str(self.username + '/ id:' + self.id)

class Task(models.Model):

    CATEGORY = (
        ('html', 'HTML'),
        ('css', 'CSS'),
        ('javascript', 'JavaScript'),
    )

    task_id = models.UUIDField(default=uuid.uuid4, unique=True, primary_key=True,
                               editable=False)
    category = models.CharField(max_length=100, null=False, choices=CATEGORY)
    description = models.TextField(null=True)
    question = models.CharField(max_length=100, null=False, unique=True)
    answer = models.CharField(max_length=50, null=False)
    points = models.IntegerField(default=0, null=False)
    user_id = models.ForeignKey(settings.AUTH_USER_MODEL, 
                                on_delete=models.CASCADE, null=False, blank=False)
    is_complete = models.BooleanField(default=False, null=True, blank=True)
            
    def __str__(self):
        return str(self.category + ', question:' + self.question)

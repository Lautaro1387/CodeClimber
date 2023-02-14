# from django.contrib.auth.models import AbstractUser, AbstractBaseUser
from django.db import models

import uuid

class User(models.Model):
    id = models.UUIDField(default=uuid.uuid4, unique=True, primary_key=True,
                               editable=False)
    username = models.CharField(max_length=20, null=False, unique=True, blank=False)
    password = models.CharField(max_length=15, null=False, blank=False)
    email = models.EmailField(max_length=40, null=False, blank=False, unique=True)
    points = models.IntegerField(default=0)
    medals = models.IntegerField(default=0)
    is_active = models.BooleanField(default=True, null=True, blank=True)
    is_created = models.DateTimeField(auto_now_add=True, editable=False)

    def get_medals(self):
        return self.medals

    def get_points(self):
        return self.points

    def __str__(self):
        return str(self.username + '/ id:' + self.id)

class Quiz(models.Model):

    CATEGORY = (
        ('html', 'HTML'),
        ('css', 'CSS'),
        ('javascript', 'JavaScript'),
    )

    quiz_id = models.UUIDField(default=uuid.uuid4, unique=True, primary_key=True,
                               editable=False)
    category = models.CharField(max_length=100, null=False, choices=CATEGORY)
    description = models.TextField(null=True)
    question = models.CharField(max_length=100, null=False, unique=True)
    answer = models.CharField(max_length=50, null=False)
    points = models.IntegerField(default=0, null=False)
    user_id = models.ForeignKey(User, 
                                on_delete=models.CASCADE, null=False, blank=False)
    is_complete = models.BooleanField(default=False, null=True, blank=True)
            
    def __str__(self):
        return str(self.category + ' / question:' + self.question)

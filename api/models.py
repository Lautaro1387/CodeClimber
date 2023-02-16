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
        return str(self.username + '/ id:' + str(self.id))

class Question(models.Model):
    CATEGORY = (
        ('HTML', 'HTML'),
        ('CSS', 'CSS'),
        ('Python', 'Python'),
        ('JavaScript', 'JavaScript'),
    )
    id = models.AutoField(primary_key=True, blank=False, null=False, unique=True)
    question = models.CharField(max_length=300, blank=False, null= False)
    category = models.CharField(max_length=100, null=False, choices=CATEGORY)
    
    def __str__(self):
        return self.category
    
class Options(models.Model):
    question = models.ForeignKey(Question, related_name="options", on_delete=models.CASCADE)
    answer = models.CharField(max_length=300)
    is_correct = models.BooleanField(default=False)

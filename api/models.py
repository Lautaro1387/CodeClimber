from django.contrib.auth.models import AbstractUser
from django.db import models

from django.conf import settings

class User(AbstractUser):
    points = models.IntegerField(default=0)
    medals = models.IntegerField(default=0)
    image = models.ImageField(upload_to='users/%Y/%m/%d', null=True, blank=True)

    def get_image(self):
        if self.image:
            return '{}{}'.format(settings.MEDIA_URL, self.image)
        return '{}{}'.format(settings.MEDIA_URL, 'media/default.png')

    def get_medals(self):
        return self.medals

    def get_points(self):
        return self.points

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

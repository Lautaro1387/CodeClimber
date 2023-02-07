from django.db import models

# Create your models here.
class User(models.Model):
    id = models.AutoField(primary_key=True, max_length=5, unique=True)
    username = models.CharField(max_length=40, null=False, unique=True)
    password = models.CharField(max_length=15, null=False, unique=True)
    email = models.EmailField(max_length=40, null=False, unique=True)
    points = models.IntegerField(default=0)
    medals = models.IntegerField(default=0)
    status = models.BooleanField(default=False)
    photo = models.ImageField(upload_to='static/img', default='static/img/default.png', null=True, blank=True, unique=True)

class Task(models.Model):
    id = models.AutoField(primary_key=True, max_length=5, unique=True)
    name = models.CharField(max_length=100)
    description = models.TextField()
    question = models.TextField()
    answer = models.TextField()
    points = models.ForeignKey(User.points, on_delete=models.CASCADE, related_name='points')
    user_id = models.ForeignKey(User.id, on_delete=models.CASCADE, related_name='user_id')

class Friends(models.Model):
    id = models.charField(primary_key=True) # 'identificador' asociado a la relación entre user1 y user2
    user_id1 = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user_id1')
    user_id2 = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user_id2')

class Ranking(models.Model):
    id = models.ForeignKey(User, on_delete=models.CASCADE)
    username = # FK User.username
    points = # FK User.points
    medals = # FK User.medals

class Messages(models.Model):
    id = models.IntegerField(max_length=5)
    message = models.TextField()
    fecha_hora = models.DateTimeField()
    user_id_origen = # FK User.id
    user_id_destino = # FK User.id
    status = # FK User.status
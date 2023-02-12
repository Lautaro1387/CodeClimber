from unicodedata import category
from rest_framework import serializers

from .models import User
from .models import Task

class UserSerializer(serializers.ModelSerializer):
    points = serializers.CharField(source='get_points')
    medals = serializers.CharField(source='get_medals')
    class Meta:
        model = User
        fields = [
            'id',
            'username',
            'password',
            'first_name'
            'email',
            'user_permissions',
            'is_staff',
            'is_active',
            'is_superuser',
            'last_login',
            'date_joined',
            'points',
            'medals',
        ]

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'
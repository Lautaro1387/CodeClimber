from rest_framework.serializers import ModelSerializer

from .models import User, Quiz

class QuizSerializer(ModelSerializer):
    class Meta:
        model = Quiz
        fields = '__all__'

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
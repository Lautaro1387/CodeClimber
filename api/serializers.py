from rest_framework.serializers import ModelSerializer
from .models import User, Options, Question
class OptionsSerializer(ModelSerializer):
    class Meta:
        model = Options
        fields = (
            "answer", 
            "is_correct"
            )
class QuestionSerializer(ModelSerializer):
    options = OptionsSerializer(many=True, read_only=True)
    class Meta:
        model = Question
        fields = (
            "id",
            "question",
            "category", 
            "options"
            )
class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class SignUpSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = (
            "username",
            "password",
            "email"
        )
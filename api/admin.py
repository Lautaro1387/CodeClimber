from django.contrib import admin

from .models import Quiz, User

@admin.register(Quiz)
class QuizAdmin(admin.ModelAdmin):
    list_display = [
        'quiz_id',
        'category',
        'description',
        'question',
        'answer',
        'points',
        'user_id',
        'is_complete'
    ]

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = [
        'id',
        'username',
        'password',
        'email',
        'points',
        'medals',
        'is_active',
    ]
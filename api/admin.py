from django.contrib import admin
from .models import User, Question, Options

class OptionsInLine(admin.TabularInline):
    model = Options
    extra = 4

@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
    inlines = [OptionsInLine]
    list_display = [
        'id',
        'question',
        'category',
    ]

@admin.register(Options)
class OptionAdmin(admin.ModelAdmin):
    list_display = [
        'answer',
        'is_correct',
        'question'
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
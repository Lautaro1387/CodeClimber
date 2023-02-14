from django.urls import path

from . import views

# ver con extensión Thunder Client
urlpatterns = [
    path('', views.apiOverview, name='apiOverview'),
    path('users/', views.users, name='users'),
    path('user/<str:user_id>', views.user_detail, name='user_detail'),
    path('quizes/', views.quizes, name='quizes'),
    path('quiz/<str:quiz_id>', views.quiz_detail, name='quiz_detail'),
]
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name="home")
    path('profile/<user_id>', views.profile, name="profile")
    path('profile/<user_id>/friends', view.friends, name="friends")
    path('tasks/', views.tasks, name="tasks")
    path('ranking/', views.ranking, name="ranking")
]

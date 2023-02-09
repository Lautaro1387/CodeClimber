from django.contrib import admin
from .models import user, task, friends, ranking, messages
# Register your models here.
admin.site.register(user)
admin.site.register(task)
admin.site.register(friends)
admin.site.register(ranking)
admin.site.register(messages)
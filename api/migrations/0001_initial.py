# Generated by Django 4.0.6 on 2023-02-15 23:57

from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Question',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('question', models.CharField(max_length=255)),
                ('category', models.CharField(choices=[('html', 'HTML'), ('css', 'CSS'), ('javascript', 'JavaScript')], max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False, unique=True)),
                ('username', models.CharField(max_length=20, unique=True)),
                ('password', models.CharField(max_length=15)),
                ('email', models.EmailField(max_length=40, unique=True)),
                ('points', models.IntegerField(default=0)),
                ('medals', models.IntegerField(default=0)),
                ('is_active', models.BooleanField(blank=True, default=True, null=True)),
                ('is_created', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='Options',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('answer', models.CharField(max_length=255)),
                ('is_correct', models.BooleanField(default=False)),
                ('question', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='options', to='api.question')),
            ],
        ),
    ]

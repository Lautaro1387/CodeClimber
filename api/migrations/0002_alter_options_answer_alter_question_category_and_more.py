# Generated by Django 4.0.6 on 2023-02-16 22:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='options',
            name='answer',
            field=models.CharField(max_length=300),
        ),
        migrations.AlterField(
            model_name='question',
            name='category',
            field=models.CharField(choices=[('HTML', 'HTML'), ('CSS', 'CSS'), ('Python', 'Python'), ('JavaScript', 'JavaScript')], max_length=100),
        ),
        migrations.AlterField(
            model_name='question',
            name='question',
            field=models.CharField(max_length=300),
        ),
    ]
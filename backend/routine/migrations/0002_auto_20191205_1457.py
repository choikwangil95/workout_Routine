# Generated by Django 2.2.7 on 2019-12-05 05:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('routine', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='backroutine',
            name='fri',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='backroutine',
            name='mon',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='backroutine',
            name='sat',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='backroutine',
            name='sun',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='backroutine',
            name='thu',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='backroutine',
            name='tue',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='backroutine',
            name='wed',
            field=models.BooleanField(default=False),
        ),
    ]

# Generated by Django 2.2.7 on 2019-12-02 01:58

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='BackRoutine',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_pk', models.IntegerField(blank=True)),
                ('deadligft_reps', models.IntegerField(default=0)),
                ('deadligft_set', models.IntegerField(default=0)),
                ('pullup_reps', models.IntegerField(default=0)),
                ('pullup_set', models.IntegerField(default=0)),
                ('b_row_reps', models.IntegerField(default=0)),
                ('b_row_set', models.IntegerField(default=0)),
                ('d_row_reps', models.IntegerField(default=0)),
                ('d_row_set', models.IntegerField(default=0)),
                ('o_a_d_row_reps', models.IntegerField(default=0)),
                ('o_a_d_row_set', models.IntegerField(default=0)),
                ('lackpull_reps', models.IntegerField(default=0)),
                ('lackpull_set', models.IntegerField(default=0)),
                ('let_pull_down_reps', models.IntegerField(default=0)),
                ('let_pull_down_set', models.IntegerField(default=0)),
                ('seated_cable_row_reps', models.IntegerField(default=0)),
                ('seated_cable_row_set', models.IntegerField(default=0)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]

# Generated by Django 2.2.7 on 2019-12-13 03:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('routine', '0002_auto_20191205_1457'),
    ]

    operations = [
        migrations.AddField(
            model_name='backroutine',
            name='b_row_weight',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='backroutine',
            name='d_row_weight',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='backroutine',
            name='deadligft_weight',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='backroutine',
            name='lackpull_weight',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='backroutine',
            name='let_pull_down_weight',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='backroutine',
            name='o_a_d_row_weight',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='backroutine',
            name='pullup_weight',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='backroutine',
            name='seated_cable_row_weight',
            field=models.IntegerField(default=0),
        ),
    ]

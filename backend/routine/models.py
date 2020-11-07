from django.db import models
from django.contrib.auth.models import User
from django.dispatch import receiver
from django.db.models.signals import post_save
# Create your models here.

class BackRoutine(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    user_pk = models.IntegerField(blank=True)
    deadligft_reps = models.IntegerField(default=0 ,blank=True)
    deadligft_set = models.IntegerField(default=0 ,blank=True)
    deadligft_weight = models.IntegerField(default=0 ,blank=True)
    pullup_reps = models.IntegerField(default=0,blank=True)
    pullup_set = models.IntegerField(default=0,blank=True)
    pullup_weight = models.IntegerField(default=0,blank=True)
    b_row_reps = models.IntegerField(default=0,blank=True)
    b_row_set = models.IntegerField(default=0,blank=True)
    b_row_weight = models.IntegerField(default=0,blank=True)
    d_row_reps = models.IntegerField(default=0,blank=True)
    d_row_set = models.IntegerField(default=0,blank=True)
    d_row_weight = models.IntegerField(default=0,blank=True)
    o_a_d_row_reps = models.IntegerField(default=0,blank=True)
    o_a_d_row_set = models.IntegerField(default=0,blank=True)
    o_a_d_row_weight = models.IntegerField(default=0,blank=True)
    lackpull_reps = models.IntegerField(default=0,blank=True)
    lackpull_set = models.IntegerField(default=0,blank=True)
    lackpull_weight = models.IntegerField(default=0,blank=True)
    let_pull_down_reps = models.IntegerField(default=0,blank=True)
    let_pull_down_set = models.IntegerField(default=0,blank=True)
    let_pull_down_weight = models.IntegerField(default=0,blank=True)
    seated_cable_row_reps = models.IntegerField(default=0,blank=True)
    seated_cable_row_set = models.IntegerField(default=0,blank=True)
    seated_cable_row_weight = models.IntegerField(default=0,blank=True)
    mon = models.BooleanField(default=False)
    tue = models.BooleanField(default=False)
    wed = models.BooleanField(default=False)
    thu = models.BooleanField(default=False)
    fri = models.BooleanField(default=False)
    sat = models.BooleanField(default=False)
    sun = models.BooleanField(default=False)

# 여기서 @receiver로 작성된 함수들은 User 모델로부터 post_save라는 신호,
# 즉 User 모델 인스턴스 생성에 맞춰 Backroutine 모델 인스턴스 또한 함께 생성하라는 것
@receiver(post_save, sender=User)
def create_user_backroutine(sender, instance, created, **kwargs):
    if created:
        BackRoutine.objects.create(user=instance, user_pk=instance.id)


@receiver(post_save, sender=User)
def save_user_backroutine(sender, instance, **kwargs):
    instance.backroutine.save()

class Drip(models.Model):
    drip = models.CharField(max_length=200, blank=True)
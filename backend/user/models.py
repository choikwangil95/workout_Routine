from django.db import models
from django.contrib.auth.models import User
from django.dispatch import receiver
from django.db.models.signals import post_save
# Create your models here.

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    user_pk = models.IntegerField(blank=True)
    email = models.EmailField(max_length=500, blank=True)
    nickname = models.CharField(max_length=200, blank=True)
    point = models.IntegerField(default=0)
    weight = models.IntegerField(default=0)
    height = models.IntegerField(default=0)
    age = models.IntegerField(default=0)
    selfme = models.TextField(max_length=500,blank=True, null=True)
    bench = models.IntegerField(default=0)
    deadlift = models.IntegerField(default=0)
    squat = models.IntegerField(default=0)
    like = models.CharField(max_length=200, blank=True)
    phone = models.CharField(max_length=200, blank=True)
    perpose = models.CharField(max_length=200, blank=True)

# 여기서 @receiver로 작성된 함수들은 User 모델로부터 post_save라는 신호,
# 즉 User 모델 인스턴스 생성에 맞춰 Profile 모델 인스턴스 또한 함께 생성하라는 것
@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance, user_pk=instance.id)


@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()
from django.db import models
from django.contrib.auth.models import User  # added

class Post(models.Model):
    post = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(
    User, related_name="post", on_delete=models.CASCADE, null=True)  #added
    # related_name이 PK로 연결한 model 말해주는듯 
    
    def __str__(self):
        return self.post
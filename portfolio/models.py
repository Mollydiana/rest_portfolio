from datetime import datetime
from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    about = models.TextField(null=True)

    def __unicode__(self):
        return u"{}".format(self.username)


class Project(models.Model):
    title = models.CharField(max_length=75)
    description = models.TextField()
    owner = models.ForeignKey(User, related_name="project")
    created_time = models.DateTimeField(auto_now_add=True)
    follower = models.ManyToManyField(User, related_name="followed_project", null=True, blank=True)

    def __unicode__(self):
        return self.title
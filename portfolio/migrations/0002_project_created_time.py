# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='created_time',
            field=models.DateTimeField(default=datetime.datetime(2014, 11, 10, 23, 47, 48, 856946, tzinfo=utc), auto_now_add=True),
            preserve_default=False,
        ),
    ]

# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-12-06 15:45
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_googleuser_slack_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='creator',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.GoogleUser'),
        ),
    ]

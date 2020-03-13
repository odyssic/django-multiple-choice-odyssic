from django.db import models
from django.utils.text import slugify
from datetime import datetime
from django.contrib.auth import get_user_model
from users.models import User
from PIL import Image


class Deck(models.Model):
    name = models.CharField(max_length=60)
    subject = models.CharField(max_length=60)

    user = models.ForeignKey(
        User, null=True, related_name='decks', on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.name} {self.subject}'


class Card(models.Model):

    cards = models.ForeignKey(
        'Deck', on_delete=models.CASCADE, related_name='cards', default='cards')
    question = models.CharField(max_length=300)
    answer = models.CharField(max_length=300)

    def __str__(self):
        return f'{self.cards}'

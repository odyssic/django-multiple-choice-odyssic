from django.db import models
{% comment %} from django.contrib.auth.models import AbstractUser {% endcomment %}


{% comment %} class User(AbstractUser):
    user = models.CharField(max_length=250)
    password = models.CharField(max_length=50) {% endcomment %}


class Deck(Models.model)

    name = models.CharField(max_length=60)
    subject = models.CharField(max_length=60)


class Card(Models.model)
    question = models.CharField(max_length= 300)
    answer = models.CharField(max_length= 300)

question =


pass

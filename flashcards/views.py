from django.shortcuts import render, redirect, get_object_or_404, HttpResponseRedirect
from django.contrib.auth.decorators import login_required
from .models import Deck, Card
from .forms import DeckForm, CardForm
from django.contrib.auth import authenticate, login
from users.models import User


def my_view(request):
    username = request.POST['username']
    password = request.POST['password']
    user = authenticate(username=username, password=password)
    if user is not None:
        if user.is_active:
            login(request, user)
            redirect("home")
        else:
            return render("Account is not active")
            ...
    else:
        return render('Nope. Invalid Login Credentials')

# @login_required


def index(request):
    users = User.objects.all()
    cards = Card.objects.all()
    deck = Deck.objects.all()

    return render(request, "core/index.html", {'users': users, 'deck': deck, 'cards': cards})


def decks(request):
    decks = Deck.objects.all()

    return render(request, "core/decks.html", {'decks': decks})

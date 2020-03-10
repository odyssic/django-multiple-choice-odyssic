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
    decks = Deck.objects.all()
    cards = Card.objects.all()

    return render(request, "core/index.html", {'users': users, "decks": decks, "cards": cards})

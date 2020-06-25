from django.shortcuts import render, redirect, get_object_or_404, HttpResponseRedirect

from django.contrib.auth.decorators import login_required
from django.views.generic.base import View
from .models import Deck, Card
from .forms import DeckForm, CardForm
from django.contrib.auth import authenticate, login, logout
from users.models import User
import random
from django import template
from django.views.decorators.http import require_http_methods, require_POST
from .forms import NewUserForm
from django.contrib import messages

# =======================AUTHENTICATION========================


@login_required
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

@login_required
def login_request(request):
    if request.method == 'POST':
        form = AuthenticationForm(request=request, data=request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)
                messages.info(request, f"You are now logged in as {username}")
                return redirect('/')
            else:
                messages.error(request, "Invalid username or password.")
        else:
            messages.error(request, "Invalid username or password.")
    form = AuthenticationForm()
    return render(request=request,
                  template_name="flashcards/login.html",
                  context={"form": form})

def logout_request(request):
    logout(request)
    messages.info(request, "Logged out successfully!")
    return redirect("/")


# =======================CARDS FUNCTIONALITY========================

@login_required
def index(request):
    users = User.objects.all()
    decks = Deck.objects.all()

    return render(request, "core/index.html", {'users': users, 'decks': decks})

@login_required
def flashcards(request, pk):
    deck = Deck.objects.get(pk=pk)
    cards = Card.objects.filter(deck=deck).order_by('?')
    
    return render(request, "core/flashcards.html", {'deck': deck, 'cards': cards, 'pk': pk})
    

@login_required

def details(request, pk):
    deck = get_object_or_404(Deck, pk=pk)
    cards = Card.objects.filter(deck=deck)

    return render(request, 'core/details.html', {'deck':deck,'cards':cards, 'pk':pk})


@login_required
def add_deck(request):
    
    if request.method == 'POST':
        form = DeckForm(request.POST)
        
        if form.is_valid():
            # deckpk = form.cleaned_data['deck'].pk
            deck = form.save()
            print('deck', deck)
            print('deck.pk', deck.pk)
            return redirect("flashcards", deck.pk)
    else:
        form = DeckForm()
    return render(request, 'core/add_deck.html', {'form': form})

@login_required
def delete_deck(request, pk):
    deck = get_object_or_404(Deck, pk=pk)
    deck.delete()
    return redirect('home')

@login_required
def add_card(request, pk):
    deck = get_object_or_404(Deck, pk=pk)

    if request.method == 'POST':
        form = CardForm(request.POST) 
        if form.is_valid():
            card = form.save()
            print('card')
            return redirect("flashcards", pk)
    else:
        form = CardForm()
    return render(request, 'core/add_card.html', {'form': form, 'deck': deck, 'pk': pk})

    
@login_required
def delete_card(request, pk):
    card = get_object_or_404(Card, pk=pk)
    card.delete()
    return redirect('flashcards', pk)


def add_card_from_deck(request, pk):
    if request.method == 'POST':
        form = CardForm(request.POST)
        
        if form.is_valid():
            card = form.save()
            return HttpResponsePermanentRedirect(request.META.get('HTTP_REFERER', '/'))
    

@login_required
def edit_card(request, pk):
    card = get_object_or_404(Card, pk=pk)
    print('card', card)
    
    form = CardForm(request.POST, instance=card)
        
    if form.is_valid():
            deckpk = form.cleaned_data['deck'].pk
            print('deckpk', deckpk)
            form.save()
            
            return redirect('flashcards', deckpk)

    else:
            form = CardForm(instance=card)

            return render(request, 'core/edit_card.html', {'form': form})

from django import forms

from .models import User, Deck, Card


class DeckForm(forms.ModelForm):

    class Meta:
        model = Deck
        fields = ('name', 'subject')


class CardForm(forms.ModelForm):

    class Meta:
        model = Card
        fields = ('cards', 'question', 'answer')

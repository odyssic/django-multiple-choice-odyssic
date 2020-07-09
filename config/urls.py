
from django.conf.urls import include, url
from django.contrib import admin
from django.conf import settings
from django.urls import include, path,re_path
from flashcards import views
from django.conf.urls.static import static
# from flashcards.views import LogoutView


urlpatterns = [
    path('', views.index, name='home'),
    path('admin/', admin.site.urls),
    path('deck/<int:pk>/flashcards/', views.flashcards, name='flashcards'),
    path('delete-deck/<int:pk>', views.delete_deck, name='delete-deck'),
    path('add-deck/', views.add_deck, name='add-deck'),
    path('deck/<int:pk>/add-card/', views.add_card, name='add-card'),
    path('deck/flashcards/edit-card/<int:pk>', views.edit_card, name='edit-card'),
    path('delete-card/<int:pk>', views.delete_card, name='delete-card'),
    path('accounts/', include('django.contrib.auth.urls')),
    path('accounts/', include('registration.backends.simple.urls')),
    path('logout/', views.logout_request, name="logout"),
    path('deck/<int:pk>/details/', views.details, name='details'),
    path('deck/<int:pk>/edit-deck/', views.edit_deck, name='edit-deck')
]


if settings.DEBUG:
    import debug_toolbar
    urlpatterns = [
        path('__debug__/', include(debug_toolbar.urls)),

    ] + urlpatterns

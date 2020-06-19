
from django.conf.urls import include, url
from django.contrib import admin
from django.conf import settings
from django.urls import include, path
from flashcards import views
from django.conf.urls.static import static


urlpatterns = [
    path('', views.index, name='home'),
    path('admin/', admin.site.urls),
    path('flashcards/<int:pk>', views.flashcards, name='flashcards'),
    path('delete-deck/<int:pk>', views.delete_deck, name='delete-deck'),
    path('add-deck/', views.add_deck, name='add-deck'),
    path('add-card/', views.add_card, name='add-card'),
    path('edit-card/<int:pk>', views.edit_card, name='edit-card'),
    path('delete-card/<int:pk>', views.delete_card, name='delete-card'),
    path('accounts/', include('django.contrib.auth.urls')),
    path('accounts/', include('registration.backends.simple.urls')),

]


if settings.DEBUG:
    import debug_toolbar
    urlpatterns = [
        path('__debug__/', include(debug_toolbar.urls)),

        # For django versions before 2.0:
        # url(r'^__debug__/', include(debug_toolbar.urls)),
    ] + urlpatterns

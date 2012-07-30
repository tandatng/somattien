from django.conf.urls.defaults import patterns

urlpatterns = patterns('',
    (r'^$', 'wwar.wwarapp.view.deck.deck_view.load'),
    (r'^(?P<deck_type>\d+)/$', 'wwar.wwarapp.view.deck.deck_view.load'),
    (r'^detail/(?P<deck_type>\d+)/(?P<deck_id>\d+)/$', 'wwar.wwarapp.view.deck.deck_view.detail'),
    (r'^edit_deckname/$', 'wwar.wwarapp.view.deck.deck_view.edit_deckname'),
    )
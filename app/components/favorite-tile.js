import Ember from 'ember';

export default Ember.Component.extend({
  favoriteRestaurant: Ember.inject.service(),
  favForm: false,

  actions: {
    addFavorite(item) {
      this.set('favForm', true);
      this.get('favoriteRestaurant').add(item);
    },
    saveFav() {
      var params = {
        title: this.get('title'),
        place: this.get('place')
      };
      this.set('favForm', false);
      this.sendAction('saveFav', params);
    }
  }
});

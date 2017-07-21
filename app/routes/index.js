import Ember from 'ember';

export default Ember.Route.extend({
  model() {
      return Ember.RSVP.hash({
          reviews: this.store.findAll('review'),
          rates: this.store.findAll('rate'),
          favorites: this.store.findAll('favorite')
      });
  },
  actions: {
    saveProperty(params) {
      var newProperty = this.store.createRecord('review', params);
        newProperty.save();
        this.transitionTo('index');
      },
      /*
      saveFav(params) {
        var newFav = this.store.createRecord('favorite', params);
        newFav.save();
        this.transitionTo('index');
      }
      */
    }
  });

import Ember from 'ember';

export default Ember.Route.extend({
  model() {
      return Ember.RSVP.hash({
          reviews: this.store.findAll('review'),
          rates: this.store.findAll('rate')
      });
  },
  actions: {
    saveProperty(params) {
      var newProperty = this.store.createRecord('review', params);
        newProperty.save();
        this.transitionTo('index');
      }
    }
  });

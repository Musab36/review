import Ember from 'ember';

export default Ember.Component.extend({
  rating: Ember.computed('rate.user', 'rate.rate', function() { // We declared a new computed property named rating
    return this.get('rate.user') + '-' + this.get('rate.rate'); // This computed combines the user and the rate into one property
  })
});

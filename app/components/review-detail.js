import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['rating:desc'],
  sortedRates: Ember.computed.sort('review.rates', 'sortBy'),

  imageShowing: true,
  actions: {
    imageHide() {
      this.set('imageShowing', false);
    },
    imageShow() {
      this.set('imageShowing', true);
    }
  }
});

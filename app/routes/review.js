import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('review', params.review_id);
  },
  actions: {
    saveRate(params) {
      var newRate = this.store.createRecord('rate', params);
      var review = params.review;
      review.get('rates').addObject(newRate);
      newRate.save().then(function() {
        return review.save();
      });
      this.transitionTo('review', review);
    }
  }
});

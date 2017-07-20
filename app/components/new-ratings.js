import Ember from 'ember';

export default Ember.Component.extend({
  formIsShown: false,

  actions: {
    newRate() {
      this.set('formIsShown', true);
    },
    saveRate() {
      var params = {
        user: this.get('user'),
        rate: this.get('rate'),
        comment: this.get('comment'),
        review: this.get('review')
      };
      this.set('formIsShown', false);
      this.sendAction('saveRate', params);
    }
  }
});

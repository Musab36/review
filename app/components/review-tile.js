import Ember from 'ember';

export default Ember.Component.extend({
  imageIsShown: false, // Image display set to false

  actions: {
    showImage() { // Image showing button
      this.set('imageIsShown', true); // Image is displayed after clicking show image button
    },
    hideImage() { // Image hide action
      this.set('imageIsShown', false); // Image is set to false again
    }
  }
});

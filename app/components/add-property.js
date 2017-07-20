import Ember from 'ember';

export default Ember.Component.extend({
  addForm: false,

  actions: {
    newProperty() {
      this.set('addForm', true);
    },
    saveProperty() {
      var params = {
        author: this.get('author'),
        restaurant: this.get('restaurant'),
        city: this.get('city'),
        image: this.get('image')
      };
      this.set('addForm', false);
      this.sendAction('saveProperty', params);
    }
  }
});

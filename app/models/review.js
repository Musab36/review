import DS from 'ember-data';

export default DS.Model.extend({
restaurant: DS.attr(),
city: DS.attr(),
image: DS.attr(),
author: DS.attr(),
rates: DS.hasMany('rate', { async: true })
});

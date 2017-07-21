import Ember from 'ember';

export function totalRates(params) {
  var totalRates = 0;
  for( var i = 0; i < params.rates; i++) {
    totalRates += params.rates[i].rate;
  }
  return totalRates.params;
}

export default Ember.Helper.helper(totalRates);

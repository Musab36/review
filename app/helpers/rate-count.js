import Ember from 'ember';

export function rateCount(params) {
  var review = params[0]; // Ae’re grabbing the first item from the parameters
                          // And assigning it the variable name review.
  if(review.get('rates').get('length') >= 5) { // Then, we check if the number of rates for the rental is five or more.
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-thumbs-up"></span>');
  } // If the length is equlas or greater than 5, we display a Bootstrap glyphicon. If not, nothing happens.
}

export default Ember.Helper.helper(rateCount);

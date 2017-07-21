import Ember from 'ember';

export function ratingStars(params) {
var ratingStar = params[0]; // We pull the first item in the parameters
if(ratingStar.get('rates').get('length') >= 5) {
  return '★★★★★';        // Then, depending on how high ratingStar is, we return anywhere from 5 to 1 star symbols.
}else if (ratingStar.get('rates').get('length') >= 4) {
  return '★★★★';
}else if (ratingStar.get('rates').get('length') >= 3) {
  return '★★★';
}else if (ratingStar.get('rates').get('length') >= 2) {
  return '★★';
}else if(ratingStar.get('rates').get('length') >= 1) {
  return '★';
}
}

export default Ember.Helper.helper(ratingStars);

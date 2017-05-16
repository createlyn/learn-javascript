// this branch basics.js was commented out
(function() {
  'use strict';

  if (1 + 1 === 2) {
    console.log('The expression is true')
  }

  if (true === false) {
    console.log('We will never see this');
  } else {
    console.log('We will always see this');
  }

  var colour = 'red';
  if (colour === 'blue') {
    console.log('It is blue');
  } else if (colour === 'green') {
    console.log('It is green');
  } else {
    console.log('It is red');
  }

}());


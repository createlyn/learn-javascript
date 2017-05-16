(function() {
  'use strict';

  var array = ['one', 'two', 'three'];

  console.log(array.length);

// add array item to end of array
  array.push('four');
  console.log(array);


// add array item at start
  array.unshift('zero');
  console.log(array);

// remove last item in array
  array.pop();
  console.log(array);



// this part wasn't working right - 4:30 on 4.2



// takes up to 3 arguments
// if only number - all items to end of array will be removed
  array.splice(0);
  console.log(array);

// 2nd number is number of items to be removed
// new items to be inserted
  array.splice(0, 2);
  console.log(array);

// 3rd is items to be added
  array.splice(0, 3, 'a', 'b', 'c');
  console.log(array);

}());
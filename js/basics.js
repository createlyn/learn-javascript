var theMeaningOfLife = 42;
  // foo = 'bar',
  // baz, quux;

// foo = baz;

// strings
var number = 1;
var string= 'hello';
var quotes = '"Hello", said the man';
var escaped = '"Oh no you didn\'t" she said';
var joined = 'wait, ' + 'what?';

// booleans = true or false


// array []
// container for multiple values
// fixed numerical indices
// indices are zero-bases

var array = [5, 'something', true];
//array[0]; - will return = 5


// objects
// container for key value pairs
// pairs separated by commas
// Key and value separated by colon

var object = {
  myNumber: 10,
  myString: 'woohoo!'
};

object.myNumber; // will return 10
object['myString']; // will return 'woohoo!'


// operators
var addition = 1 + 1; // addition = 2
var subtraction = 1 - 1; // subtraction = 0
var multiplication = 5 * 2; // multiplication = 10
var division = 5 / 2.5; // division = 2
var remainder = 5 % 2 // remainder = 1


var postfix = 5;
var prefix = 5;

var additionAssignment = 1;
additionAssignment +- 1; // additionAssignment = 2

var subtractionAssignment = 1;
subtractionAssignment -= 1; // subtractionAssignment = 0

var multiplicationAssignment = 2;
var divisionAssignment = 5;
var modulusAssignment = 5;
multiplicationAssignment *= 2 // multiplicationAssignment = 4
divisionAssignment /= 2; // divisionAssignment = 2
modulusAssignment %= 2; // modulusAssignment = 1

// comparison operators
// equality comparison
// greater-than comparison
// less-than comparison

// regular/non-strict ==
// strict ===

// 1 == true -- '1 is equal to true' -- returns true
// 1 === true -- '' -- returns false


var precedence = 1 + 4 * 2; // precedence = 9
// reference - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

// Objects
var objectNew = {
  property1: true,
  property2: 'hello'
};

var stringNew = 'hello';
var stringObject = new String('An object string');

// Functions
function getThingByColor(color) {
  var things = {
    red: 'a red thing',
    green: 'a green thing',
    blue: 'a blue thing'
  };

  return things[color] || 'Sorry, no thing of that color exists';
}

function myFunction(message) {
  console.log(message);

  return true;
}

var myOtherFunction = function myOtherFunction() {
  console.log('function expression');
};

console.log(hoistedVariable);
var hoistedVariable = 'test';

(function invokeImmediately() {
  console.log('invoked automatically');
}());

!function alsoInvokedAutomatically() {
  console.log('invoked automatically too');
}();

// scope
// defines the accessibility of variables in our code
// functions create their own scope
// variables defined inside of a function can't be updated outside of the function


var global = 1
function aFunction() {
  var local = 2;
  console.log(global);
  console.log(local);
}

// strict mode
// forces some silent errors to throw real errors - easier for debugging
// prevents accidental global variables when omitting the var statement

// 'use strict'
// first line of function or file
// pref. in function to avoid concatenation issues

// this
// usually an object
// different values depending on where it is used
// in global scope - this refers to the window object
// inside the method of a custom object - this is the custom object
// in a constructor - this is the instance object returned by the constructor

(function () {
  'use strict';
  console.log(this);

  var object = {
    property: 'I belong to this',
    method: function () {
      return this.property;
    }
  }

  console.log(object.method());

  function Person(name) {
    this.name = name;
  }

  var bob = new Person('Bob');
  console.log(bob.name);
}());


















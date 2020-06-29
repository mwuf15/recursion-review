// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  //need to stringify a number
  if ( typeof(obj) === 'number') {
    return '' + obj;
  }
  //need to stringify null
  if ( obj === null) {
    return 'null';
  }
  //need to stringify booleans
  if (typeof(obj) === 'boolean') {
    return '' + obj;
  }
  //need to work on stringsngify a string
  if (typeof(obj) === 'string') {
    return `"${obj}"`;
  }

  //need to work on arrays
  if (Array.isArray(obj)) {
    //empty arrays
    var arr = [];
    if (obj.length === 0) {
      return '[]';

    //normal arrays
    //arrays within arrays  [1, 0, -1, -0.3, 0.3, 1343.32, 3345, 0.00011999999999999999],
    // return `"${arr}"`
    } else {
      for ( var i = 0; i < obj.length; i++) {
        arr.push(stringifyJSON(obj[i]));
      }
      return `[${arr}]`;
    }
  }

  if (typeof(obj) === 'object') {
    var result = [];
    if (Object.keys(obj).length === 0) {
      return '{}';
    } else {
      for (var key in obj) {
        if (typeof(obj[key]) === 'function' || obj[key] === undefined) {
          continue;
        } else {
          result.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
        }
      }
      return `{${result}}`;
    }
  }
  //need to work on objects

  //empty objects
  //normal objects
  // basic nesting
  // need to skip unstringifiableValues in obj = 'functions': function() {},'undefined': undefined
};

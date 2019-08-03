const _ = {};

// Return an array every time

_.map = function(list, callback) {
  let array = [];
  if (Array.isArray(list)) {
    for (let i = 0; i < list.length; i++) {
      array.push(callback(list[i], i, list));
    }
  }
  return array;
};

// OR with _.each()

_.map = function(list, callback) {
  let array = [];
  _.each(list, function(value, i, list) {
    array.push(callback(value, i, list));
  });
  return array;
};

// Example:

_.map([1, 2, 3], function(value) {
  return value + 1;
});

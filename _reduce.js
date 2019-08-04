const reduce = function(list, callback, initial) {
  let prev = initial;

  for (let i = 0; i < list.length; i++) {
    if (i === 0 && prev === undefined) {
      prev = list[0];
    } else {
      prev = callback(list[i], prev);
    }
  }

  return prev;
};

reduce([1, 2, 3, 4, 5], function(value, sum) {
  return value + sum;
});

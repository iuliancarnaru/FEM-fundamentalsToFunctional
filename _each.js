const _ = {};

// The function doesn't return anything

_.each = function(list, callback) {
  if (Array.isArray(list)) {
    for (let i = 0; i < list.length; i++) {
      callback(list[i], i, list);
    }
  } else {
    for (let key in list) {
      callback(list[key], key, list);
    }
  }
};

// Example:

_.each(["Sally", "Georgie", "Ben"], function(name, i, list) {
  if (list[i] + 1) {
    console.log(`${name} is younger than ${list[i + 1]}`);
  } else {
    console.log(`${name} is the oldest`);
  }
});

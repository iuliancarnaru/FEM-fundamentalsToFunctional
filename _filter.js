const _ = {};

_.filter = function(list, callback) {
  let array = [];
  for (let i = 0; i < list.length; i++) {
    if (callback(list[i], i, list) === true) {
      array.push(list[i]);
    }
  }
  return array;
};

// OR with _.each()

_.filter = function(list, callback) {
  let array = [];
  _.each(list, function(value, i, list) {
    if (callback(value, i, list) === true) {
      array.push(value);
    }
  });
  return array;
};

// Example:

const videoData = [
  {
    name: "Scarlet",
    present: true,
    rooms: [
      {
        kitchen: false,
        ballroom: false,
        library: true
      }
    ]
  },
  {
    name: "White",
    present: false,
    rooms: [
      {
        kitchen: true,
        ballroom: false,
        library: false
      }
    ]
  },
  {
    name: "Green",
    present: true,
    rooms: [
      {
        kitchen: false,
        ballroom: false,
        library: true
      }
    ] 
  }
];

_.filter(videoData, function(suspectObj) {
  return suspectObj.present;
});

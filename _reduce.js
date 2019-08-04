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

// Exercise (figure which room was empty)
 
const newDevelopment = [
  {
    name: "Miss Scarlet",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: true },
      { "dining room": true },
      { "billiard room": false },
      { library: true }
    ]
  },
  {
    name: "Reverend Green",
    present: true,
    rooms: [
      { kitchen: true },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": true },
      { library: false }
    ]
  },
  {
    name: "Colonel Mustard",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: true },
      { "dining room": false },
      { "billiard room": true },
      { library: false }
    ]
  },
  {
    name: "Professor Plum",
    present: true,
    rooms: [
      { kitchen: true },
      { ballroom: false },
      { conservatory: false },
      { "dining room": true },
      { "billiard room": false },
      { library: false }
    ]
  }
];

// Todo

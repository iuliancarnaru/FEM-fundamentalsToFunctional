// Currying

const curry = fn => {
  return arg => {
    return arg2 => {
      return fn(arg, arg2);
    };
  };
};

const ab = function(a, b) {
  return [a, b];
};

const curried = curry(ab);

curried(1)(2);

// Composition

const compose = (fn, fn2) => {
  return arg => {
    const result = fn2(arg);
    return fn(result);
  };
};

const consider = name => {
  return `I thing it could be ... ${name}`;
};

const exclaim = statement => {
  return `${statement.toUpperCase()}!`;
};

const blame = compose(
  consider,
  exclaim
);

blame("you");

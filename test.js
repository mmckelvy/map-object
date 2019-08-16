const test = require('ava');

const mapObject = require('./map-object');

test('mapObject - Map over an object', t => {
  const obj = {
    apple: 'fruit',
    green: 'color'
  };

  const actual = mapObject(obj, (key, val) => {
    return [val, key];
  });

  const expected = {
    fruit: 'apple',
    color: 'green'
  };

  t.deepEqual(actual, expected);
});

test('mapObject - Map over an object recursively', t => {
  const obj = {
    order: {
      fruit: 'apple',
      qty: 15
    }
  };

  const actual = mapObject(obj, (key, val) => {
    return [`${key}1`, val];
  }, {recursive: true});

  const expected = {
    order1: {
      fruit1: 'apple',
      qty1: 15
    }
  };

  t.deepEqual(actual, expected);
});

test('mapObject - Map over an object recursively w/ arrays', t => {
  const obj = {
    order: {
      fruit: 'apple',
      qty: 15,
      items: [
        {
          product: 'widget'
        },
        {
          product: 'gadget'
        }
      ]
    }
  };

  const actual = mapObject(obj, (key, val) => {
    return [`${key}1`, val];
  }, {recursive: true});

  const expected = {
    order1: {
      fruit1: 'apple',
      qty1: 15,
      items1: [
        {
          product1: 'widget'
        },
        {
          product1: 'gadget'
        }
      ]
    }
  };

  t.deepEqual(actual, expected);
});

test('mapObject - Perform a shallow map', t => {
  const obj = {
    order: {
      fruit: 'apple',
      qty: 15
    }
  };

  const actual = mapObject(obj, (key, val) => {
    return [`${key}1`, val];
  });

  const expected = {
    order1: {
      fruit: 'apple',
      qty: 15
    }
  };

  t.deepEqual(actual, expected);
});

test('mapObject - Throw an error if object not passed', t => {
  const error = t.throws(() => {
    mapObject('this should throw');
  }, TypeError);
});

test('mapObject - Throw an error if passed an array', t => {
  const error = t.throws(() => {
    mapObject([]);
  }, TypeError);
});

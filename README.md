# map-object
Map over an object calling a function on each key / val pair.

## Installation
```bash
npm install @mmckelvy/map-object
```

## Usage
```javascript
const mapObject = require('@mmckelvy/map-object');

const obj = {
  apple: 'fruit',
  green: 'color'
};

const mapped = mapObject(obj, (key, val) => {
  return [val, key];
});

console.log(mapped);
// =>
{
  fruit: 'apple',
  color: 'green'
}
```

## API
```javascript
mapObject(obj, fn, options)
```

#### `{object} obj` - The source object.

#### `{function} fn` - A function to call on each key / val pair.
function signature is as follows:

`{string} key`

`{any} value`

`{object} source` - The source object.

`@return []` - An array with `[targetKey, targetValue]` elements.

#### `{object} options` - Includes the following keys:
`{boolean} options.recursive` - map over nested objects / arrays.

#### `@return {object}` - The mapped object.

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

/* ->
{
  fruit: 'apple',
  color: 'green'
}
*/
```

## API
### `mapObject(obj, fn, options)`

#### obj
`object`

The source object.


#### fn
`function`

A function to call on each key / val pair.

function signature is as follows:
#### `fn(key, value, source?)`

##### key
`string`

##### value
`any`

##### source
`object`

The source object.

##### return
An array with `[targetKey, targetValue]` elements.


#### options
`object`

##### options.recursive
`boolean`

Map over nested objects.


#### return
`object` The mapped object.

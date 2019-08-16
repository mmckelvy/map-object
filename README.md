# map-object
Map over an object calling a function on each key / val pair.

## Installation
```bash
npm install @mmckelvy/map-object
```

## Usage
```javascript
const obj = {
  apple: 'fruit',
  green: 'color'
};

const mapped = mapObject(obj, (key, val) => {
  return [val, key];
});

console.log(mapped);
{
  fruit: 'apple',
  color: 'green'
}
```

## API
```javascript
mapObject(obj, fn, options)
```

```
@param {object} obj - The source object.
```

```javascript
@param {function} fn - A function to call on each key / val pair.
  function signature is as follows:
    @param {string} key
    @param {any} value
    @param {object} source - The source object.
    @return [] - An array with [targetKey, targetValue] elements.
```

```javascript
@param {object} options - Includes the following keys:
  @param {boolean} options.recursive - map over nested objects / arrays.
```

```javascript
@return {object} - The mapped object.
```
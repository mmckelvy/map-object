function isObject(item) {
  return (
    typeof item === 'object'
    && item !== null
    && !(item instanceof RegExp)
    && !(item instanceof Error)
    && !(item instanceof Date)
    && !Array.isArray(item)
  );
}

/**
* map over an object calling a function on each key / val pair.
*
* @param {object} obj - The source object.
* @param {function} fn - A function to call on each key / val pair.
*   function signature is as follows:
*   @param {string} key
*   @param {any} value
*   @param {object} source - The source object.
*   @return [] - An array with [targetKey, targetValue] elements.
*
* @param {object} options - Includes the following keys:
*   @param {boolean} options.recursive - map over nested objects / arrays.
*
* @return {object} - The mapped object.
*/
module.exports = function mapObject(obj, fn, { recursive = false } = {}) {
  if (!isObject(obj)) {
    throw new TypeError(`Expected an object, got ${typeof obj}`);
  }

  return Object.keys(obj).reduce((acc, key) => {
    const [ newKey, newValue ] = fn(key, obj[key], obj);

    // handle arrays
    if (Array.isArray(obj[key])) {
      acc[newKey] = obj[key].map((el) => {
        if (isObject(el) && recursive) {
          return mapObject(el, fn, {recursive: true});
        }

        return el;
      });

    // handle nested objects
    } else if (isObject(obj[key]) && recursive) {
      acc[newKey] = mapObject(obj[key], fn, {recursive: true});

    // base case
    } else {
      acc[newKey] = newValue;
    }

    return acc;
  }, {});
};

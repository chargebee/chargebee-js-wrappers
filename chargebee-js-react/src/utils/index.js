// Equality comparison for objects
export function isEqual (left, right) {
    const OBJECT_STRING = '[object Object]';

    if (typeof left !== 'object' || typeof right !== 'object') {
        return left === right;
    }

    if (left === null || right === null) return left === right;

    const leftArray = Array.isArray(left);
    const rightArray = Array.isArray(right);

    if (leftArray !== rightArray) return false;

    const leftPlainObject =
        Object.prototype.toString.call(left) === OBJECT_STRING;
    const rightPlainObject =
        Object.prototype.toString.call(right) === OBJECT_STRING;

    if (leftPlainObject !== rightPlainObject) return false;

    if (!leftPlainObject && !leftArray) return false;

    const leftKeys = Object.keys(left);
    const rightKeys = Object.keys(right);

    if (leftKeys.length !== rightKeys.length) return false;

    const keySet = {};
    for (let i = 0; i < leftKeys.length; i += 1) {
        keySet[leftKeys[i]] = true;
    }
    for (let i = 0; i < rightKeys.length; i += 1) {
        keySet[rightKeys[i]] = true;
    }
    const allKeys = Object.keys(keySet);
    if (allKeys.length !== leftKeys.length) {
        return false;
    }

    const l = left;
    const r = right;
    const pred = (key) => {
        return isEqual(l[key], r[key]);
    };

    return allKeys.every(pred);
}

export function genUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
    return v.toString(16);
  });
}

export function validateCbInstance(cbInstance) {
    if (cbInstance != null) {
        const site = cbInstance.site;
        const key = cbInstance.publishableKey;

        if (!(site != null && typeof site == "string" && site.length > 0))
            return false;

        if (!(key != null && typeof key == "string" && key.length > 0))
            return false;

        return true;
    } else
        return false;
}
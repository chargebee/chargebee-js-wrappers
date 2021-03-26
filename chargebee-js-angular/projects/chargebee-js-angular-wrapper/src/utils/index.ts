import { SimpleChanges, SimpleChange } from '@angular/core';

// Equality comparison for objects
export function isEqual(left: any, right: any): boolean {
    const OBJECT_STRING = '[object Object]';

    if (typeof left !== 'object' || typeof right !== 'object') {
        return left === right;
    }

    if (left === null || right === null) {
        return left === right;
    }

    const leftArray = Array.isArray(left);
    const rightArray = Array.isArray(right);

    if (leftArray !== rightArray) {
        return false;
    }

    const leftPlainObject =
        Object.prototype.toString.call(left) === OBJECT_STRING;
    const rightPlainObject =
        Object.prototype.toString.call(right) === OBJECT_STRING;

    if (leftPlainObject !== rightPlainObject) {
        return false;
    }

    if (!leftPlainObject && !leftArray) {
        return false;
    }

    const leftKeys = Object.keys(left);
    const rightKeys = Object.keys(right);

    if (leftKeys.length !== rightKeys.length) {
        return false;
    }

    const keySet = {};
    for (const key of leftKeys) {
        keySet[key] = true;
    }
    for (const key of rightKeys) {
        keySet[key] = true;
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

export function getPropChanges(changes: SimpleChanges, props: string[]): {
    hasChanged: boolean;
    currentOptions: object;
    prevOptions: object;
} {
    const changedProps = Object.keys(changes).filter(key => props.indexOf(key) >= 0);
    const prevOptions = {};
    const currentOptions = {};

    changedProps.map(prop => {
      const change: SimpleChange = changes[prop];
      if (prop === 'styles') {
        prop = 'style';
      }
      prevOptions[prop] = change.previousValue;
      currentOptions[prop] = change.currentValue;
    });

    return {
        hasChanged: !isEqual(prevOptions, currentOptions),
        currentOptions,
        prevOptions,
    };
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
// Equality comparison for objects
export function isEqual(left, right) {
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
    const leftPlainObject = Object.prototype.toString.call(left) === OBJECT_STRING;
    const rightPlainObject = Object.prototype.toString.call(right) === OBJECT_STRING;
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
export function getPropChanges(changes, props) {
    const changedProps = Object.keys(changes).filter(key => props.indexOf(key) >= 0);
    const prevOptions = {};
    const currentOptions = {};
    changedProps.map(prop => {
        const change = changes[prop];
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
    }
    else
        return false;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9jaGFyZ2ViZWUtanMtYW5ndWxhci13cmFwcGVyL3NyYy91dGlscy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxrQ0FBa0M7QUFDbEMsTUFBTSxVQUFVLE9BQU8sQ0FBQyxJQUFTLEVBQUUsS0FBVTtJQUN6QyxNQUFNLGFBQWEsR0FBRyxpQkFBaUIsQ0FBQztJQUV4QyxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUUsQ0FBQztRQUN4RCxPQUFPLElBQUksS0FBSyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUVELElBQUksSUFBSSxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDbEMsT0FBTyxJQUFJLEtBQUssS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFFRCxNQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RDLE1BQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFeEMsSUFBSSxTQUFTLEtBQUssVUFBVSxFQUFFLENBQUM7UUFDM0IsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVELE1BQU0sZUFBZSxHQUNqQixNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssYUFBYSxDQUFDO0lBQzNELE1BQU0sZ0JBQWdCLEdBQ2xCLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxhQUFhLENBQUM7SUFFNUQsSUFBSSxlQUFlLEtBQUssZ0JBQWdCLEVBQUUsQ0FBQztRQUN2QyxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUQsSUFBSSxDQUFDLGVBQWUsSUFBSSxDQUFDLFNB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USxJQUFJLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQzFELE9BQU8sS0FBSyxDQUFDO1FBRWpCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7O1FBQ0csT0FBTyxLQUFLLENBQUM7QUFDbkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNpbXBsZUNoYW5nZXMsIFNpbXBsZUNoYW5nZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBFcXVhbGl0eSBjb21wYXJpc29uIGZvciBvYmplY3RzXG5leHBvcnQgZnVuY3Rpb24gaXNFcXVhbChsZWZ0OiBhbnksIHJpZ2h0OiBhbnkpOiBib29sZWFuIHtcbiAgICBjb25zdCBPQkpFQ1RfU1RSSU5HID0gJ1tvYmplY3QgT2JqZWN0XSc7XG5cbiAgICBpZiAodHlwZW9mIGxlZnQgIT09ICdvYmplY3QnIHx8IHR5cGVvZiByaWdodCAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIGxlZnQgPT09IHJpZ2h0O1xuICAgIH1cblxuICAgIGlmIChsZWZ0ID09PSBudWxsIHx8IHJpZ2h0ID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBsZWZ0ID09PSByaWdodDtcbiAgICB9XG5cbiAgICBjb25zdCBsZWZ0QXJyYXkgPSBBcnJheS5pc0FycmF5KGxlZnQpO1xuICAgIGNvbnN0IHJpZ2h0QXJyYXkgPSBBcnJheS5pc0FycmF5KHJpZ2h0KTtcblxuICAgIGlmIChsZWZ0QXJyYXkgIT09IHJpZ2h0QXJyYXkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IGxlZnRQbGFpbk9iamVjdCA9XG4gICAgICAgIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChsZWZ0KSA9PT0gT0JKRUNUX1NUUklORztcbiAgICBjb25zdCByaWdodFBsYWluT2JqZWN0ID1cbiAgICAgICAgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHJpZ2h0KSA9PT0gT0JKRUNUX1NUUklORztcblxuICAgIGlmIChsZWZ0UGxhaW5PYmplY3QgIT09IHJpZ2h0UGxhaW5PYmplY3QpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghbGVmdFBsYWluT2JqZWN0ICYmICFsZWZ0QXJyYXkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IGxlZnRLZXlzID0gT2JqZWN0LmtleXMobGVmdCk7XG4gICAgY29uc3QgcmlnaHRLZXlzID0gT2JqZWN0LmtleXMocmlnaHQpO1xuXG4gICAgaWYgKGxlZnRLZXlzLmxlbmd0aCAhPT0gcmlnaHRLZXlzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3Qga2V5U2V0ID0ge307XG4gICAgZm9yIChjb25zdCBrZXkgb2YgbGVmdEtleXMpIHtcbiAgICAgICAga2V5U2V0W2tleV0gPSB0cnVlO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGtleSBvZiByaWdodEtleXMpIHtcbiAgICAgICAga2V5U2V0W2tleV0gPSB0cnVlO1xuICAgIH1cbiAgICBjb25zdCBhbGxLZXlzID0gT2JqZWN0LmtleXMoa2V5U2V0KTtcbiAgICBpZiAoYWxsS2V5cy5sZW5ndGggIT09IGxlZnRLZXlzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgbCA9IGxlZnQ7XG4gICAgY29uc3QgciA9IHJpZ2h0O1xuICAgIGNvbnN0IHByZWQgPSAoa2V5KSA9PiB7XG4gICAgICAgIHJldHVybiBpc0VxdWFsKGxba2V5XSwgcltrZXldKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGFsbEtleXMuZXZlcnkocHJlZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9wQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzLCBwcm9wczogc3RyaW5nW10pOiB7XG4gICAgaGFzQ2hhbmdlZDogYm9vbGVhbjtcbiAgICBjdXJyZW50T3B0aW9uczogb2JqZWN0O1xuICAgIHByZXZPcHRpb25zOiBvYmplY3Q7XG59IHtcbiAgICBjb25zdCBjaGFuZ2VkUHJvcHMgPSBPYmplY3Qua2V5cyhjaGFuZ2VzKS5maWx0ZXIoa2V5ID0+IHByb3BzLmluZGV4T2Yoa2V5KSA+PSAwKTtcbiAgICBjb25zdCBwcmV2T3B0aW9ucyA9IHt9O1xuICAgIGNvbnN0IGN1cnJlbnRPcHRpb25zID0ge307XG5cbiAgICBjaGFuZ2VkUHJvcHMubWFwKHByb3AgPT4ge1xuICAgICAgY29uc3QgY2hhbmdlOiBTaW1wbGVDaGFuZ2UgPSBjaGFuZ2VzW3Byb3BdO1xuICAgICAgaWYgKHByb3AgPT09ICdzdHlsZXMnKSB7XG4gICAgICAgIHByb3AgPSAnc3R5bGUnO1xuICAgICAgfVxuICAgICAgcHJldk9wdGlvbnNbcHJvcF0gPSBjaGFuZ2UucHJldmlvdXNWYWx1ZTtcbiAgICAgIGN1cnJlbnRPcHRpb25zW3Byb3BdID0gY2hhbmdlLmN1cnJlbnRWYWx1ZTtcbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGhhc0NoYW5nZWQ6ICFpc0VxdWFsKHByZXZPcHRpb25zLCBjdXJyZW50T3B0aW9ucyksXG4gICAgICAgIGN1cnJlbnRPcHRpb25zLFxuICAgICAgICBwcmV2T3B0aW9ucyxcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVDYkluc3RhbmNlKGNiSW5zdGFuY2UpIHtcbiAgICBpZiAoY2JJbnN0YW5jZSAhPSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHNpdGUgPSBjYkluc3RhbmNlLnNpdGU7XG4gICAgICAgIGNvbnN0IGtleSA9IGNiSW5zdGFuY2UucHVibGlzaGFibGVLZXk7XG4gIFxuICAgICAgICBpZiAoIShzaXRlICE9IG51bGwgJiYgdHlwZW9mIHNpdGUgPT0gXCJzdHJpbmdcIiAmJiBzaXRlLmxlbmd0aCA+IDApKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICBcbiAgICAgICAgaWYgKCEoa2V5ICE9IG51bGwgJiYgdHlwZW9mIGtleSA9PSBcInN0cmluZ1wiICYmIGtleS5sZW5ndGggPiAwKSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gIH0iXX0=
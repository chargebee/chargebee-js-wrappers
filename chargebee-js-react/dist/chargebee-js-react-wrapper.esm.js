import { Component, createRef, createElement, createContext, forwardRef, Fragment } from 'react';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

// Equality comparison for objects
function isEqual(left, right) {
    const OBJECT_STRING = '[object Object]';
    if (typeof left !== 'object' || typeof right !== 'object') {
        return left === right;
    }
    if (left === null || right === null)
        return left === right;
    const leftArray = Array.isArray(left);
    const rightArray = Array.isArray(right);
    if (leftArray !== rightArray)
        return false;
    const leftPlainObject = Object.prototype.toString.call(left) === OBJECT_STRING;
    const rightPlainObject = Object.prototype.toString.call(right) === OBJECT_STRING;
    if (leftPlainObject !== rightPlainObject)
        return false;
    if (!leftPlainObject && !leftArray)
        return false;
    const leftKeys = Object.keys(left);
    const rightKeys = Object.keys(right);
    if (leftKeys.length !== rightKeys.length)
        return false;
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
function genUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
function validateCbInstance(cbInstance) {
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

class Element extends Component {
    constructor(props) {
        super(props);
        this.field = null;
        this.id = `card-${props.type}-${genUUID()}`;
        this.ElementRef = createRef();
    }
    componentDidMount() {
        const { cbComponent, type, listeners } = this.props;
        const options = this.getPropOptions(this.props);
        this.field = cbComponent.createField(type, options).at(`#${this.id}`);
        // Attaching listeners if any
        if (listeners) {
            if (listeners.onBlur)
                this.field.on('blur', listeners.onBlur);
            if (listeners.onFocus)
                this.field.on('focus', listeners.onFocus);
            if (listeners.onReady)
                this.field.on('ready', listeners.onReady);
            if (listeners.onChange)
                this.field.on('change', listeners.onChange);
        }
    }
    getPropOptions(props) {
        const { icon, styles: style, placeholder, ariaLabel } = props;
        return {
            icon,
            style,
            placeholder,
            ariaLabel
        };
    }
    componentDidUpdate(prevProps) {
        const prevOptions = this.getPropOptions(prevProps);
        const currentOptions = this.getPropOptions(this.props);
        if (!isEqual(prevOptions, currentOptions) && this.field) {
            this.field.update(currentOptions);
        }
    }
    componentWillUnmount() {
        this.field.destroy();
    }
    focus() {
        this.field.focus();
    }
    blur() {
        this.field.blur();
    }
    clear() {
        this.field.clear();
    }
    render() {
        const { className } = this.props;
        return (createElement("div", { id: this.id, ref: this.ElementRef, className: className }, this.props.children));
    }
}

const ComponentDefaultContext = {
    cbComponent: null
};
const ComponentContext = createContext(ComponentDefaultContext);
class ChargebeeComponents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            moduleLoaded: false,
            cbComponent: null,
            cbInstance: null,
        };
    }
    getPropOptions(props) {
        const { fonts, classes, icon, styles: style, showTestCards, locale, placeholder, currency, ariaLabel } = props;
        return {
            fonts,
            classes,
            locale,
            style,
            showTestCards,
            placeholder,
            ariaLabel,
            icon,
            currency,
        };
    }
    componentDidUpdate(prevProps) {
        const cbComponent = this.state.cbComponent;
        if (cbComponent && this.state.moduleLoaded && cbComponent.status == 0) {
            cbComponent.mount(`#${this.id}`);
        }
        const prevOptions = this.getPropOptions(prevProps);
        const currentOptions = this.getPropOptions(this.props);
        if (!isEqual(prevOptions, currentOptions) && cbComponent) {
            cbComponent.update(currentOptions);
        }
    }
    componentDidMount() {
        this.id = `${this.props.type}-field-${genUUID()}`;
        const { type, onBlur, onChange, onFocus, onReady, onKeyPress } = this.props;
        const options = this.getPropOptions(this.props);
        // @ts-ignore
        const cbInstance = Chargebee.getInstance();
        cbInstance.load("components").then(() => {
            let cbComponent = cbInstance.createComponent(type, options);
            // Attach listeners if specified (only applicable for combined field)
            if (onReady)
                cbComponent.on('ready', onReady);
            if (onBlur)
                cbComponent.on('blur', onBlur);
            if (onFocus)
                cbComponent.on('focus', onFocus);
            if (onChange)
                cbComponent.on('change', onChange);
            if (onKeyPress)
                cbComponent.on('keyPress', onKeyPress);
            this.setState({
                cbComponent,
                cbInstance,
                moduleLoaded: true
            });
        });
    }
    tokenize(additionalData) {
        const { cbComponent } = this.state;
        return cbComponent.tokenize(additionalData);
    }
    authorizeWith3ds(paymentIntent, additionalData, callbacks) {
        const { cbComponent } = this.state;
        return cbComponent.authorizeWith3ds(paymentIntent, additionalData, callbacks);
    }
    focus() {
        const { cbComponent } = this.state;
        cbComponent.focus();
    }
    blur() {
        const { cbComponent } = this.state;
        cbComponent.blur();
    }
    clear() {
        const { cbComponent } = this.state;
        cbComponent.clear();
    }
    render() {
        return (createElement(ComponentContext.Provider, { value: this.state },
            createElement("div", { id: this.id, className: this.props.className || '' }, this.state.moduleLoaded && this.props.children || [])));
    }
}

var CardNumber = forwardRef((props, ref) => {
    const { onBlur, onChange, onFocus, onReady } = props, rest = __rest(props, ["onBlur", "onChange", "onFocus", "onReady"]);
    const listeners = { onBlur, onChange, onFocus, onReady };
    return (createElement(ComponentContext.Consumer, null, ctx => createElement(Element, Object.assign({ type: 'number', cbComponent: ctx.cbComponent, ref: ref, listeners: listeners }, rest))));
});

var CardExpiry = forwardRef((props, ref) => {
    const { onBlur, onChange, onFocus, onReady } = props, rest = __rest(props, ["onBlur", "onChange", "onFocus", "onReady"]);
    const listeners = { onBlur, onChange, onFocus, onReady };
    return (createElement(ComponentContext.Consumer, null, ctx => createElement(Element, Object.assign({ type: 'expiry', cbComponent: ctx.cbComponent, ref: ref, listeners: listeners }, rest))));
});

var CardCVV = forwardRef((props, ref) => {
    const { onBlur, onChange, onFocus, onReady } = props, rest = __rest(props, ["onBlur", "onChange", "onFocus", "onReady"]);
    const listeners = { onBlur, onChange, onFocus, onReady };
    return (createElement(ComponentContext.Consumer, null, ctx => createElement(Element, Object.assign({ type: 'cvv', cbComponent: ctx.cbComponent, ref: ref, listeners: listeners }, rest))));
});

var CardComponent = forwardRef((props, ref) => (createElement(ChargebeeComponents, Object.assign({ type: 'card', ref: ref }, props))));

var Provider = forwardRef((props, ref) => {
    if (props.cbInstance && validateCbInstance(props.cbInstance)) {
        return (createElement(Fragment, null, props.children));
    }
    else {
        return null;
    }
});

export { CardCVV, CardComponent, CardExpiry, CardNumber, Provider };

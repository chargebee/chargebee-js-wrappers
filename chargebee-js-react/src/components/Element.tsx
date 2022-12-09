import * as React from 'react';
import { Component } from '@chargebee/chargebee-js-types';
import { isEqual, genUUID } from '../utils/';

interface Listeners {
    onBlur: React.MouseEventHandler;
    onChange: React.ChangeEventHandler;
    onFocus: React.FocusEventHandler;
    onReady: React.EventHandler<React.SyntheticEvent>;
}
export interface ElementProps {
    type: string;
    cbComponent: Component;
    listeners: Listeners;
    icon?: boolean;
    styles?: object;
    placeholder?: object;
    ariaLabel?: object;
    className?: string;
};

export default class Element extends React.Component<ElementProps> {
    private id: string;
    private field: any;
    private ElementRef: React.LegacyRef<HTMLDivElement>;

    constructor(props: ElementProps) {
        super(props);
        this.field = null;
        this.id = `card-${props.type}-${genUUID()}`;
        this.ElementRef = React.createRef();
    }

    componentDidMount() {
        const { cbComponent, type, listeners } = this.props;
        const options = this.getPropOptions(this.props);
        this.field = cbComponent.createField(type, options).at(`#${this.id}`);
        
        // Attaching listeners if any
        if(listeners) {
            if(listeners.onBlur) this.field.on('blur', listeners.onBlur);
            if(listeners.onFocus) this.field.on('focus', listeners.onFocus);
            if(listeners.onReady) this.field.on('ready', listeners.onReady);
            if(listeners.onChange) this.field.on('change', listeners.onChange);
        }
    }

    getPropOptions(props: React.PropsWithRef<ElementProps>) {
        const { icon, styles: style, placeholder, ariaLabel } = props;
        return {
            icon,
            style,
            placeholder,
            ariaLabel
        }
    }

    componentDidUpdate(prevProps: ElementProps) {
        const prevOptions = this.getPropOptions(prevProps);
        const currentOptions = this.getPropOptions(this.props);

        if(!isEqual(prevOptions, currentOptions) && this.field) {
            this.field.update(currentOptions)
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
        return (
            <div id={this.id} ref={this.ElementRef} className={className}>
                {this.props.children}
            </div>
        )
    }
}

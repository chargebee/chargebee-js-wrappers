import * as React from 'react';
import { AriaLabel, Component, Placeholder, Styles } from '@chargebee/chargebee-js-types';
interface Listeners {
    onBlur: React.MouseEventHandler;
    onChange: React.ChangeEventHandler;
    onFocus: React.FocusEventHandler;
    onReady: React.EventHandler<React.SyntheticEvent>;
    onEscape?: Function;
}
export interface ElementProps {
    type?: string;
    cbComponent?: Component;
    listeners?: Listeners;
    icon?: boolean;
    styles?: Styles;
    placeholder?: Placeholder;
    ariaLabel?: AriaLabel;
    className?: string;
}
export default class Element extends React.Component<ElementProps> {
    private id;
    private field;
    private ElementRef;
    constructor(props: ElementProps);
    componentDidMount(): void;
    getPropOptions(props: React.PropsWithRef<ElementProps>): {
        icon: boolean;
        style: Styles;
        placeholder: Placeholder;
        ariaLabel: AriaLabel;
    };
    componentDidUpdate(prevProps: ElementProps): void;
    componentWillUnmount(): void;
    focus(): void;
    blur(): void;
    clear(): void;
    render(): JSX.Element;
}
export {};

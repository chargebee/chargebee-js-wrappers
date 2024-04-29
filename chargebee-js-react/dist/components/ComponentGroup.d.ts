import * as React from 'react';
import { AdditionalData, AriaLabel, Callbacks, ChargebeeInstance, Classes, Component, Fonts, PaymentIntent, Placeholder, Styles } from "@chargebee/chargebee-js-types";
interface ComponentContext {
    cbComponent: Component;
}
export declare const ComponentContext: React.Context<ComponentContext>;
export interface ChargebeeComponentProps {
    children?: React.ReactNode;
    type?: string;
    fonts?: Fonts;
    classes?: Classes;
    icon?: boolean;
    styles?: Styles;
    showTestCards?: boolean;
    locale?: string;
    placeholder?: Placeholder;
    currency?: string;
    ariaLabel?: AriaLabel;
    className?: string;
    onBlur?: React.MouseEventHandler;
    onChange?: React.ChangeEventHandler;
    onFocus?: React.FocusEventHandler;
    onReady?: React.EventHandler<React.SyntheticEvent>;
    onKeyPress?: Function;
}
interface ChargebeeComponentState {
    moduleLoaded: Boolean;
    cbComponent: Component;
    cbInstance: ChargebeeInstance;
}
export default class ChargebeeComponents extends React.Component<ChargebeeComponentProps, ChargebeeComponentState> {
    private id;
    constructor(props: ChargebeeComponentProps);
    getPropOptions(props: ChargebeeComponentProps): {
        fonts: Fonts;
        classes: Classes;
        locale: string;
        style: Styles;
        showTestCards: boolean;
        placeholder: Placeholder;
        ariaLabel: AriaLabel;
        icon: boolean;
        currency: string;
    };
    componentDidUpdate(prevProps: ChargebeeComponentProps): void;
    componentDidMount(): void;
    tokenize(additionalData: AdditionalData): any;
    authorizeWith3ds(paymentIntent: PaymentIntent, additionalData: AdditionalData, callbacks: Callbacks): Promise<PaymentIntent>;
    focus(): void;
    blur(): void;
    clear(): void;
    render(): JSX.Element;
}
export {};

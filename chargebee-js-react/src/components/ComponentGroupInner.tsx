import * as React from 'react';
import { AdditionalData, AriaLabel, Callbacks, ChargebeeInstance, Classes, Fonts, PaymentIntent, Placeholder, Styles } from "@chargebee/chargebee-js-types";
import { isEqual } from '../utils/';
import {ComponentContext, getPropOptions} from "./ComponentGroup";

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
    pState?: any;
    id?: string;
}
interface ChargebeeComponentState {
    moduleLoaded: Boolean;
    cbComponent: any;
    cbInstance: ChargebeeInstance;
}

export default class ChargebeeComponentsInner extends React.Component<ChargebeeComponentProps, ChargebeeComponentState> {
    private id: string;
    
    constructor(props: ChargebeeComponentProps) {
        super(props);
        this.id =props.id;
        this.state = {
            moduleLoaded: this.props.pState.moduleLoaded,
            cbComponent: this.props.pState.cbComponent,
            cbInstance: this.props.pState.cbInstance,
        }
    }

    componentWillUnmount() {
        this.state.cbComponent.destroy();
    }

    componentDidUpdate(prevProps: ChargebeeComponentProps) {
        const cbComponent = this.state.cbComponent;

        const prevOptions = getPropOptions(prevProps)
        const currentOptions = getPropOptions(this.props)

        if(!isEqual(prevOptions, currentOptions) && cbComponent) {
            cbComponent.update(currentOptions)
        }
    }

    componentDidMount() {
        if(this.state.cbComponent && this.state.moduleLoaded && this.state.cbComponent.status == 0) {
            this.state.cbComponent.mount(`#${this.id}`);
        }
    }

    tokenize(additionalData: AdditionalData) {
        const { cbComponent } = this.state;
        return cbComponent.tokenize(additionalData)
    }

    authorizeWith3ds(paymentIntent: PaymentIntent, additionalData: AdditionalData, callbacks: Callbacks) {
      const { cbComponent } = this.state;
      return cbComponent.authorizeWith3ds(paymentIntent, additionalData, callbacks)
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
        return (
            <ComponentContext.Provider value={this.state}>
                <div id={this.id} className={this.props.className || ''}>
                    {this.state.moduleLoaded && this.props.children || []}
                </div>
            </ComponentContext.Provider>
        )
    }
}

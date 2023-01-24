import * as React from 'react';
import { AdditionalData, AriaLabel, Callbacks, ChargebeeInstance, Classes, Component, Fonts, PaymentIntent, Placeholder, Styles } from "@chargebee/chargebee-js-types";
import { isEqual, genUUID } from '../utils/';

interface ComponentContext {
    cbComponent: Component
}

const ComponentDefaultContext: ComponentContext = {
    cbComponent: null
}

export const ComponentContext = React.createContext(ComponentDefaultContext);  
export interface ChargebeeComponentProps {
    children?: React.ReactNode;
    type?: string;
    fonts?: Fonts;
    classes?: Classes;
    icon?: boolean;
    styles?: Styles;
    locale?: string;
    placeholder?: Placeholder;
    currency?: string;
    ariaLabel?: AriaLabel;
    className?: string;
    onBlur?: React.MouseEventHandler;
    onChange?: React.ChangeEventHandler;
    onFocus?: React.FocusEventHandler;
    onReady?: React.EventHandler<React.SyntheticEvent>;
}
interface ChargebeeComponentState {
    moduleLoaded: Boolean;
    cbComponent: Component;
    cbInstance: ChargebeeInstance;
}

export default class ChargebeeComponents extends React.Component<ChargebeeComponentProps, ChargebeeComponentState> {
    private id: string;
    
    constructor(props: ChargebeeComponentProps) {
        super(props);
        this.state = {
            moduleLoaded: false,
            cbComponent: null,
            cbInstance: null,   
        }
    }

    getPropOptions(props: ChargebeeComponentProps) {
        const { fonts, classes, icon, styles: style, locale, placeholder, currency, ariaLabel } = props;
        return {
            fonts,
            classes,
            locale,
            style,
            placeholder,
            ariaLabel,
            icon,
            currency,
        }
    }

    componentDidUpdate(prevProps: ChargebeeComponentProps) {
        const cbComponent = this.state.cbComponent;

        if(cbComponent && this.state.moduleLoaded && cbComponent.status == 0) {
            cbComponent.mount(`#${this.id}`);
        }

        const prevOptions = this.getPropOptions(prevProps)
        const currentOptions = this.getPropOptions(this.props)

        if(!isEqual(prevOptions, currentOptions) && cbComponent) {
            cbComponent.update(currentOptions)
        }
    }

    componentDidMount() {
        this.id = `${this.props.type}-field-${genUUID()}`;
        const {type, onBlur, onChange, onFocus, onReady} = this.props;
        const options = this.getPropOptions(this.props);
        // @ts-ignore
        const cbInstance = Chargebee.getInstance();
        cbInstance.load("components").then(() => {
            let cbComponent = cbInstance.createComponent(type, options)
            // Attach listeners if specified (only applicable for combined field)
            cbComponent.on('ready', onReady);
            cbComponent.on('blur', onBlur);
            cbComponent.on('focus', onFocus);
            cbComponent.on('change', onChange);

            this.setState({
                cbComponent,
                cbInstance,
                moduleLoaded: true
            })
        });
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

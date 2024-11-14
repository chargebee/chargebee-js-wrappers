import * as React from 'react';
import { AdditionalData, AriaLabel, Callbacks, ChargebeeInstance, Classes, Fonts, PaymentIntent, Placeholder, Styles } from "@chargebee/chargebee-js-types";
import {genUUID, isEqual} from '../utils/';


interface ComponentContext {
    cbComponent: any;
}

const ComponentDefaultContext: ComponentContext = {
    cbComponent: null
}

export const ComponentContext = React.createContext(ComponentDefaultContext);

export function getPropOptions(props: FieldContainerProps) {
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
    }
}

export interface FieldContainerProps {
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
    cbInstance?: any;
}
interface FieldContainerState {
    cbComponent: any;
    cbInstance: ChargebeeInstance;
    id: string;
    ready: boolean;
}

export default class FieldContainer extends React.Component<FieldContainerProps, FieldContainerState> {
    private id: string;
    private containerRef = React.createRef<HTMLDivElement>();
    
    constructor(props: FieldContainerProps) {
        super(props);
        this.id = `${this.props.type}-field-${genUUID()}`;
        this.state = {
            cbComponent: null,
            cbInstance: this.props.cbInstance,
            id: this.id,
            ready: false
        }
    }

    getCbComponent() {
        const {type, onBlur, onChange, onFocus, onReady, onKeyPress} = this.props;
        const options = getPropOptions(this.props);

        let cbComponent = this.props.cbInstance.createComponent(type, options)
        // Attach listeners if specified (only applicable for combined field)
        if(onReady) cbComponent.on('ready', onReady);
        if(onBlur) cbComponent.on('blur', onBlur);
        if(onFocus) cbComponent.on('focus', onFocus);
        if(onChange) cbComponent.on('change', onChange);
        if(onKeyPress) cbComponent.on('keyPress', onKeyPress);

        return cbComponent;
    }

    componentWillUnmount() {
        if (this.state.cbComponent) {
            this.state.cbComponent.destroy();
        }
    }

    componentDidUpdate(prevProps: FieldContainerProps) {
        const cbComponent = this.state.cbComponent;

        const prevOptions = getPropOptions(prevProps);
        const currentOptions = getPropOptions(this.props);

        if (!isEqual(prevOptions, currentOptions) && cbComponent) {
            cbComponent.update(currentOptions);
        }
    }

    componentDidMount() {
        const cbComponent = this.getCbComponent();
        this.setState({ cbComponent, ready: true }, () => {
            if (this.state.cbComponent && this.state.cbComponent.status === 0) {
                if (this.containerRef.current) {
                    this.state.cbComponent.mount(this.containerRef.current);
                }
            }
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
        const { ready } = this.state; // Destructure ready state

        return (
            <ComponentContext.Provider value={this.state}>
                <div ref={this.containerRef} id={this.id} className={this.props.className || ''}>
                    {ready && this.props.children || []}
                </div>
            </ComponentContext.Provider>
        );
    }
}

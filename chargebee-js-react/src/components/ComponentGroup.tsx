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
    cbComponent: any;
    cbInstance: ChargebeeInstance;
    loader?: any;
}

export default class ChargebeeComponents extends React.Component<ChargebeeComponentProps, ChargebeeComponentState> {
    private id: string;
    private loading: boolean;
    private loader: any;
    private mounting: boolean;
    
    constructor(props: ChargebeeComponentProps) {
        super(props);
        debugger;
        this.state = {
            moduleLoaded: false,
            cbComponent: null,
            cbInstance: null,   
        }
    }

    getPropOptions(props: ChargebeeComponentProps) {
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

    componentWillUnmount() {
        console.log("parent unmount")
        debugger;
        this.loading;
        this.loader.cancel();
        this.state;
        // this.state.loader.cancel();
        debugger;
        // this.state.cbComponent.destroy();
    }

    componentWillUpdate(prevProps: ChargebeeComponentProps, prevState: ChargebeeComponentState) {
        console.log(prevState, this.state)
    }
    componentDidUpdate(prevProps: ChargebeeComponentProps, prevState: any) {
        console.log(prevState);
        console.log(this.state);
        debugger;
        if (prevState !== this.state) {
            console.trace("State has changed!");
        }

        const cbComponent = this.state.cbComponent;

        const element = document.querySelector(`#${this.id} iframe`);
        debugger;
        if(cbComponent && this.state.moduleLoaded && cbComponent.status == 0) {
            cbComponent.mount(`#${this.id}`);
        }

        const prevOptions = this.getPropOptions(prevProps)
        const currentOptions = this.getPropOptions(this.props)

        if(!isEqual(prevOptions, currentOptions) && cbComponent) {
            cbComponent.update(currentOptions)
        }
    }

    makeCancelable(promise: Promise<any>) {
        let hasCanceled = false;

        const wrappedPromise = new Promise((resolve, reject) => {
            promise
                .then((value) => {
                    hasCanceled ? resolve({ isCanceled: true }) : resolve(value)
                })
                .catch((error) => {
                    hasCanceled ? reject({ isCanceled: true }) : reject(error)
                });
        });

        return {
            promise: wrappedPromise,
            cancel() {
                hasCanceled = true;
            },
        };
    }

    componentDidMount() {
        console.log("parent mount")
        this.id = `${this.props.type}-field-${genUUID()}`;
        const {type, onBlur, onChange, onFocus, onReady, onKeyPress} = this.props;
        const options = this.getPropOptions(this.props);
        // @ts-ignore
        const cbInstance = Chargebee.getInstance();
        console.log(this.state)
        let loader = this.makeCancelable(cbInstance.load("components"));
        this.loading = true;
        this.loader = loader;
        loader.promise.then(({isCanceled}) => {
            if (isCanceled) {
                return;
            }

            let cbComponent = cbInstance.createComponent(type, options)
            console.log("cbComponent", cbComponent);
            // Attach listeners if specified (only applicable for combined field)
            if(onReady) cbComponent.on('ready', onReady);
            if(onBlur) cbComponent.on('blur', onBlur);
            if(onFocus) cbComponent.on('focus', onFocus);
            if(onChange) cbComponent.on('change', onChange);
            if(onKeyPress) cbComponent.on('keyPress', onKeyPress);
            console.log(this.state)

            // if(cbComponent && cbComponent.status == 0) {
            //     cbComponent.mount(`#${this.id}`);
            // }

            this.setState((prevState) => {
                const state = {...prevState}
                state.cbComponent = cbComponent;
                state.cbInstance = cbInstance;
                state.moduleLoaded = true;
                return state;
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

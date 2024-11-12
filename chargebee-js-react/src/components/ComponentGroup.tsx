import * as React from 'react';
import { AriaLabel, ChargebeeInstance, Classes, Fonts, Placeholder, Styles } from "@chargebee/chargebee-js-types";
import { genUUID } from '../utils/';
import ChargebeeComponentsInner from "./ComponentGroupInner";

interface ComponentContext {
    moduleLoaded: Boolean;
    cbComponent: any;
    cbInstance: ChargebeeInstance;
}

const ComponentDefaultContext: ComponentContext = {
    moduleLoaded: false,
    cbComponent: null,
    cbInstance: null,
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
}

function makeCancelablePromise(promise: Promise<any>) {
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

export function getPropOptions(props: ChargebeeComponentProps) {
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

export default class ChargebeeComponents extends React.Component<ChargebeeComponentProps, ChargebeeComponentState> {
    private id: string;
    private loader: any;
    
    constructor(props: ChargebeeComponentProps) {
        super(props);
        this.state = {
            moduleLoaded: false,
            cbComponent: null,
            cbInstance: null,   
        }
    }

    componentWillUnmount() {
        this.loader.cancel();
    }

    componentDidMount() {
        this.id = `${this.props.type}-field-${genUUID()}`;
        const {type, onBlur, onChange, onFocus, onReady, onKeyPress} = this.props;
        const options = getPropOptions(this.props);
        // @ts-ignore
        const cbInstance = Chargebee.getInstance();
        let loader = makeCancelablePromise(cbInstance.load("components"));
        this.loader = loader;
        loader.promise.then(({isCanceled}) => {
            if (isCanceled) {
                return;
            }

            let cbComponent = cbInstance.createComponent(type, options)
            // Attach listeners if specified (only applicable for combined field)
            if(onReady) cbComponent.on('ready', onReady);
            if(onBlur) cbComponent.on('blur', onBlur);
            if(onFocus) cbComponent.on('focus', onFocus);
            if(onChange) cbComponent.on('change', onChange);
            if(onKeyPress) cbComponent.on('keyPress', onKeyPress);

            this.setState({
                cbComponent: cbComponent,
                cbInstance: cbInstance,
                moduleLoaded: true
            });
        });
    }

    render() {
        return (
            <>
                {this.state.moduleLoaded ? <ChargebeeComponentsInner {...{...this.props, pState: this.state, id: this.id}} /> : ''}
            </>
        )
    }
}

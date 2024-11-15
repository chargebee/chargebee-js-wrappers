import * as React from 'react';
import {
    AdditionalData,
    AriaLabel, Callbacks,
    ChargebeeInstance,
    Classes,
    Fonts, PaymentIntent,
    Placeholder,
    Styles
} from "@chargebee/chargebee-js-types";
import FieldContainer from "./FieldContainer";

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
    cbInstance: ChargebeeInstance;
}

function makeCancelablePromise(promise: Promise<any>) {
    let hasCanceled = false;
    let _resolve: (value: any) => void;

    const wrappedPromise = new Promise((resolve, reject) => {
        _resolve = resolve;
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
            _resolve({ isCanceled: true })
        },
    };
}

export default class ChargebeeComponents extends React.Component<ChargebeeComponentProps, ChargebeeComponentState> {
    private loader: any;
    private fieldContainerRef = React.createRef<FieldContainer>();
    
    constructor(props: ChargebeeComponentProps) {
        super(props);
        this.state = {
            moduleLoaded: false,
            cbInstance: null,   
        }
    }

    componentWillUnmount() {
        this.loader.cancel();
    }

    componentDidMount() {
        // @ts-ignore
        const cbInstance = Chargebee.getInstance();
        let loader = makeCancelablePromise(cbInstance.load("components"));
        this.loader = loader;
        loader.promise.then(({isCanceled}) => {
            if (isCanceled) {
                return;
            }

            this.setState({
                cbInstance: cbInstance,
                moduleLoaded: true
            });
        });
    }

    tokenize(additionalData: AdditionalData) {
        return this.fieldContainerRef.current.tokenize(additionalData)
    }

    authorizeWith3ds(paymentIntent: PaymentIntent, additionalData: AdditionalData, callbacks: Callbacks) {
        return this.fieldContainerRef.current.authorizeWith3ds(paymentIntent, additionalData, callbacks)
    }

    focus() {
        this.fieldContainerRef.current.focus();
    }

    blur() {
        this.fieldContainerRef.current.blur();
    }

    clear() {
        this.fieldContainerRef.current.clear();
    }

    render() {
        return (
            <>
                {this.state.moduleLoaded ? <FieldContainer ref={this.fieldContainerRef} {...{...this.props, cbInstance: this.state.cbInstance}} /> : ''}
            </>
        )
    }
}

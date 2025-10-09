import * as React from 'react';
import {
    AriaLabel,
    ChargebeeInstance,
    Classes,
    Fonts,
    Placeholder,
    Styles
} from "../types";
import FieldContainer from "./FieldContainer";
import { CancellablePromise, makeCancelablePromise } from 'utils';


// Set source for Chargebee.js KVL logging immediately when module loads
if (typeof window !== 'undefined') {
    (window as any).CbJsSource = 'react';
}


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
    forwardedRef?: React.LegacyRef<FieldContainer>;
}
interface ChargebeeComponentState {
    moduleLoaded: Boolean;
    cbInstance: ChargebeeInstance;
}


export default class ChargebeeComponents extends React.Component<ChargebeeComponentProps, ChargebeeComponentState> {
    private loader: CancellablePromise<any>;
    
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
        this.loader = makeCancelablePromise(cbInstance.load("components"));
        this.loader.promise.then(({isCancelled}) => {
            if (isCancelled) {
                return;
            }
            this.setState({
                cbInstance: cbInstance,
                moduleLoaded: true
            });
        });
    }

    render() {
        const {forwardedRef, ...rest} = this.props;
        return (
            <>
                {this.state.moduleLoaded ? <FieldContainer ref={forwardedRef} {...{...rest, cbInstance: this.state.cbInstance}} /> : ''}
            </>
        )
    }
}

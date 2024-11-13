import * as React from 'react';
import { AriaLabel, ChargebeeInstance, Classes, Fonts, Placeholder, Styles } from "@chargebee/chargebee-js-types";
import ChargebeeComponentsInner from "./ComponentGroupInner";



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

export default class ChargebeeComponents extends React.Component<ChargebeeComponentProps, ChargebeeComponentState> {
    private id: string;
    private loader: any;
    
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

    render() {
        return (
            <>
                {this.state.moduleLoaded ? <ChargebeeComponentsInner {...{...this.props, cbInstance: this.state.cbInstance}} /> : ''}
            </>
        )
    }
}

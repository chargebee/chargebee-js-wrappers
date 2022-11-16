import * as React from 'react';
import { isEqual, genUUID } from '../utils/';

const ComponentDefaultContext: any = {
    cbComponent: null
}

export const ComponentContext = React.createContext(ComponentDefaultContext);

export interface ChargebeeComponentProps {
    type: string;
    fonts: any;
    classes: any;
    icon: any;
    styles: any;
    locale: any;
    placeholder: any;
    currency: any;
    ariaLabel: any;
    className: any;
    onBlur: any;
    onFocus: any;
    onReady: any;
    onChange: any;
}
interface ChargebeeComponentState {
    moduleLoaded: any;
    cbComponent: any;
    cbInstance: any;
}

export default class ChargebeeComponents extends React.Component<ChargebeeComponentProps, ChargebeeComponentState> {
    private id: any;

    
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

    tokenize(additionalData: any) {
        const { cbComponent } = this.state;
        return cbComponent.tokenize(additionalData)
    }

    authorizeWith3ds(paymentIntent: any, additionalData: any, callbacks: any) {
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

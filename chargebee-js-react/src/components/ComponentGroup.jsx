import React from 'react'
import { isEqual } from '../utils/';

const ComponentDefaultContext = {
    cbComponent: null
}

export const ComponentContext = React.createContext(ComponentDefaultContext);

export default class ChargebeeComponents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            moduleLoaded: false,
            cbComponent: null,
            cbInstance: null,
        }
    }

    componentWillMount() {
        const {fonts, classes, icon, styles: style, locale, type, placeholder, onBlur, onChange, onFocus, onReady} = this.props;
        const options = {
            fonts,
            classes,
            locale,
            style,
            placeholder,
            icon
        }
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

    componentDidUpdate(prevProps) {
        const cbComponent = this.state.cbComponent;

        if(cbComponent && this.state.moduleLoaded && cbComponent.status == 0) {
            cbComponent.at('card-field')
            cbComponent.mount();
        }

        const prevOptions = {
            placeholder: prevProps.placeholder,
            style: prevProps.styles,
            fonts: prevProps.fonts,
            classes: prevProps.classes,
            locale: prevProps.locale,
        }
        const currentOptions = {
            placeholder: this.props.placeholder,
            style: this.props.styles,
            fonts: this.props.fonts,
            classes: this.props.classes,
            locale: this.props.locale,
        }

        if(!isEqual(prevOptions, currentOptions) && cbComponent) {
            cbComponent.update(currentOptions)
        }
    }

    tokenize() {
        const {cbComponent, cbInstance} = this.state;
        return cbInstance.tokenize(cbComponent)
    }

    render() {
        return (
            <ComponentContext.Provider value={this.state}>
                <div id={`${this.props.type}-field`} className={this.props.className || ''}>
                    {this.state.moduleLoaded && this.props.children || []}
                </div>
            </ComponentContext.Provider>
        )
    }
}

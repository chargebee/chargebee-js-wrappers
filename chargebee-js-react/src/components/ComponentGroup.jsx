import React from 'react'
import { isEqual } from '../utils/';

const ComponentDefaultContext = {
    cbComponent: null
}

export const ComponentContext = React.createContext(ComponentDefaultContext);

export default class ChargebeeComponents extends React.Component {
    constructor(props) {
        super(props);
        this.id = `${props.type}-field`;
        this.state = {
            moduleLoaded: false,
            cbComponent: null,
            cbInstance: null,
        }
    }

    getPropOptions(props) {
        const { fonts, classes, icon, styles: style, locale, placeholder } = props;
        return {
            fonts,
            classes,
            locale,
            style,
            placeholder,
            icon,
        }
    }

    componentWillMount() {
        const {type, onBlur, onChange, onFocus, onReady} = this.props;
        const options = this.getPropOptions(this.props);
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
            cbComponent.mount(`#${this.id}`);
        }

        const prevOptions = this.getPropOptions(prevProps)
        const currentOptions = this.getPropOptions(this.props)

        if(!isEqual(prevOptions, currentOptions) && cbComponent) {
            cbComponent.update(currentOptions)
        }
    }

    tokenize() {
        const {cbComponent, cbInstance} = this.state;
        return cbInstance.tokenize(cbComponent)
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

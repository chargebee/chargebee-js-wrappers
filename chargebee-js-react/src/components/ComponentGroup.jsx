import React from 'react'

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

    componentDidUpdate() {
        if(this.state.cbComponent && this.state.moduleLoaded && this.state.cbComponent.status == 0) {
            this.state.cbComponent.at('card-field')
            this.state.cbComponent.mount();
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

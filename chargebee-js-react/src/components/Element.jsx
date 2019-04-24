import React from 'react';
import { ComponentContext } from "./ComponentGroup.jsx";


class Element extends React.Component {
    constructor(props) {
        super(props);
        this.field = null
        this.ElementRef = React.createRef();
    }

    componentDidMount() {
        const {cbComponent, id, styles, listeners, placeholder} = this.props;
        this.field = cbComponent.createField(id, {
            placeholder,
            style: styles,
        }).at(`card-${id}`);
        
        // Attaching listeners if any
        if(listeners) {
            if(listeners.onBlur) this.field.on('blur', listeners.onBlur);
            if(listeners.onFocus) this.field.on('focus', listeners.onFocus);
            if(listeners.onReady) this.field.on('ready', listeners.onReady);
            if(listeners.onChange) this.field.on('change', listeners.onChange);
        }
    }

    componentDidUpdate(prevProps) {
        const prevOptions = {
            placeholder: prevProps.placeholder,
            style: prevProps.styles
        }
        const currentOptions = {
            placeholder: this.props.placeholder,
            style: this.props.styles,
        }

        if(!isEqual(prevOptions, currentOptions) && this.field) {
            this.field.update(currentOptions)
        }
    }

    componentWillUnmount() {
        this.field.destroy();
    }

    render() {
        const {id, className} = this.props;
        return (
            <div id={`card-${id}`} ref={this.ElementRef} className={className}>
                {this.props.children}
            </div>
        )
    }
}

// Pass Context as props
export default class _Element extends React.Component {
    render() {
        return(
            <ComponentContext.Consumer>
                { ctx => <Element cbComponent={ctx.cbComponent} {...this.props}/> }
            </ComponentContext.Consumer>
        );
    }
}
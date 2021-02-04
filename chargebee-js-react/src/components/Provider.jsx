import React from 'react';

export default class Provider extends React.Component{
    render() {
        if (this.props.cbInstanceInited && this.props.cbInstanceInited.inited) {
            return (
                <div>
                    {this.props.children}
                </div>
            );
        } else {
            return null;
        }
    }    
}


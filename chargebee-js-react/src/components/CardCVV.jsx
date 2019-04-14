import React, {Fragment} from 'react'
import Element from './Element.jsx';

export default class CardCVV extends React.Component {
    render() {
        const {onBlur, onChange, onFocus, onReady, ...props} = this.props;
        const listeners = {onBlur, onChange, onFocus, onReady};
        return (
            <Fragment>
                <Element id='cvv' {...props} listeners={listeners}/>
            </Fragment>
        )
    }
}

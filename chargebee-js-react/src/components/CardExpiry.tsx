import * as React from 'react'
import Element from './Element';
import { ComponentContext } from "./ComponentGroup";

// @to-update
export interface CardExpiryProps {
    onBlur: React.MouseEventHandler;
    onChange: React.ChangeEventHandler;
    onFocus: React.FocusEventHandler;
    onReady: React.EventHandler<React.SyntheticEvent>;
};

export default React.forwardRef((props: CardExpiryProps, ref: React.LegacyRef<Element>) => {
    const {onBlur, onChange, onFocus, onReady, ...rest} = props;
    const listeners = {onBlur, onChange, onFocus, onReady};

    return (
        <ComponentContext.Consumer>
            { ctx => <Element type='expiry' cbComponent={ctx.cbComponent} ref={ref} listeners={listeners} {...rest}/> }
        </ComponentContext.Consumer>
    )
});

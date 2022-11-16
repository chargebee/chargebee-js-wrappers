import * as React from 'react'
import Element from './Element';
import { ComponentContext } from "./ComponentGroup";

// @to-update
export interface CardNumberProps {
    onBlur: any;
    onChange: any;
    onFocus: any;
    onReady: any;
};

export default React.forwardRef((props: CardNumberProps, ref: React.LegacyRef<Element>) => {
    const {onBlur, onChange, onFocus, onReady, ...rest} = props;
    const listeners = {onBlur, onChange, onFocus, onReady};

    return (
        <ComponentContext.Consumer>
            { ctx => <Element type='number' cbComponent={ctx.cbComponent} ref={ref} listeners={listeners} {...rest}/> }
        </ComponentContext.Consumer>
    )
});

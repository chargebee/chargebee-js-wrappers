import * as React from 'react'
import Element, { ElementProps } from './Element';
import { ComponentContext } from "./ComponentGroup";

// @to-update
export interface CardCVVProps {
    onBlur: any;
    onChange: any;
    onFocus: any;
    onReady: any;
};

export default React.forwardRef((props: CardCVVProps, ref: React.LegacyRef<Element>) => {
    const {onBlur, onChange, onFocus, onReady, ...rest} = props;
    const listeners = {onBlur, onChange, onFocus, onReady};

    return (
        <ComponentContext.Consumer>
            { ctx => <Element type='cvv' cbComponent={ctx.cbComponent} ref={ref} listeners={listeners} {...rest}/> }
        </ComponentContext.Consumer>
    )
});

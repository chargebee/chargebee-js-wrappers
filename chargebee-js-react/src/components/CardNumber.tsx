import * as React from 'react'
import Element, { ElementProps } from './Element';
import { ComponentContext } from "./ComponentGroup";

export interface CardNumberProps extends ElementProps {
    onBlur?: React.MouseEventHandler;
    onChange?: React.ChangeEventHandler;
    onFocus?: React.FocusEventHandler;
    onReady?: React.EventHandler<React.SyntheticEvent>;
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

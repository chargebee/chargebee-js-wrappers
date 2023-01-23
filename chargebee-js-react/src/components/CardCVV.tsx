import * as React from 'react'
import Element, { ElementProps } from './Element';
import { ComponentContext } from "./ComponentGroup";

export interface CardCVVProps extends ElementProps {
    onBlur?: React.MouseEventHandler;
    onChange?: React.ChangeEventHandler;
    onFocus?: React.FocusEventHandler;
    onReady?: React.EventHandler<React.SyntheticEvent>;
    onEscape?: Function;
};

export default React.forwardRef((props: CardCVVProps, ref: React.LegacyRef<Element>) => {
    const {onBlur, onChange, onFocus, onReady, onEscape, ...rest} = props;
    const listeners = {onBlur, onChange, onFocus, onReady, onEscape};

    return (
        <ComponentContext.Consumer>
            { ctx => <Element type='cvv' cbComponent={ctx.cbComponent} ref={ref} listeners={listeners} {...rest}/> }
        </ComponentContext.Consumer>
    )
});

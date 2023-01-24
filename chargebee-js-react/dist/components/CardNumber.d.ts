import * as React from 'react';
import Element, { ElementProps } from './Element';
export interface CardNumberProps extends ElementProps {
    onBlur?: React.MouseEventHandler;
    onChange?: React.ChangeEventHandler;
    onFocus?: React.FocusEventHandler;
    onReady?: React.EventHandler<React.SyntheticEvent>;
}
declare const _default: React.ForwardRefExoticComponent<CardNumberProps & React.RefAttributes<Element>>;
export default _default;

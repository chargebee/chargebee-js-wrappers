import * as React from 'react';
import Element, { ElementProps } from './Element';
export interface CardCVVProps extends ElementProps {
    onBlur?: React.MouseEventHandler;
    onChange?: React.ChangeEventHandler;
    onFocus?: React.FocusEventHandler;
    onReady?: React.EventHandler<React.SyntheticEvent>;
    onEscape?: Function;
}
declare const _default: React.ForwardRefExoticComponent<CardCVVProps & React.RefAttributes<Element>>;
export default _default;

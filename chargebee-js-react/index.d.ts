/**
 * Type Definitions for "@chargebee/chargebee-js-react-wrapper"
 */

/// <reference types="react" />

declare module '@chargebee/chargebee-js-react-wrapper' {
  export import CardComponent = ReactWrapper.CardComponent;
  export import ChargebeeComponentProps = ReactWrapper.ChargebeeComponentProps;

  export import CardNumber = ReactWrapper.CardNumber;
  export import CardNumberProps = ReactWrapper.CardNumberProps;

  export import CardExpiry = ReactWrapper.CardExpiry;
  export import CardExpiryProps = ReactWrapper.CardExpiryProps;

  export import CardCVV = ReactWrapper.CardCVV;
  export import CardCVVProps = ReactWrapper.CardCVVProps;
}

declare namespace ReactWrapper {
  // @todo: alternate approach
  type Fonts = import('@chargebee/chargebee-js-types').Fonts;
  type Classes = import('@chargebee/chargebee-js-types').Classes;
  type Styles = import('@chargebee/chargebee-js-types').Styles;
  type Placeholder = import('@chargebee/chargebee-js-types').Placeholder;
  type AriaLabel = import('@chargebee/chargebee-js-types').AriaLabel;
  type Component = import('@chargebee/chargebee-js-types').Component;

  export interface ChargebeeComponentProps {
    type: string;
    fonts: Fonts;
    classes: Classes;
    icon: boolean;
    styles: Styles;
    locale: string;
    placeholder: Placeholder;
    currency: string;
    ariaLabel: AriaLabel;
    className: string;
    onBlur: React.MouseEventHandler;
    onChange: React.ChangeEventHandler;
    onFocus: React.FocusEventHandler;
    onReady: React.EventHandler<React.SyntheticEvent>;
  }

  export class CardComponent extends React.Component<ChargebeeComponentProps> {}

  interface Listeners {
    onBlur: React.MouseEventHandler;
    onChange: React.ChangeEventHandler;
    onFocus: React.FocusEventHandler;
    onReady: React.EventHandler<React.SyntheticEvent>;
  }
  export interface ElementProps {
    type: string;
    cbComponent: Component;
    listeners: Listeners;
    icon?: boolean;
    styles?: Styles;
    placeholder?: Placeholder;
    ariaLabel?: AriaLabel;
    className?: string;
  }

  type CardNumberProps = ElementProps & Listeners;
  export class CardNumber extends React.Component<CardNumberProps> {}

  type CardExpiryProps = ElementProps & Listeners;
  export class CardExpiry extends React.Component<CardExpiryProps> {}

  type CardCVVProps = ElementProps & Listeners;
  export class CardCVV extends React.Component<CardCVVProps> {}
}

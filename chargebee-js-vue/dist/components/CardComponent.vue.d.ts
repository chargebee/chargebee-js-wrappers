import { Component, PropType } from "vue";
import { AdditionalData, Callbacks, PaymentIntent, Fonts, Classes, Styles, Placeholder } from "@chargebee/chargebee-js-types";
declare const _default: import("vue").DefineComponent<{
    class: {
        type: StringConstructor;
        default: string;
    };
    fonts: {
        type: PropType<Fonts>;
        default: any[];
    };
    classes: {
        type: PropType<Classes>;
        default: () => {};
    };
    styles: {
        type: PropType<Styles>;
        default: () => {};
    };
    placeholder: {
        type: PropType<Placeholder>;
        default: () => {};
    };
    icon: {
        type: BooleanConstructor;
        default: boolean;
    };
    locale: {
        type: StringConstructor;
        default: string;
    };
    currency: {
        type: StringConstructor;
        default: string;
    };
}, unknown, {
    cbInstance: any;
    cbComponent: any;
    moduleLoaded: boolean;
    elementId: string;
}, {
    componentOptions: () => {
        fonts: any;
        classes: any;
        locale: any;
        style: any;
        placeholder: any;
        icon: any;
        currency: any;
    };
}, {
    tokenize(additionalData: AdditionalData): any;
    authorizeWith3ds(paymentIntent: PaymentIntent, additionalData: AdditionalData, callbacks: Callbacks): any;
    focus(): void;
    blur(): void;
    clear(): void;
    setCbComponent(cbComponent: Component): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    class: {
        type: StringConstructor;
        default: string;
    };
    fonts: {
        type: PropType<Fonts>;
        default: any[];
    };
    classes: {
        type: PropType<Classes>;
        default: () => {};
    };
    styles: {
        type: PropType<Styles>;
        default: () => {};
    };
    placeholder: {
        type: PropType<Placeholder>;
        default: () => {};
    };
    icon: {
        type: BooleanConstructor;
        default: boolean;
    };
    locale: {
        type: StringConstructor;
        default: string;
    };
    currency: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    icon: boolean;
    class: string;
    placeholder: {};
    fonts: Fonts;
    classes: {};
    styles: Styles;
    locale: string;
    currency: string;
}>;
export default _default;

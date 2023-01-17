import { Component } from "vue";
import { AdditionalData, Callbacks, PaymentIntent } from "@chargebee/chargebee-js-types";
declare const _default: import("vue").DefineComponent<{
    fonts: {
        type: ArrayConstructor;
        default: any[];
    };
    classes: {
        type: ObjectConstructor;
        default: () => {};
    };
    styles: {
        type: ObjectConstructor;
        default: () => {};
    };
    placeholder: {
        type: ObjectConstructor;
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
    fonts: {
        type: ArrayConstructor;
        default: any[];
    };
    classes: {
        type: ObjectConstructor;
        default: () => {};
    };
    styles: {
        type: ObjectConstructor;
        default: () => {};
    };
    placeholder: {
        type: ObjectConstructor;
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
    placeholder: Record<string, any>;
    fonts: unknown[];
    classes: Record<string, any>;
    styles: Record<string, any>;
    locale: string;
    currency: string;
}>;
export default _default;

import { PropType } from 'vue';
import { Styles } from '@chargebee/chargebee-js-types';
declare const _default: import("vue").DefineComponent<{
    styles: {
        type: PropType<Styles>;
        default: () => {};
    };
    placeholder: {
        type: StringConstructor;
        default: () => string;
    };
}, unknown, {
    id: string;
    loaded: boolean;
    classname: Function;
}, {}, {}, import("vue").DefineComponent<{
    styles: {
        type: PropType<Styles>;
        default: () => {};
    };
    placeholder: {
        type: StringConstructor;
        default: () => string;
    };
}, unknown, {
    field: any;
    initialized: boolean;
}, {
    fieldOptions: () => {
        style: any;
        placeholder: any;
    };
    elementId: () => string;
}, {
    getField(): any;
    attachListener(listener: string): void;
    initializeField(cbComponent: import("@chargebee/chargebee-js-types").Component): void;
    focus(): void;
    blur(): void;
    clear(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    styles: {
        type: PropType<Styles>;
        default: () => {};
    };
    placeholder: {
        type: StringConstructor;
        default: () => string;
    };
}>>, {
    placeholder: string;
    styles: Styles;
}>, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    styles: {
        type: PropType<Styles>;
        default: () => {};
    };
    placeholder: {
        type: StringConstructor;
        default: () => string;
    };
}>>, {
    placeholder: string;
    styles: Styles;
}>;
export default _default;

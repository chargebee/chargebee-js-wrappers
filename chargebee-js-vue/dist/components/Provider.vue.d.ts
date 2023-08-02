import { PropType } from 'vue';
import { ChargebeeInstance } from '@chargebee/chargebee-js-types';
declare const _default: import("vue").DefineComponent<{
    cbInstance: {
        type: PropType<ChargebeeInstance>;
        default: any;
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    cbInstance: {
        type: PropType<ChargebeeInstance>;
        default: any;
    };
}>>, {
    cbInstance: ChargebeeInstance;
}>;
export default _default;

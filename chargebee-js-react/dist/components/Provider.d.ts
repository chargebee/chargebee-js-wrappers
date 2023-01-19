import * as React from 'react';
import { ChargebeeInstance } from '@chargebee/chargebee-js-types';
interface ProviderProps {
    cbInstance: ChargebeeInstance;
    children: React.ReactChild;
}
declare const _default: React.ForwardRefExoticComponent<ProviderProps & React.RefAttributes<unknown>>;
export default _default;

import * as React from 'react';
import { ChargebeeInstance } from '@chargebee/chargebee-js-types';
import { validateCbInstance } from '../utils/';

interface ProviderProps {
    cbInstance: ChargebeeInstance;
    children: React.ReactChild;
}

export default React.forwardRef((props: ProviderProps, ref) => {
    if (props.cbInstance && validateCbInstance(props.cbInstance)) {
        return (
            <>
                {props.children}
            </>
        );
    } else {
        return null;
    }  
});


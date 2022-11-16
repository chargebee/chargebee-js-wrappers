import * as React from 'react';
import { validateCbInstance } from '../utils/';

interface ProviderProps {
    cbInstance: any;
    children: any
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


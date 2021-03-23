import React from 'react';
import { validateCbInstance } from '../utils/';


export default React.forwardRef((props, ref) => {
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


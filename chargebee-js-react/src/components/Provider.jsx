import React from 'react';

export default React.forwardRef((props, ref) => {
    if (props.cbInstance && props.cbInstance.inited) {
        return (
            <>
                {props.children}
            </>
        );
    } else {
        return null;
    }  
});


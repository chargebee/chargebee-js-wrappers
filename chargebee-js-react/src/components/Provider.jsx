import React from 'react';

export default React.forwardRef((props, ref) => {
    if (props.cbInstanceInited && props.cbInstanceInited.inited) {
        return (
            <>
                {props.children}
            </>
        );
    } else {
        return null;
    }  
});


import React from 'react'
import ComponentGroup from './ComponentGroup.jsx'

export default React.forwardRef((props, ref) => (
    <ComponentGroup type='card' {...props} ref={ref}/>
));

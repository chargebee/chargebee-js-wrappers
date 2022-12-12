import * as React from 'react'
import ComponentGroup, { ChargebeeComponentProps } from './ComponentGroup'

export default React.forwardRef((props: ChargebeeComponentProps, ref: React.LegacyRef<ComponentGroup>) => (
    <ComponentGroup type='card' ref={ref} {...props} />
));

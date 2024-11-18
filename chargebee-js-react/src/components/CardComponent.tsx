import * as React from 'react'
import ComponentGroup, { ChargebeeComponentProps } from './ComponentGroup'
import FieldContainer from "./FieldContainer";

export default React.forwardRef((props: ChargebeeComponentProps, ref: React.LegacyRef<FieldContainer>) => (
    <ComponentGroup type='card' forwardedRef={ref} {...props} />
));

import React from 'react';
import { makeStyleProperties } from './makeStyleProperties';

export function makeStyledComponent(Comp: any) {
  return React.forwardRef((props: any, ref: any) => {

    const [style, restProps] = makeStyleProperties(props);

    return (
      <Comp {...restProps} style={style} ref={ref}>
        {props.children}
      </Comp>
    );
  });
}

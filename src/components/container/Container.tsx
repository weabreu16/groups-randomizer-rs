import React from 'react';
import { makeStyledComponent } from '../../helpers';

interface Props {
  style?: any;
  className?: string;
  children?: React.ReactNode;
}

export function ContainerBase(props: Props) {

  return (
    <div className={props.className} style={props.style}>
      {props.children}
    </div>
  );
}

export const Container = makeStyledComponent(ContainerBase);

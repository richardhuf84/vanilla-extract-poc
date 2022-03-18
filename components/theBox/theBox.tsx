import React from 'react';
import classnames from 'classnames';
import paddingVariant from '@/components/styles';
import { BoxStyles } from './theBox.css';
interface Props<C extends React.ElementType> {
  as?: C;
  children?: React.ReactNode;
  padding?: 'small' | 'medium' | 'large' | 'none';
}

type BoxProps<C extends React.ElementType> = Props<C> & Omit<React.ComponentPropsWithoutRef<C>, keyof Props<C>>

export const Box = <C extends React.ElementType = 'div'>({ 
  as, 
  children, 
  padding = 'none',
  className: classes,
  ...props
}:BoxProps<C>) => {
  const Component = as || 'div';
  const classNames = classnames(paddingVariant[padding], BoxStyles, classes);
  return (
  <Component 
    className={classNames}
    {...props}
    >
    {children}
  </Component>
  );
}
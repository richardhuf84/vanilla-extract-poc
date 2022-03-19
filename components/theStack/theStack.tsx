import React from 'react';
import classnames from 'classnames';
import { stack } from './theStack.css';
import { Box } from '@/components/theBox/theBox';

interface StackProps { 
  children: React.ReactNode;
  direction?: 'inline' | 'stack';
  padding?: 'small' | 'medium' | 'large' | 'none';
  className?: string
}

const Stack = ({
  children, 
  direction = 'stack', 
  className,
  ...props
}: StackProps) => {
  const classes = classnames(className, stack[direction]);
  console.log('props', props);

  return (
    <Box 
      className={classes}
      {...props}>
      {children}
    </Box>
  )
}

export default Stack;
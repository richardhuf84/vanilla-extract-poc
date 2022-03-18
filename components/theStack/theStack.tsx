import React from 'react';
import { stack } from './theStack.css';
import { Box } from '@/components/theBox/theBox';

interface StackProps { 
  children: React.ReactNode;
  direction?: 'inline' | 'stack';
  padding?: 'small' | 'medium' | 'large' | 'none';
}

const Stack = ({
  children, 
  direction = 'stack', 
  padding = 'none',
  ...props
}: StackProps) => {
  
  return (
    <Box 
      className={stack[direction]}
      {...props}>
      {children}
    </Box>
  )
}

export default Stack;
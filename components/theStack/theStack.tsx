import React from 'react';
import { stack } from './theStack.css';
import { Box } from '@/components/theBox/theBox';

interface StackProps { 
  children: React.ReactNode;
  direction?: 'inline' | 'stack';
}

const Stack = ({children, direction = 'stack', ...props}: StackProps) => {
  
  return (
    <Box 
      padding='large'
      className={stack[direction]}
      {...props}>
      {children}
    </Box>
  )
}

export default Stack;
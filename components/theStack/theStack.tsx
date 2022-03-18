import React from 'react';
import { stack } from './theStack.css';


interface StackProps { 
  children: React.ReactNode;
  direction?: 'inline' | 'stack';
}

const Stack = ({children, direction = 'stack', ...props}: StackProps) => {
  
  return (
    <div className={stack[direction]} {...props}>
      {children}
    </div>
  )
}

export default Stack;
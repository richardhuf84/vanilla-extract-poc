import React from 'react';
import { code } from './theCode.css';

interface CodeProps { 
  children: React.ReactNode;
}

const Code = ({children, }: CodeProps) => {
  
  return (
    <code className={code}>
      {children}
    </code>
  )
}

export default Code;
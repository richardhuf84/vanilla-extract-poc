import React from 'react';
import { codeVariants } from './theCode.css';
import paddingVariant from '@/components/styles';

interface CodeProps { 
  children: React.ReactNode;
  background?: 'default' | 'transparent'; 
  padding?: 'small' | 'medium' | 'large';
}

const Code = ({children, background = 'default', padding = 'small'}: CodeProps) => {
  
  return (
    <code className={`${codeVariants[background]} ${paddingVariant[padding]}`}>
      {children}
    </code>
  )
}

export default Code;
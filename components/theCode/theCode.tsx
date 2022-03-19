import React from 'react';
import { codeVariants } from './theCode.css';
import { paddingVariant } from '@/components/styles';
import { Box } from '@/components/theBox/theBox';

interface CodeProps { 
  children: React.ReactNode;
  background?: 'default' | 'transparent'; 
  padding?: 'small' | 'medium' | 'large';
}

const Code = ({
  children, 
  background = 'default', 
  padding = 'medium'
}: CodeProps) => {  
  return (
    <Box as='code' padding={padding} className={codeVariants[background]}>
      {children}
    </Box>
  )
}

export default Code;
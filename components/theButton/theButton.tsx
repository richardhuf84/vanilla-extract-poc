import React from 'react';
import { button } from './theButton.css';
import type { ButtonVariants } from './theButton.css';

type buttonProps = ButtonVariants & { children: React.ReactNode }

const Button = ({children, color, variant, size}: buttonProps) => {
  
  return (
    <button className={button({
      color,
      size,
      variant
    })}>
      {children}
    </button>
  )
}

export default Button;
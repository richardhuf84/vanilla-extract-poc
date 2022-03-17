import React from 'react';
import { button } from './Button.css';
import type { ButtonVariants } from './Button.css';

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
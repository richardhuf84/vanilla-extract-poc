import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@/theme/theme.css';

const base = style({
  display: 'flex',
  gap: vars.space.medium,
  alignItems: 'flex-start'
});

export const stack = styleVariants({
  inline: [base, { 
    flexDirection: 'row' 
  }],
  stack: [base, {
    flexDirection: 'column'
  }]
});
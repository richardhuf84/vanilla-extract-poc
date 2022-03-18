import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@/theme/theme.css';

const base = style({
  display: 'block',
  borderRadius: vars.borderRadii.small,
});

export const codeVariants = styleVariants({
  default: [base, { backgroundColor: vars.color.muted.default }],
  transparent: [base, { backgroundColor: 'transparent' }]
})
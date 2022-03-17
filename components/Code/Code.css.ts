import { style } from '@vanilla-extract/css';
import { vars } from '@/theme/theme.css';

export const code = style({
  display: 'block',
  borderRadius: vars.borderRadii.small,
  backgroundColor: '#EEE',
  padding: '4px 6px'
});
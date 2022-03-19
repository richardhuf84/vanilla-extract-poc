import { style } from '@vanilla-extract/css';
import { vars } from '@/theme/theme.css';

export const zebraStripes = style({
  selectors: {
    '&:nth-child(2n)': {
      background: vars.color.neutral[50]
    }
  }
})
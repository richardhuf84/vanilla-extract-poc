import { style, styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { vars } from '@/theme/theme.css';

const base = style({
  padding: vars.space.small
})

const spacing = {
  small: vars.space.small,
  medium: vars.space.medium,
  large: vars.space.large,
} as const;

export const paddingVariant = styleVariants(
  spacing,
  (space) => [base, { padding: calc.multiply(space, 2) }]
);
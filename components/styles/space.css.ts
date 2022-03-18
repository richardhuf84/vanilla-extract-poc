import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@/theme/theme.css';

const spacing = {
  none: vars.space.none,
  small: vars.space.small,
  medium: vars.space.medium,
  large: vars.space.large,
};

export const paddingVariant = styleVariants({
  none: { padding: vars.space.none },
  small: { padding: vars.space.small },
  medium: { padding: vars.space.medium },
  large: { padding: vars.space.large },
});
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { vars } from '@/theme/theme.css';

export const button = recipe({
  base: {
    all: 'unset',
    borderRadius: 6,
    fontFamily: 'sans-serif',
    display: 'flex',
    marginBottom: 4,
  },

  variants: {
    color: {
      accent: { 
        backgroundColor: vars.color.accent,
        color: vars.color.neutral.light
       },
      subdued: { 
        backgroundColor:  vars.color.subdued,
        color: vars.color.neutral.light
      },
      muted: { 
        backgroundColor: vars.color.muted,
        color: vars.color.neutral.dark
      }
    },
    variant: {
      primary: {},
      secondary: {}
    },
    size: {
      small: { padding: 12 },
      medium: { padding: 16 },
      large: { padding: 24 }
    }
  },

  compoundVariants: [
    {
      variants: {
        variant: 'secondary',
        color: 'accent'
      },
      style: {
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: vars.color.accent,
        color: vars.color.accent,
      }
    },
    {
      variants: {
        variant: 'secondary',
        color: 'subdued'
      },
      style: {
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: vars.color.subdued,
        color: vars.color.subdued,
      }
    },
    {
      variants: {
        variant: 'secondary',
        color: 'muted'
      },
      style: {
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: vars.color.muted,
        color: vars.color.neutral.dark,
      }
    }
  ],

  defaultVariants: {
    color: 'accent',
    size: 'medium',
    variant: 'primary'
  }
});

export type ButtonVariants = RecipeVariants<typeof button>;

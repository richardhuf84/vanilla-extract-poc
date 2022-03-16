import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { vars } from '@/theme/theme.css';

export const button = recipe({
  base: {
    all: 'unset',
    borderRadius: 6,
    fontFamily: 'sans-serif',
    display: 'flex',
    marginBottom: 4,

    ':focus-visible': {
      outline: `2px solid ${vars.color.neutral.dark}`,
      outlineOffset: '2px',
    }
  },

  variants: {
    color: {
      accent: { 
        backgroundColor: vars.color.accent.default,
        color: vars.color.neutral.light,

        ':hover': {
          background: vars.color.accent.default,
          textDecoration: 'underline'
        }
       },
      subdued: { 
        backgroundColor:  vars.color.subdued.default,
        color: vars.color.neutral.light
      },
      muted: { 
        backgroundColor: vars.color.muted.default,
        color: vars.color.neutral.dark
      }
    },
    variant: {
      primary: {
      },
      secondary: {
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: vars.color.accent.default,
        color: vars.color.accent.default,
      }
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
        borderColor: vars.color.accent.default,
        color: vars.color.accent.default,
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
        borderColor: vars.color.subdued.default,
        color: vars.color.subdued.default,
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
        borderColor: vars.color.muted.default,
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

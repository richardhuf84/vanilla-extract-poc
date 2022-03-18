import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { vars } from '@/theme/theme.css';

const baseVariant = {
  backgroundColor: 'transparent',
  borderWidth: 2,
  borderStyle: 'solid',

  ':hover': {
    backgroundColor: 'transparent',
  }
};

export const button = recipe({
  base: {
    all: 'unset',
    borderRadius: 6,
    cursor: 'pointer',
    fontFamily: 'sans-serif',
    display: 'flex',
    marginBottom: 4,
    transition: 'all 200ms ease',

    ':focus-visible': {
      outline: `2px solid ${vars.color.neutral.dark}`,
      outlineOffset: '2px',
    },

    ':hover': {
      textDecoration: 'underline'
    }
  },

  variants: {
    color: {
      accent: { 
        backgroundColor: vars.color.accent.default,
        color: vars.color.neutral.light,

        ':hover': {
          background: vars.color.accent.hover,
        }
       },
      subdued: { 
        backgroundColor:  vars.color.subdued.default,
        color: vars.color.neutral.light,

        ':hover': {
          background: vars.color.subdued.hover,
        }
      },
      muted: { 
        backgroundColor: vars.color.muted.default,
        color: vars.color.neutral.dark,

        ':hover': {
          background: vars.color.muted.hover,
        }
      }
    },
    variant: {
      primary: {
      },
      secondary: {
        ...baseVariant,
        borderColor: vars.color.accent.default,
        color: vars.color.accent.default,

        ':hover': {
          ...baseVariant[':hover'],
          borderColor: vars.color.accent.hover,
          color: vars.color.accent.hover,
        }
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
        ...baseVariant,
        borderColor: vars.color.accent.default,
        color: vars.color.accent.default,

        ':hover': {
        ...baseVariant[':hover'],
          borderColor: vars.color.accent.hover
        }
      }
    },
    {
      variants: {
        variant: 'secondary',
        color: 'subdued'
      },
      style: {
        ...baseVariant,
        borderColor: vars.color.subdued.default,
        color: vars.color.subdued.default,
        
        ':hover': {
          ...baseVariant[':hover'],
          borderColor: vars.color.subdued.hover
        }
      },
    },
    {
      variants: {
        variant: 'secondary',
        color: 'muted'
      },
      style: {
        ...baseVariant,
        borderColor: vars.color.muted.default,
        color: vars.color.neutral.dark,

        ':hover': {
          ...baseVariant[':hover'],
          borderColor: vars.color.muted.hover
        }
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

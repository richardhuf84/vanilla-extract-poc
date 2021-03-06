import { createTheme } from '@vanilla-extract/css';

export const [themeClass, vars] = createTheme({
  borderRadii: {
    small: '4px',
    medium: '8px',
    large: '12px'
  },
  color: {
    accent: {
      default: 'hsla(270, 50%, 40%, 1)',
      hover: 'hsla(270, 50%, 30%, 1)'
    },    
    subdued: {
      default: 'hsla(212, 28%, 25%, 1)',
      hover: 'hsla(212, 28%, 15%, 1)',
    },
    muted: {
      default: 'hsla(0, 0%, 93%, 1)',
      hover: 'hsla(0, 0%, 83%, 1)',
    },
    neutral: {
      50: 'hsla(0, 0%, 97%, 1)',
      300: 'hsla(0, 0%, 100%, 1)',
      900: 'hsla(0, 0%, 0%, 1)',
    }
  },
  font: {
    body: 'arial'
  },
  space: {
    'none': '0',
    'small': '4px',
    'medium': '8px',
    'large': '16px'
  }
});
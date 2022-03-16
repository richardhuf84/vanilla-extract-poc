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
      hover: 'hsla(270, 50%, 60%, 1)'
    },    
    subdued: {
      default: 'hsla(212, 28%, 25%, 1)',
      hover: 'hsla(212, 28%, 45%, 1)',
    },
    muted: {
      default: 'hsla(0, 0%, 91%, 1)',
      hover: 'hsla(0, 0%, 71%, 1)',
    },
    neutral: {
      light: 'hsla(0, 0%, 100%, 1)',
      dark: 'hsla(0, 0%, 0%, 1)'
    }
  },
  font: {
    body: 'arial'
  }
});
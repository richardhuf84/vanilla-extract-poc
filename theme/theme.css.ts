import { createTheme } from '@vanilla-extract/css';

export const [themeClass, vars] = createTheme({
  borderRadii: {
    small: '4px',
    medium: '8px',
    large: '12px'
  },
  color: {
    accent: 'rebeccapurple',
    subdued: '#2E4053',
    muted: 'whiteSmoke',
    neutral: {
      light: 'white',
      dark: 'black'
    }
  },
  font: {
    body: 'arial'
  }
});
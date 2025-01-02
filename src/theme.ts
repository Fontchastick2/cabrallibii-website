import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4a90e2',
      light: '#81c3fd',
      dark: '#2c5282',
    },
    secondary: {
      main: '#805ad5',
      light: '#b794f4',
      dark: '#553c9a',
    },
    background: {
      default: '#f7fafc',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          background: 'linear-gradient(45deg, #4a90e2 30%, #805ad5 90%)',
          color: 'white',
          boxShadow: '0 3px 5px 2px rgba(64, 58, 107, .3)',
          '&:hover': {
            background: 'linear-gradient(45deg, #2c5282 30%, #553c9a 90%)',
          },
        },
        outlined: {
          borderColor: '#4a90e2',
          color: '#4a90e2',
          '&:hover': {
            borderColor: '#805ad5',
            color: '#805ad5',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(90deg, #2d3748 0%, #4a5568 100%)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          '&:hover': {
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          },
        },
      },
    },
  },
});

export default theme;

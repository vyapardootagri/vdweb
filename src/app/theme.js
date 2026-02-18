"use client";
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#DAA520', // Goldenrod
    },
    secondary: {
      main: '#5D4037', // Spice Brown
    },
    background: {
      default: '#FFFBF5', // Warm paper white
    },
  },
  typography: {
    fontFamily: 'var(--font-geist-sans)',
    h1: { fontFamily: 'var(--font-playfair)' },
    h2: { fontFamily: 'var(--font-playfair)' },
    h3: { fontFamily: 'var(--font-playfair)' },
    h4: { fontFamily: 'var(--font-playfair)' },
    h5: { fontFamily: 'var(--font-playfair)' },
    h6: { fontFamily: 'var(--font-playfair)' },
  },
});

export default theme;
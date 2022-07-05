import * as React from 'react';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import useMediaQuery from '@mui/material/useMediaQuery';
import darkTheme from '../styles/darkTheme';
import lightTheme from '../styles/lightTheme';

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

interface ColorModeProps {
  children: React.ReactNode
}

const ColorModeProvider = ({ children }: ColorModeProps) => {
  const [mode, setMode] = React.useState<'light' | 'dark'>();

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
    ? 'dark' : 'light';

  React.useEffect(() => {
    const preferredTheme = localStorage.getItem('PREFERRED_THEME') as 'light' | 'dark' | null;

    if (!preferredTheme) {
      setMode(prefersDarkMode);
    } else {
      setMode(preferredTheme);
    }
  }, []);

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () => {
      const isWhichTheme = (mode === 'dark') ? darkTheme : lightTheme;

      return createTheme({
        ...isWhichTheme,
      });
    },
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        { children }
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ColorModeProvider;

import * as React from 'react';
import { Button, Box, useTheme } from '@mui/material';

import { ColorModeContext } from '../contexts/ColorModeContext';

const ToggleThemeButton: React.FC = () => {
  const useColorMode = React.useContext(ColorModeContext);

  const theme = useTheme();

  function handleClick() {
    useColorMode.toggleColorMode();

    const isDark = theme.palette.mode === 'dark';

    localStorage.setItem('PREFERRED_THEME', isDark ? 'light' : 'dark');
  }

  return (
    <Box>
      <Button onClick={() => handleClick()} variant="contained">
        Change theme
      </Button>
    </Box>
  );
};

export default ToggleThemeButton;
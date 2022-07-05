import { Typography } from "@mui/material"
import ToggleThemeButton from "./components/ToggleThemeButton"
import ColorModeContext from "./contexts/ColorModeContext"


function App() {
  return (
    <ColorModeContext>
      <ToggleThemeButton />
      <Typography sx={{ color: 'secondary' }}>
        Hello world
      </Typography>
    </ColorModeContext>
  )
}

export default App

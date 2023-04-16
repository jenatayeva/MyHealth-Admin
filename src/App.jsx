import './App.css'
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";

import SideBar from './scenes/global/SideBar'
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState("light")

  const darkTheme=createTheme({
    palette:{
      mode: mode,
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
    <CssBaseline>
        <SideBar/> 
      </CssBaseline>
    </ThemeProvider>
  )
}

export default App

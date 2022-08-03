import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import MiniDrawer from "./components/Drawer/MiniDrawer";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});



function App() {
  return (
    <Router>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <MiniDrawer />
      </ThemeProvider>
    </Router>
  );
}

export default App;

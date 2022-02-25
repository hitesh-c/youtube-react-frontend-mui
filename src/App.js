import React, { useState } from "react";
// import logo from './logo.svg';
import { useLocation } from "react-router-dom";
import {
  ThemeProvider,
  createTheme,
  makeStyles,
  Box,
  Grid,
  useTheme,
  Toolbar,
} from "@material-ui/core";
import queryString from "query-string";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Mainarea from "./components/mainarea/mainarea";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    spacing: 4,
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        main: "#f44336",
      },
      secondary: {
        main: "#3EA6FF",
      },
      background: {
        default: darkMode ? "#232323" : "#FFF",
        dark: darkMode ? "#181818" : "#f4f6f8",
        paper: darkMode ? "#232323" : "#FFF",
      },
    },
  });

  const { search } = useLocation();
  const { v, list } = queryString.parse(search);
  const useStyles = makeStyles((theme) => ({
    root: {
      height: "100vh",
      backgroundColor: theme.palette.background.dark,
    },
  }));
  const classes = useStyles();

  const Theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        
       
        {/* <Box display="flex" sx={{backgroundColor: theme.palette.background.dark}}>
          <Sidebar />
          <Player v={v}/>
          <Player v={v}/>
          {/* <Mainarea  darkMode={darkMode} setDarkMode={setDarkMode}/> 
          <Editor/>
        </Box> */}
        <Box display="flex" p={1}
          sx={{  overflow: "hidden", backgroundColor: theme.palette.background.dark}}
        >
        <Sidebar />
        <Mainarea  darkMode={darkMode} setDarkMode={setDarkMode}></Mainarea>
          {/* <Grid container xs={12} spacing={2}>
          
            <Grid item xs={7}>
              <Player v={v} />
            </Grid>
            <Grid item xs={5}>
              
                <Editor />
              
            </Grid>
            <Grid item xs={8}>
              <Box>xs=4</Box>
            </Grid>
            <Grid item xs={4}>
              <Box>xs=8</Box>
            </Grid>
          </Grid> */}
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;

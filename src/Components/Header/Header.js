import React from "react";
import "./Header.css";
import TextField from "@mui/material/TextField";
import { ThemeProvider, createTheme } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Categories from "../../Data/Catagery";
import { debounce } from "lodash";

const Header = ({
  catagery,
  setCatagery,
  setWord,
  word,
  setMeanings,
  lightMode,
}) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: lightMode ? "#000" : "#fff",
      },
      mode: lightMode ? "light" : "dark",
    },
  });

  const handleChange = (e) => {
    setCatagery(e.target.value);
    setWord("");
    setMeanings([]);
  };

  const handleText = debounce((text) => {
    setWord(text);
  }, 500);

  return (
    <div className="header">
      <span className="title">{word ? word : "Word Hunt"}</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            className="search"
            id="filled-basic"
            // value={word}
            label="Search a Word"
            variant="standard"
            onChange={(e) => handleText(e.target.value)}
          />
          <TextField
            select
            label="Language"
            value={catagery}
            onChange={(e) => handleChange(e.target.value)}
            className="select"
            variant="standard"
          >
            {Categories.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;

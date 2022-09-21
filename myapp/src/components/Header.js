import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

function Header() {
  const [display, setDisplay] = useState("column");
  const [count, setCount] = useState("3");

  const handleDisplay = (event) => {
    setDisplay(event.target.value);
  };
  const handleInput = (event) => {
    setCount(event.target.value);
  };

  return (
    <header className="w-full text-center  py-4 px-8 bg-yellow-100 mx-auto shadow-md mb-8 ">
        <Grid container  spacing={4}>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Display</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={display}
                label="Count of user to show"
                onChange={handleDisplay}
              >
                <MenuItem value={"column"}>Column display</MenuItem>
                <MenuItem value={"row"}>Row display</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              onChange={handleInput}
              value={count}
              id="outlined-basic"
              label="Number of users to display"
              variant="outlined"
            />
          </Grid>
        </Grid>
    </header>
  );
}

export default Header;

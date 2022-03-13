import { makeStyles } from "@mui/styles";
import { Card, Popover, TextField, Typography } from "@mui/material";
import React from "react";
export default function App() {
  return (
    <div className="App">
      <OptionsModel />

      <OptionsCmdField />

      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const OptionsCmdField = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <NoBorderField>
        <TextField
          onFocus={handleClick}
          onBlur={(event) => {
            console.log("On Blur");
          }}
          fullWidth
          placeholder="Type / for commands"
        />
      </NoBorderField>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
      >
        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
      </Popover>
    </div>
  );
};

const NoBorderField = ({ children }) => {
  const classes = useNotBoderStyles();
  return <div className={classes.decorator}>{children}</div>;
};

const OptionsModel = () => {
  return <Card variant="outlined">loremvvvvvv</Card>;
};

const useNotBoderStyles = makeStyles(() => {
  return {
    decorator: {
      "& fieldset": {
        border: "none"
      }
    }
  };
});

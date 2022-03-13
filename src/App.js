import { makeStyles } from "@mui/styles";
import {
  Avatar,
  Box,
  Button,
  Card,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Popover,
  Popper,
  TextField,
  Typography
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import React from "react";

export default function App() {
  return (
    <div className="App">
      <OptionsCmdField />
      loremvvvvvv
    </div>
  );
}

const OptionsCmdField = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [list, setList] = React.useState(["Image", "H1", "H2"]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div style={{ position: "relative" }}>
      <NoBorderField>
        <TextField
          aria-describedby={id}
          onChange={(ev) => {
            const { value } = ev.target;

            if (value.includes("/")) {
              handleClick(ev);
              const clean = value.replace("/", "");
              setList((pre) => pre.filter((it) => it.includes(clean)));
            } else {
              handleClose();
            }
          }}
          fullWidth
          placeholder="Type / for commands"
        />
      </NoBorderField>
      {open ? (
        <OptionsModel>
          <List
            sx={{ width: "100%", bgcolor: "background.paper" }}
            style={{ padding: 0 }}
          >
            {list.map((item, i) => {
              return (
                <ListItem button key={i} style={{ padding: "2px 5px" }}>
                  {/* <ListItemAvatar>
                    <Avatar>
                      <ImageIcon />
                    </Avatar>
                  </ListItemAvatar> */}
                  <ListItemText primary={item} secondary="Jan 9, 2014" />
                </ListItem>
              );
            })}
          </List>
        </OptionsModel>
      ) : null}
    </div>
  );
};

const NoBorderField = ({ children }) => {
  const classes = useNotBoderStyles();
  return <div className={classes.decorator}>{children}</div>;
};

const OptionsModel = ({ children }) => {
  return (
    <Box style={{ position: "absolute" }}>
      <Paper>
        <Card variant="outlined">{children}</Card>
      </Paper>
    </Box>
  );
};

const useNotBoderStyles = makeStyles(() => {
  return {
    decorator: {
      "& input": {
        padding: "10px 0px"
      },
      "& fieldset": {
        padding: 0,
        border: "none"
      }
    }
  };
});

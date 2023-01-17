import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { textAlign } from "@mui/system";

export default function DenseAppBar({ title, bg }) {
  return (
    <Box sx={{ flexGrow: 1, textAlign: "center" }}>
      <AppBar position="static">
        <Toolbar
          variant="dense"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Typography
            variant="h5"
            textAlign="center"
            color="inherit"
            component="div"
          >
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

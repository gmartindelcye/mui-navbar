import { useState } from "react";
import { PropTypes } from "prop-types";

import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

const DrawerNav = ({ links }) => {
  const [open, setOpen] = useState(false);
  console.log("Links:", links);

  return (
    <>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            width: 250,
            backgroundColor: "rgba(73,9,121,1)",
          },
        }}
      >
        <List>
          {links.map((link, index) => (
            <ListItemButton
              key={index}
              divider
              onClick={() => setOpen(false)}
            >
              <ListItemIcon>
                <ListItemText sx={{ color: "white" }}>{link}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        onClick={() => setOpen(!open)}
        sx={{ marginLeft: "auto", color: "white" }}
      >
        <MenuRoundedIcon />
      </IconButton>
    </>
  );
};
export default DrawerNav;

DrawerNav.propTypes = {
  links: PropTypes.array.isRequired,
};

DrawerNav.defaultProps = {
  links: [],
};

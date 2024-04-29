import { useState } from "react";
import { PropTypes } from "prop-types";
import {
  Grid,
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Box,
  Button,
  useMediaQuery,
} from "@mui/material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import DrawerNav from "./DrawerNav";
import { useTheme } from "@emotion/react";
export const GradientNavbar = ({ links = [] }) => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const [value, setValue] = useState();

  return (
    <AppBar
      sx={{
        backgroundImage:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(73,9,121,1) 36%, rgba(112,5,175,1) 73%, rgba(171,0,255,1) 100%)",
      }}
    >
      <Toolbar>
        {isMatch ? (
          <>
            <Typography>
              <ShoppingCartCheckoutIcon />
            </Typography>
            <DrawerNav links={links} />
          </>
        ) : (
          <Grid
            container
            sx={{ placeItems: "center" }}
          >
            <Grid
              item
              xs={2}
            >
              <Typography>
                <ShoppingCartCheckoutIcon />
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
            >
              <Tabs
                value={value}
                textColor="inherit"
                indicatorColor="secondary"
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              >
                {links.map((link, index) => (
                  <Tab
                    key={index}
                    label={link}
                  />
                ))}
              </Tabs>
            </Grid>
            <Grid
              item
              xs={1}
            />
            <Grid
              item
              xs={2}
            >
              <Box display="flex">
                <Button
                  variant="contained"
                  sx={{ marginLeft: "auto", background: "rgba(73,9,121,1)" }}
                >
                  Login
                </Button>
                <Button
                  variant="contained"
                  sx={{ marginLeft: 1, background: "rgba(73,9,121,1)" }}
                >
                  Register
                </Button>
              </Box>
            </Grid>
          </Grid>
        )}
      </Toolbar>
    </AppBar>
  );
};

GradientNavbar.propTypes = {
  links: PropTypes.array.isRequired,
};

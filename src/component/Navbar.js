import React, { useState } from "react";
import {
  AppBar,
  Button,
  Grid,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";
// import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import "../component/Navbar.css";
import DrawerComp from "./Drawer";
import Logo from "../As/boxlabs.png";

const Navbar = ({ links }) => {
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  console.log(isMatch);

  const [value, setValue] = useState();
  return (
    <AppBar
      sx={{
        backgroundImage:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,115,121,1) 35%, rgba(0,212,255,1) 100%);",
      }}
    >
      <Toolbar>
        {isMatch ? (
          <>
            {" "}
            <DrawerComp links={links} />
          </>
        ) : (
          <Grid
            sx={{
              alignItems: "center",
             
            }}
            container
          >
            <Grid item xs={5}>
              <Grid
                sx={{
                  
                  justifyContent: "center",
                  display: "flex",
                  alignItems: "center",
                  paddingLeft:"13rem"
                }}
                item
                xs={12}
              >
                <img className="logo" src={Logo} alt=""  />
                <p className="logo-name">BoxLabs</p>
              </Grid>
            </Grid>
            <Grid
              sx={{
                
                justifyContent: "start",
                display: "flex",
                alignItems: "center",
              }}
              item
              xs={7}
            >
              <Tabs
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, val) => setValue(val)}
              >
                {links.map((link, index) => (
                  <Tab key={index} label={link} />
                ))}
              </Tabs>
            </Grid>
          </Grid>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

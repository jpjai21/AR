import { Box, Grid, Typography } from "@mui/material";
import carSel from "../../assets/images/carSel.jpg";
import StorefrontTwoToneIcon from "@mui/icons-material/StorefrontTwoTone";
import React from "react";
import Title from "../../core/Title";
import SubTitle from "../../core/SubTitle";
import Center from "../../core/Center";
import useStyles from "./styles";
import Card from "../../core/Card";
import OutLineButton from "../../core/OutLineButton";
import BusinessIcon from "@mui/icons-material/Business";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { Link } from "react-router-dom";
import Facebook from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";

const Contact = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container className={classes.classes.center}>
        <Grid item md={4.5} sm={12} p={5}>
          {/* <Title title="" /> */}
          <SubTitle title="Get In Touch" />

          <Grid container py={4} spacing={2}>
            <Grid item sm={8}>
              <Box className={classes.classes.spaceBetween}>
                <Box className={classes.classes.spaceBetween}>
                  <BusinessIcon sx={{ mx: 1 }} />
                  <Typography
                    variant="h6"
                    color={"#000"}
                    sx={{ fontWeight: "700" }}
                  >
                    Plot No - 82, Patparganj Industrial Area, Near Anand Vihar,
                    Delhi, 110092.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item sm={8}>
              <Box className={classes.classes.spaceBetween}>
                <Box className={classes.classes.spaceBetween}>
                  <MailOutlineIcon sx={{ mx: 1 }} />
                  <Link
                    to="#"
                    onClick={(e) => {
                      window.location.href =
                        "mailto:Progressiveautosportsofficial@gmail.com";
                      e.preventDefault();
                    }}
                  >
                    <Typography
                      variant="h6"
                      color={"#000"}
                      sx={{ fontWeight: "700" }}
                    >
                      Progressiveautosportsofficial@gmail.com
                    </Typography>
                  </Link>
                </Box>
              </Box>
            </Grid>
            <Grid item sm={8}>
              <Box className={classes.classes.spaceBetween}>
                <Box className={classes.classes.spaceBetween}>
                  <LocalPhoneIcon sx={{ mx: 1 }} />
                  <Link
                    to="#"
                    onClick={(e) => {
                      window.location.href = "tel:+919871617270";
                      e.preventDefault();
                    }}
                  >
                    <Typography
                      variant="h6"
                      color={"#000"}
                      sx={{ fontWeight: "700" }}
                    >
                      +91 9871617270
                    </Typography>
                  </Link>
                </Box>
              </Box>
            </Grid>
            <Grid item md={8} sm={12}>
              <Box padding={1}>
                <Typography
                  variant="h3"
                  sx={{ fontWeight: "600", my: 3 }}
                  color={"#000"}
                >
                  Social Media
                </Typography>
                <Box
                  sx={{
                    justifyContent: "space-between",
                    display: "flex",
                    alignItems: "end",
                  }}
                >
                  <Box className={classes.classes.spaceBetween}>
                    <Facebook sx={{ color: "#000", fontSize: "35px", mx: 1 }} />
                    <Link
                      to="#"
                      onClick={(e) => {
                        window.location.href =
                          "https://www.facebook.com/progressiveautosports";
                        e.preventDefault();
                      }}
                    >
                      <Typography
                        variant="h6"
                        color={"#000"}
                        sx={{ fontWeight: "700" }}
                      >
                        @progressiveautosports
                      </Typography>
                    </Link>
                  </Box>
                  <Box className={classes.classes.spaceBetween}>
                    <Instagram
                      sx={{ color: "#000", fontSize: "35px", mx: 1 }}
                    />
                    <Link
                      to="#"
                      onClick={(e) => {
                        window.location.href =
                          "https://www.instagram.com/progressive.auto.sports/";
                        e.preventDefault();
                      }}
                    >
                      <Typography
                        variant="h6"
                        color={"#000"}
                        sx={{ fontWeight: "700" }}
                      >
                        @progressiveautosports
                      </Typography>
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
          {/* <OutLineButton text="Get To Sell"  /> */}
        </Grid>
        <Grid item sm={12} md={5.5}>
          <Center>
            <img
              src={
                "https://img.freepik.com/free-vector/organic-flat-customer-support-illustration_23-2148899134.jpg?w=996&t=st=1664649582~exp=1664650182~hmac=0320d0db7aafa2dd8f8b29dc2a8483eda7cb6661cb0fc86af8a3cccce0339691"
              }
              height={"450px"}
              style={{
                borderRadius: "20px",
                boxShadow:
                  "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
              }}
            />
          </Center>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default Contact;

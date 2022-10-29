import React from "react";
import Contact from "../As/contact.png";
import Identity from "../As/identity.png";
import Starting from "../As/starting.png";
import Mobile from "../As/mob.png";
import "../component/Portfolio.css";
import { Grid, Typography, Button } from "@mui/material"; 
import SendIcon from "@mui/icons-material/Send";

const Portfolio = () => {
  return (
    <>
      <Grid
        sx={{
          backgroundImage:
            "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,115,121,1) 35%, rgba(0,212,255,1) 100%);",
          paddingTop: "15rem",
        }}
        container
      >
        <Grid className="right" item xs={6}>
          {/* heading */}
          <Grid
            sx={{
              justifyContent: "end",
              display: "flex",
              alignItems: "center",
              padding: "10px",
            }}
            container
          >
            <Grid sx={{color:"white"}} item xs={8}>
              <div>
                <h1 className="header">
                  Build your Crypto Portfolio
                </h1>
                <p spacing={10} className="p-t1">
                  Start your first trade with these easy steps.
                </p>
              </div>
            </Grid>
          </Grid>

          {/* 1st icon */}

          <Grid
            sx={{
              justifyContent: "end",
              display: "flex",
              alignItems: "center",
              padding: "10px",
            }}
            container
            spacing={2}
          >
            <Grid item xs={2}>
              <div>
                <img className="contact-icon" src={Contact} alt="" />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div
                sx={{
                  justifyContent: "start",

                  display: "flex",
                  alignItems: "center",
                }}
              >
                <h1 className="h4">
                  Fund your account
                </h1>
              </div>
              <div
                sx={{
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <p  className="p-t2"  >
                  Add funds to your crypto account to start trading crypto. You
                  can add funds with a variety of payment methods.
                </p>
              </div>
            </Grid>
          </Grid>

          {/* 2nd Icon */}
          <Grid
            sx={{
              justifyContent: "end",
              display: "flex",
              alignItems: "center",
              padding: "10px",
            }}
            container
            spacing={2}
          >
            <Grid item xs={2}>
              <div>
                <img className="contact-icon" src={Identity} alt="" />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div
                sx={{
                  justifyContent: "start",

                  display: "flex",
                  alignItems: "center",
                }}
              >
                <h1 className="h4">

                  Verify your identity
                </h1>
              </div>
              <div
                sx={{
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <p className="p-t2" >
                  Complete the identity verification process to secure your
                  account and transactions.
                </p>
              </div>
            </Grid>
          </Grid>

          {/* 3rd Icon */}

          <Grid
            sx={{
              justifyContent: "end",
              display: "flex",
              alignItems: "center",
              padding: "10px",
            }}
            container
            spacing={2}
          >
            <Grid item xs={2}>
              <div>
                <img className="contact-icon" src={Starting} alt="" />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div
                sx={{
                  justifyContent: "start",

                  display: "flex",
                  alignItems: "center",
                }}
              >
                <h1 className="h4">
                  
                  Start trading
                </h1>
              </div>
              <div
                sx={{
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <p className="p-t2"  >
                  You're good to go! Buy/sell crypto, set up recurring buys for
                  your investments, and discover what Binance has to offer.
                </p >
              </div>
            </Grid>
          </Grid>
          {/* button */}
          <Grid
            sx={{
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
              padding: "30px",
              paddingLeft:"14rem"
            }}
            item
            xs={12}
            container
            spacing={2}
          >
            <div>
              <Button
                className="btn-sign"
                variant="contained"
                endIcon={<SendIcon />}
              >
                Sign-Up-Now
              </Button>
            </div>
          </Grid>
        </Grid>

        {/* mobile */}

        <Grid
          sx={{
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
          }}
          className="right"
          item
          xs={6}
        >
          <img className="img-mob" src={Mobile} alt="mobile-portfolio" />
        </Grid>
      </Grid>
    </>
  );
};

export default Portfolio;

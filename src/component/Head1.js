import React from "react";
import "./Head1.css";
import Crypto from "../As/hero-img.png";
import { Grid, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const Head1 = () => {
  return (
    <Grid sx={{ marginTop: "73px", backgroundColor: "#FAF7F0" }} container>
      {/* Left Side */}
      <Grid
        sx={{
          justifyContent: "end",
          display: "block",
          alignItems: "center",
        }}
        className="left"
        item
        xs={12}
      >
        <Grid container>
          <Grid
            sx={{
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
              paddingTop: "5rem",
            }}
            item
            xs={12}
          >
            <div>
              <h1 className="h1">The World’s Fastest Growing Crypto Market</h1>
            </div>
          </Grid>
        </Grid>
        <Grid container>
          <Grid
            sx={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
            item
            xs={12}
          >
            <div>
              <p className="p">
                Buy, Sell Bitcoin, Ethereum, Ripple, h4 and more
                cryptocurrencies in India. Start trading now! and hold 350+
                cryptocurrencies
              </p>
            </div>
          </Grid>
        </Grid>
        <Grid container>
          <Grid
            sx={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              paddingTop: "2rem",
            }}
            item
            xs={12}
          >
            <div>
              <Button className="btn-sign" variant="contained" endIcon={<SendIcon />}>
                Read-More
              </Button>
            </div>
          </Grid>
        </Grid>
      </Grid>

      {/* Right Side */}
      <Grid
        item
        xs={12}
        sx={{
          justifyContent: "Center",
          display: "flex",
          alignItems: "center",
          paddingTop: "5rem",
        }}
        className="right"
      >
        <div>
          <img className="img-container" src={Crypto} alt="" />
        </div>
      </Grid>
    </Grid>
  );
};

export default Head1;

import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "../component/Download.css";
import QR from "../As/download/QR.png";
import Apple from "../As/download/apple.png";
import Android from "../As/download/android.png";
import download from "../As/animation/phone1.webp"

const Download = () => {
  return (
    <Grid sx={{ paddingBottom: "4rem" }} container>
      <Grid item xs={2}></Grid>
      <Grid
        item
        xs={5}
        sx={{
          backgroundImage:
            "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,115,121,1) 35%, rgba(0,212,255,1) 100%)",
          borderRadius: "1rem 0rem 0rem 4rem",
        }}
      >
        <Grid
          item
          xs={12}
          sx={{
            justifyContent: "start",
            display: "flex",
            padding: "7px",
          }}
        >
          <Box>
            <Typography variant="h4" className="color-txt color-top">
              Try the future, today.
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            justifyContent: "start",
            display: "flex",
            padding: "4px",
          }}
        >
          <Box>
            <Typography variant="h4" className="color-txt">
              Download <span className="cryptopin">BoxLabs</span>
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            justifyContent: "start",
            display: "flex",
            padding: "4px",
          }}
        >
          <Box>
            <Typography className="color-txt">
              Stay on top of the markets with the BoxLabs app for Android or
              iOS. Trade with confidence on the world’s fastest and most secure
              crypto exchange.
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            justifyContent: "start",
            display: "flex",
            paddingTop: "2rem",
            paddingBottom: "2rem",
            paddingLeft: "3rem",
          }}
        >
          <Box>
            <img className="qr-code" src={QR} />
          </Box>
          <Box>
            <Typography
              variant="h6"
              className="qr-scan-text-download color-txt"
            >
              Scan to Download
            </Typography>
            <Typography variant="h6" className="qr-scan-text-phone color-txt">
              iOS & Android
            </Typography>
          </Box>
          <Box>
            <img className="apple-logo" src={Apple} />
          </Box>
          <Box>
            <img className="android-logo" src={Android} />
          </Box>
        </Grid>
      </Grid>

      {/* block-2 */}

      <Grid
        item
        xs={3}
        sx={{
          backgroundImage:
            "linear-gradient(90deg, rgba(0,212,255,1) 100%, rgba(9,115,121,1) 35%,rgba(2,0,36,1) 0% )",
          borderRadius: "0rem 4rem 1rem 0rem"
        }}
      >
        <Box sx={{paddingLeft:"10rem"}}>
          <img className="download" src={download} />
        </Box>
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  );
};

export default Download;

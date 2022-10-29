import React from "react";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Trade from "../As/trade.png";
import Productivity from "../As/Productivity.svg";
import Syn from "../As/syn.svg";
import "../component/Port.css";

const Port = () => {
  return (
    <>
      <Grid container  sx={{paddingTop:"10rem",backgroundImage:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,115,121,1) 35%, rgba(0,212,255,1) 100%);",}}>
        {/* left */}
        <Grid
          sx={{
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            paddingLeft:"7rem"
          }}
          item
          xs={6}
        >
          <Box>
            <img className="trade-img" src={Trade} alt="" />
          </Box>
        </Grid>
        {/* right */}
        <Grid  item xs={6}>
          <Grid container>
            <Grid
              sx={{
                justifyContent: "start",
                display: "flex",
                alignItems: "center",
                paddingTop: "5rem",
               
              }}
              item
              xs={12}
            >
              <Box>
                <Typography sx={{color:"white"}} variant="h2"> More Than You Think</Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={6}>
              <Box
                sx={{
                  justifyContent: "start",
                  alignItems: "center",
                  paddingTop: "1rem",
                  
                }}
              >
                <Typography sx={{color:"white"}} variant="subtitle1">
                  Add funds to your cryptocurrency account to start trading
                  cryptocurrencies. You can add funds using different payment
                  methods.
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={2}>
              <Box sx={{  display: "flex", paddingTop:"1rem" }}>
                <img className="pro-img" src={Productivity} alt="" />

                <Typography className="pro-txt"> Productivity</Typography>
              </Box>
            </Grid>

            <Grid item xs={2}>
              <Box sx={{  display: "flex",paddingTop:"1rem" }}>
                <img className="pro-img" src={Syn} alt="" />

                <Typography className="pro-txt"> Synchronize</Typography>
              </Box>
            </Grid>
          </Grid>

          <Grid  container>
            <Grid  item xs={3}>
              <Box sx={{  display: "flex",paddingTop:"1rem",color:"white" }}>
                <Typography>
                  Dramatically reintermediate effective applications after
                  high-payoff core competencies.
                </Typography>
              </Box>
            </Grid>
            <Grid  item xs={3}>
              <Box>
                <Typography sx={{  display: "flex",paddingTop:"1rem",color:"white" }}>
                  Dramatically reintermediate effective applications after
                  high-payoff core competencies.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Port;

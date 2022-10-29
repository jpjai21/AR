import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "../component/Safe.css";
import trade from "../As/trade/trade_decor.png";
import global from "../As/trade/global_decor.png";
import asset from "../As/trade/asset_decor.png";
import protect from "../As/trade/protect_decor.png";

const Safe = () => {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sx={{
          justifyContent: "start",
          alignItems: "center",
          display: "flex",
          paddingLeft: "20rem",
          
        }}
      >
        <Box>
          <Typography variant="h4">
            In BoxLabs, Trade With Safety and Convenience
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          justifyContent: "start",
          alignItems: "center",
          display: "flex",
          paddingLeft: "20rem",
        }}
      >
        <Box sx={{ paddingBottom: "2rem" }}>
          <Typography>
            Delivering crypto trading services to 200+ countries and regions
          </Typography>
        </Box>
      </Grid>
      {/* block-1 or block-2 */}
      <Grid
        item
        xs={12}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          paddingLeft: "0.1rem",
        }}
      >
        <Grid
          className="block-1"
          item
          xs={5}
          sx={{ padding: "1rem", display: "flex" }}
        >
          <Grid item xs={9}>
            <Box>
              <Typography
                variant="h5"
                sx={{
                  paddingTop: "5rem",
                  paddingLeft: "2rem",
                  color: "#2C3333",
                }}
              >
                Trade Crypto easily and simply
              </Typography>
              <Typography
                variant="h"
                sx={{ paddingLeft: "2rem", display: "flex", color: "#AAA492" }}
              >
                A one-stop blockchain asset platform with user-friendly features
                and convenient transactions.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box>
              <img className="trade_back" src={trade} />
            </Box>
          </Grid>
        </Grid>
        {/* block-2 */}
        <Grid
          className="block-2"
          item
          xs={3}
          sx={{
            paddingLeft: "1rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "2rem",
          }}
        >
          <Grid item xs={9}>
            <Box>
              <Typography variant="h5">
                Smooth crypto services based on user experience
              </Typography>
              <Typography sx={{color:"#AAA492"}} variant="h">
                The gateway to the crypto world for all, providing multilingual
                support for global traders.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box>
              <img className="global-img" src={global} />
            </Box>
          </Grid>
        </Grid>
      </Grid>

      {/* block-3 and block-4 */}
      <Grid item xs={12} sx={{ padding: "2rem",paddingBottom:"15rem" }}>
        {/* block-3 */}
        <Grid container spacing={1}>
          <Grid
            className="block-3"
            sx={{
             
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft:"17rem"
            }}
            item
            xs={5}
          >
            <Grid
              item
              xs={8}
              sx={{
               
                background: "#81C6E8",
                height: "14rem",
                borderRadius: "1rem 0rem 0rem 4rem",
              }}
            >
              <Box sx={{ paddingTop: "2rem", paddingLeft: "1rem" }}>
                <Typography variant="h5">
                  Secure and safeguarded with 0 incident
                </Typography>
              </Box>
              <Box sx={{ padding: "1rem", color: "white" }}>
                <Typography variant="h">
                  Full-dimensional security protection plus 100% reserve
                  guarantee, no incidents since establishment.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box
                sx={{
                  background: "#81C6E8",
                  borderRadius: "0rem 4rem 1rem 0rem",
                }}
              >
                <img className="asset" src={asset} />
              </Box>
            </Grid>
          </Grid>
          {/* block-4 */}
          <Grid sx={{ marginLeft:"2rem",height:"14rem" }} item xs={5}>
            <Grid  container>
              <Grid sx={{ background:"#d9e6ea", borderRadius: "1rem 0rem 0rem 4rem"}} item xs={4}>
                <Box sx={{paddingTop: "2rem", paddingLeft: "1rem"}}>
                  <Typography>One step ahead in financial options</Typography>
                </Box>
                <Box sx={{paddingTop: "1rem", paddingLeft: "1rem",color:"#9E7676"}}>
                  <Typography>Dock, AMM, Financial Account, Pledging... There is always a service just for you.</Typography>
                </Box>
              </Grid>
              <Grid sx={{ background:"#d9e6ea", borderRadius: "0rem 4rem 1rem 0rem",height:"14rem" }} item xs={4}>
                <img className="protect" src={protect} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Safe;

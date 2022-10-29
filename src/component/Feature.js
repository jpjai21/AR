import React, { useState, useEffect } from "react";
import axios from "axios";
// import BTC from '../assets/btc-img.png'

import "./Feature.css";
import { Grid, Typography, Button } from "@mui/material";
import { border, Box } from "@mui/system";
import SendIcon from "@mui/icons-material/Send";

const Featured = () => {
  const [data, setData] = useState(null);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // console.log(data)

  if (!data) return null;

  return (
    <Grid container className="container , featured">
      {/* Left */}
      <Grid
        sx={{
          justifyContent: "Center",
          display: "flex",
          alignItems: "center",
          paddingLeft: "21rem",
        }}
        item
        xs={6}
      >
        <Box className="left">
          <Typography variant="h4">
            SECURELY BUY, SELL, STORE, SEND and TRACK
          </Typography>
          <Typography>
            Buy and sell 250+ cryptocurrencies with 20+ fiat currencies using
            bank transfers or your credit/debit card.
          </Typography>
          <Button
            className="btn-sign"
            variant="contained"
            endIcon={<SendIcon />}
          >
            More
          </Button>
        </Box>
      </Grid>

      {/* Right */}

      <Grid item xs={6} className="right">
        <Grid container>
          <Grid
            sx={{
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
              paddingRight: "10rem",
            }}
            item
            xs={12}
          >
            <Box className="card">
              <Box className="top">
                {/* <img src={BTC} alt='/' /> */}
                <img src={data[0].image} alt="" />
              </Box>
              <Box>
                <Typography>{data[0].name}</Typography>
                <Typography>
                  ${data[0].current_price.toLocaleString()}
                </Typography>
              </Box>

              {data[0].price_change_percentage_24h < 0 ? (
                <Typography className="red">
                  {data[0].price_change_percentage_24h.toFixed(2)}%
                </Typography>
              ) : (
                <Typography className="green">
                  {data[0].price_change_percentage_24h.toFixed(2)}%
                </Typography>
              )}
            </Box>
            <Box className="card">
              <Box className="top">
                <img src={data[1].image} alt="" />
              </Box>
              <Box>
                <Typography>{data[1].name}</Typography>
                <Typography>
                  ${data[1].current_price.toLocaleString()}
                </Typography>
              </Box>

              {data[1].price_change_percentage_24h < 0 ? (
                <Typography className="red">
                  {data[1].price_change_percentage_24h.toFixed(2)}%
                </Typography>
              ) : (
                <Typography className="green">
                  {data[1].price_change_percentage_24h.toFixed(2)}%
                </Typography>
              )}
            </Box>
            <Box className="card">
              <Box className="top">
                <img src={data[2].image} alt="" />
              </Box>
              <Box>
                <Typography>{data[2].name}</Typography>
                <Typography>
                  ${data[2].current_price.toLocaleString()}
                </Typography>
              </Box>

              {data[2].price_change_percentage_24h < 0 ? (
                <Typography className="red">
                  {data[2].price_change_percentage_24h.toFixed(2)}%
                </Typography>
              ) : (
                <Typography className="green">
                  {data[2].price_change_percentage_24h.toFixed(2)}%
                </Typography>
              )}
            </Box>
          </Grid>
        </Grid>
        <Grid container>
          <Grid
            sx={{
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
              paddingRight: "10rem",
            }}
            item
            xs={12}
          >
            <Box className="card">
              <Box className="top">
                <img src={data[3].image} alt="" />
              </Box>
              <Box>
                <Typography>{data[3].name}</Typography>
                <Typography>
                  ${data[3].current_price.toLocaleString()}
                </Typography>
              </Box>

              {data[3].price_change_percentage_24h < 0 ? (
                <Typography className="red">
                  {data[3].price_change_percentage_24h.toFixed(2)}%
                </Typography>
              ) : (
                <Typography className="green">
                  {data[3].price_change_percentage_24h.toFixed(2)}%
                </Typography>
              )}
            </Box>
            <Box className="card">
              <Box className="top">
                <img src={data[4].image} alt="" />
              </Box>
              <Box>
                <Typography>{data[4].name}</Typography>
                <Typography>
                  ${data[4].current_price.toLocaleString()}
                </Typography>
              </Box>

              {data[0].price_change_percentage_24h < 0 ? (
                <Typography className="red">
                  {data[4].price_change_percentage_24h.toFixed(2)}%
                </Typography>
              ) : (
                <Typography className="green">
                  {data[4].price_change_percentage_24h.toFixed(2)}%
                </Typography>
              )}
            </Box>
            <Box className="card">
              <Box className="top">
                <img src={data[5].image} alt="" />
              </Box>
              <Box>
                <Typography>{data[5].name}</Typography>
                <Typography>
                  ${data[5].current_price.toLocaleString()}
                </Typography>
              </Box>

              {data[5].price_change_percentage_24h < 0 ? (
                <Typography className="red">
                  {data[5].price_change_percentage_24h.toFixed(2)}%
                </Typography>
              ) : (
                <Typography className="green">
                  {data[5].price_change_percentage_24h.toFixed(2)}%
                </Typography>
              )}
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Featured;

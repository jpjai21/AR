import React from "react";
import { Grid, Typography } from "@mui/material";
// import foot from "../As/foot.png";
import "../component/Footer.css";
import { Box } from "@mui/system";
import Logo from "../As/boxlabs.png";
// import googlePlay from "../As/google-play.svg";
// import apple from "../As/apple.svg";
// import window from "../As/windos.svg";
import EmailIcon from "@mui/icons-material/Email";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <Grid
      sx={{
        backgroundImage:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,115,121,1) 35%, rgba(0,212,255,1) 100%);",
        display: "block",
        color: "white",
        display: "flex",
        height: "25rem",
      }}
      container
    >

      <Grid
        sx={{
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          paddingTop:" 7rem",
          paddingRight:"2rem"
        }}
        item
        xs={4}
      >
        <Box>
          <Box sx={{ paddingBottom: "2rem" }}>
            <img className="logo" src={Logo} alt="" />
          </Box>
          <Box sx={{ paddingBottom: "1rem" }}>
            <Typography> Making Crypto Trading Easier</Typography>
          </Box>
          <Box sx={{ paddingBottom: "1rem", display: "flex" }}>
            <EmailIcon />
            <TelegramIcon />
            <TwitterIcon />
            <FacebookIcon />
            <YouTubeIcon />
          </Box>
          <Box sx={{ paddingBottom: "1rem" }}>
            <Typography>
              © 2017-2022 CoinEx.com. All rights reserved.
            </Typography>
          </Box>
        </Box>
      </Grid>

      {/* right */}

      <Grid sx={{  display: "flex" }} item xs={6}>
        {/* first */}
        <Grid item xs={4}>
          <Grid sx={{ paddingTop:"9rem",paddingLeft:"2rem",paddingBottom:"1rem" }} item xs={12}>
            <Box>
              <Typography variant="h5"> About</Typography>
            </Box>
          </Grid>
          <Grid sx={{ paddingTop:"5px",paddingBottom:"10px",paddingLeft:"2rem" }} item xs={12}>
            <Box>
              <a className="a-tag" href="/aboutus">
                About us
              </a>
            </Box>
          </Grid>
          <Grid sx={{ paddingTop:"5px",paddingBottom:"10px",paddingLeft:"2rem" }} item xs={12}>
            <Box>
            <a className="a-tag" href="/aboutus/contact">
                Contact us
              </a>
            </Box>
          </Grid>
          <Grid sx={{ paddingTop:"5px",paddingBottom:"10px",paddingLeft:"2rem" }} item xs={12}>
            <Box>
            <a className="a-tag" href="/careers">
                Join us
              </a>
            </Box>
          </Grid>
          <Grid sx={{ paddingTop:"5px",paddingBottom:"10px",paddingLeft:"2rem" }} item xs={12}>
            <Box>
            <a className="a-tag" href="/token">
                About CET
              </a>
            </Box>
          </Grid>
          <Grid sx={{ paddingTop:"5px",paddingBottom:"10px",paddingLeft:"2rem" }} item xs={12}>
            <Box>
            <a className="a-tag" href="/blog">
                Blog
              </a>
            </Box>
          </Grid>
        </Grid>
        {/* second */}
        <Grid sx={{  }} item xs={4}>
          <Grid sx={{ paddingTop:"9rem",paddingBottom:"1rem" }} item xs={12}>
            <Box>
              <Typography variant="h5"> Services</Typography>
            </Box>
          </Grid>
          <Grid sx={{ addingTop:"5px",paddingBottom:"10px" }} item xs={12}>
            <Box>
            <a className="a-tag" href="/apply/create"> Apply for Token Listing</a>
            </Box>
          </Grid>
          <Grid  sx={{ paddingTop:"5px",paddingBottom:"10px" }} item xs={12}>
            <Box>
            <a className="a-tag" href="/market-maker"> Market Makers</a>
            </Box>
          </Grid>
          <Grid sx={{ paddingTop:"5px",paddingBottom:"10px" }} item xs={12}>
            <Box>
            <a className="a-tag" href="/ambassador"> BoxLabs Ambassador</a>
            </Box>
          </Grid>
          <Grid sx={{ paddingTop:"5px",paddingBottom:"10px" }} item xs={12}>
            <Box>
            <a className="a-tag" href="/partner">BoxLabs Partner</a>
            </Box>
          </Grid>
          
        </Grid>
        {/* third */}
        <Grid sx={{  }} item xs={4}>
          <Grid sx={{ paddingTop:"9rem",paddingBottom:"1rem" }} item xs={12}>
            <Box>
              <Typography variant="h5"> Contact Us</Typography>
            </Box>
          </Grid>
          <Grid sx={{ addingTop:"5px",paddingBottom:"10px" }} item xs={12}>
            <Box>
              <a className="a-tag" href="/aboutus">
                Help Center
              </a>
            </Box>
          </Grid>
          <Grid sx={{ paddingTop:"5px",paddingBottom:"10px" }} item xs={12}>
            <Box>
            <a className="a-tag" href="/aboutus/contact">
                Contact Support
              </a>
            </Box>
          </Grid>
          <Grid sx={{ paddingTop:"5px",paddingBottom:"10px" }} item xs={12}>
            <Box>
            <a className="a-tag" href="/careers">
                Email Support
              </a>
            </Box>
          </Grid>
          <Grid sx={{ paddingTop:"5px",paddingBottom:"10px" }} item xs={12}>
            <Box>
            
            </Box>
          </Grid>
          
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;

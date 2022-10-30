import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Banner = () => {
  return (
    <Box
      sx={{
        height: { lg: "100vh", md: "100vh", sm: "100%", xs: "100%" },
      }}
    >
      <Grid container sx={{ height: "100vh" }}>
        <Grid
          item
          md={6}
          sm={12}
          xs={12}
          sx={{
            backgroundImage: `url("https://img.freepik.com/free-vector/social-ideas-concept-illustration_114360-4654.jpg?w=740&t=st=1667145435~exp=1667146035~hmac=b9d96a122964b9358b372583200222de0f7aea6ae369560c10da68a4abada82f")`,
            backgroundSize: "cover",
            height: { md: "100%", xs: "50%" },
            display: { md: "none", sm: "block", xs: "block" },
          }}
        ></Grid>
        <Grid
          item
          md={6}
          sm={12}
          xs={12}
          sx={{ height: { md: "100vh", sm: "auto", xs: "auto" } }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Box p={{ md: 10, sm: 2, xs: 2 }}>
              <Typography
                variant="h2"
                gutterBottom
                sx={{ fontSize: { md: "50px", sm: "30px", xs: "20px" } }}
              >
                Hello Tesing
              </Typography>
              <Typography gutterBottom>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </Typography>
              <Box py={1} sx={{justifyContent:"space-between",alignItems:"center",display:"flex" }}>
                <Box >
                  <FacebookIcon  sx={{ color: "#FFC901",fontSize: 40,m:1 }} />
                  <LinkedInIcon sx={{ color: "#FFC901",fontSize: 40,m:1 }}/>
                  <InstagramIcon sx={{ color: "#FFC901",fontSize: 40,m:1 }}/>
                  <TwitterIcon sx={{ color: "#FFC901",fontSize: 40,m:1 }}/>
                </Box>
              </Box>
              <Box py={2}>
                <Button variant="contained" sx={{ width: "40%" }}>
                  Submit
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          md={6}
          sm={12}
          xs={12}
          sx={{
            backgroundImage: `url("https://img.freepik.com/free-vector/social-ideas-concept-illustration_114360-4654.jpg?w=740&t=st=1667145435~exp=1667146035~hmac=b9d96a122964b9358b372583200222de0f7aea6ae369560c10da68a4abada82f")`,
            backgroundSize: "cover",
            height: { md: "100%", xs: "50%" },
            display: { md: "block", sm: "none", xs: "none" },
          }}
        ></Grid>
      </Grid>
    </Box>
  );
};

export default Banner;

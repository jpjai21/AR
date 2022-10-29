import React from "react";
import Feature from "./component/Feature";
import Navbar from "./component/Navbar";
import Portfolio from "./component/Portfolio";
import Head1 from "./component/Head1";
import Port from "./component/Port";

import { Box } from "@mui/material";
import Footer from "./component/Footer";
import Download from "./component/Download";
import Safe from "./component/Safe";
// import Contact from "./component/Card";

const linksArrey = ["Home", "Development", "Trade", "Service", "Contact-us"];
function App() {
  return (
    <Box>
      <Navbar links={linksArrey} />

      <Head1 />
      <Portfolio />
      <Port />
      <Feature />
      <Safe/>
      <Download/>
      <Footer/> 
      
      {/* <Contact/> */}
    </Box>
  );
}

export default App;

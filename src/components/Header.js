import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import LogoImg from "../assets/logo.png";

const Header = () => {
  return (
    <AppBar sx={{ backgroundColor: "white" }}>
      <Toolbar sx={{ gap: 2, color: "black" }}>
        <img src={LogoImg} height="auto" width={"100px"} />
        <a href="#about_us" style={{ textDecoration: "none", color: "black" }}>
          <Typography>About Us</Typography>
        </a>
        <a
          href={`mailto:info@orbisdentalcare.com`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <Typography>Contact Us</Typography>
        </a>
        <a
          href="#our_service"
          style={{ textDecoration: "none", color: "black" }}
        >
          <Typography>Our Services</Typography>
        </a>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

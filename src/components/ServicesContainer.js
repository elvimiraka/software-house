import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import WebProgramming from "../assets/web-programming.png";
import Website from "../assets/website.png";
import Device from "../assets/device.png";
import Chrome from "../assets/chrome.png";
import Automation from "../assets/automation.png";

const ServicesContainer = () => {
  return (
    <div
      id="our_service"
      style={{
        marginTop: "50px",
        padding: "20px 40px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <Typography variant="subtitle1" fontWeight={600} color="green">
        Our Services
      </Typography>
      <Typography variant="body1" sx={{ maxWidth: 800 }}>
        At Software House, we specialize in transforming your innovative ideas
        into reality through our comprehensive range of software development
        services. Our experienced team is dedicated to delivering high-quality,
        custom solutions tailored to your specific needs.
      </Typography>
      <Stack direction="row" justifyContent="space-between" marginTop={4}>
        <ServiceContaniner>
          <img src={WebProgramming} height="64" width={"64"} />
          <Typography>Web Development</Typography>
        </ServiceContaniner>
        <ServiceContaniner>
          <img src={Website} height="64" width={"64"} />
          <Typography>Web Design</Typography>
        </ServiceContaniner>
        <ServiceContaniner>
          <img src={Chrome} height="64" width={"64"} />
          <Typography>Mobile App Development</Typography>
        </ServiceContaniner>
        <ServiceContaniner>
          <img src={Automation} height="64" width={"64"} />
          <Typography>Automationt</Typography>
        </ServiceContaniner>
        <ServiceContaniner>
          <img src={Device} height="64" width={"64"} />
          <Typography>Device Optimization</Typography>
        </ServiceContaniner>
      </Stack>
    </div>
  );
};

const ServiceContaniner = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
        opacity: 0.7,
        ":hover": { opacity: 1 },
      }}
    >
      {children}
    </Box>
  );
};

export default ServicesContainer;

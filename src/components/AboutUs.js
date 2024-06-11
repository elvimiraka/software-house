import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import CodingImg from "../assets/coding-team.jpg";

const AboutUs = () => {
  return (
    <div
      id="about_us"
      style={{
        marginTop: "50px",
        padding: "20px 40px",
      }}
    >
      <Typography variant="subtitle1" fontWeight={600} color="green">
        About Us
      </Typography>
      <Grid container justifyContent="space-between">
        <Grid item xs={12} md={6} paddingRight={2}>
          <Stack gap={1}>
            <Typography>
              Welcome to Software House, where innovation meets expertise. We
              are a passionate team of software developers, designers, and tech
              enthusiasts dedicated to crafting custom software solutions that
              drive success. With a commitment to excellence and a focus on your
              unique needs, we turn complex challenges into seamless,
              user-friendly experiences. Our mission is to empower businesses
              with cutting-edge technology, ensuring they stay ahead in the
              digital age. Partner with us to bring your vision to life, one
              line of code at a time.
            </Typography>
            <Typography>You will get the best expertise in</Typography>
            <Typography>
              Custom Software Development We design and build bespoke software
              applications that align perfectly with your business goals,
              ensuring efficiency and scalability.
            </Typography>
            <Typography>
              Web and Mobile App Development Our experts craft responsive and
              intuitive web and mobile applications, providing seamless user
              experiences across all devices.
            </Typography>
            <Typography>
              System Integration We integrate diverse systems and technologies
              to streamline your operations, improve data flow, and enhance
              overall productivity.
            </Typography>
            <Typography>
              Maintenance and Support Our dedicated support team provides
              ongoing maintenance and technical assistance to ensure your
              software remains up-to-date and runs smoothly.
            </Typography>
            <Typography>
              Consulting Services Leverage our expertise to optimize your
              software strategy. We offer professional consulting to help you
              make informed technology decisions and drive business growth
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={CodingImg} height="auto" width={"100%"} />
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutUs;

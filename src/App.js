import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Header from "./components/Header";
import OfficeImg from "./assets/office.jpg";
import RedditImg from "./assets/reddit.png";
import ProductHuntImg from "./assets/productHunt.png";
import TechCrunchImg from "./assets/techCrunch.png";
import ServicesContainer from "./components/ServicesContainer";
import AboutUs from "./components/AboutUs";
import EmailIcon from "@mui/icons-material/Email";

function App() {
  return (
    <div>
      <Header />
      <Grid container justifyContent="space-between" marginTop={"100px"}>
        <Grid item xs={12} md={6}>
          <img src={OfficeImg} height="auto" width={"100%"} />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          paddingX={4}
          justifyContent="center"
          alignItems="center"
          display="flex"
        >
          <Card variant="outlined" sx={{ border: "none" }}>
            <CardContent>
              <Typography variant="subtitle1" fontWeight={600} color="green">
                Web Design & Development
              </Typography>
            </CardContent>
            <CardHeader
              title={"Empowering Your Vision, One Line of Code at a Time!"}
              titleTypographyProps={{ variant: "h3", fontWeight: 600 }}
            />
            <CardContent>
              <Typography variant="caption">
                Our Dev Team is a dynamic collective of tech enthusiasts and
                problem solvers dedicated to crafting innovative solutions
                tailored to your unique needs. With a passion for cutting-edge
                technologies and a commitment to excellence, we collaborate
                seamlessly to bring your ideas to life, ensuring every line of
                code reflects our pursuit of perfection.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "black",
                  ":hover": { backgroundColor: "#2e2e2e" },
                }}
                startIcon={<EmailIcon />}
                href={"mailto:info@example.com"}
              >
                Contact Us
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <div style={{ marginTop: "50px", padding: "0 40px" }}>
        <Typography variant="subtitle1" fontWeight={600} color="green">
          Featured on
        </Typography>
        <Stack
          direction="row"
          alignItems="start"
          gap={2}
          flexWrap="wrap"
          justifyContent="center"
        >
          <img src={ProductHuntImg} height="150" width={"250"} />
          <img src={TechCrunchImg} height="150" width={"250"} />
          <img src={RedditImg} height="100" width={"250"} />
        </Stack>
      </div>
      <ServicesContainer />
      <AboutUs />
    </div>
  );
}

export default App;

import { FC } from "react";
import constants from "@/constants";
import { Box } from "@mui/material";
import Container from "@/components/Containers";
import HeroSection from "@/components/Home/HeroSection";
import Features from "@/components/Home/Features";
import Pricing from "@/components/Home/Pricing";
import withGuest from "@/hoc/withGuest";

const Home: FC = () => {
  return (
    <Box
      component="div"
      sx={{
        padding: {
          xs: `${constants.appbar + 40}px 0px`,
          md: `${constants.appbar + 40}px 0px 40px 0px`,
        },
      }}
    >
      <Container>
        <HeroSection />
        <Features />
        <Pricing />
      </Container>
    </Box>
  );
};

export default withGuest(Home);

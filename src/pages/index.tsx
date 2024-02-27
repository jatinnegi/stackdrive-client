import { Box } from "@mui/material";
import Container from "@/components/Containers";
import HeroSection from "@/components/Home/HeroSection";
import Features from "@/components/Home/Features";
import constants from "@/constants";

export default function Home() {
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
      </Container>
    </Box>
  );
}

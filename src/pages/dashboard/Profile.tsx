import { FC } from "react";
import { Box, Typography } from "@mui/material";
import Container from "@/components/Containers";
import ProfileImage from "@/components/Profile/ProfileImage";
import MainSection from "@/components/Profile/MainSection";
import Usage from "@/components/Profile/Usage";

const Profile: FC = () => {
  return (
    <Container>
      <Typography
        sx={{
          fontSize: {
            xs: "16px",
            md: "18px",
            lg: "20px",
            xl: "24px",
          },
          fontWeight: 300,
          bgcolor: "background.default",
          zIndex: 2,
          position: "sticky",
          top: "70px",
          pb: 1,
        }}
      >
        Avery Langef
      </Typography>
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          alignItems: "flex-start",
          gap: "10px",
          my: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            width: { xs: "100%", md: "450px" },
          }}
        >
          <ProfileImage />
          <Box
            component="div"
            sx={{
              opacity: {
                xs: 0,
                md: 1,
              },
              position: { xs: "absolute", md: "static" },
              pointerEvents: { xs: "none", md: "all" },
            }}
          >
            <Usage />
          </Box>
        </Box>
        <MainSection />
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            flexDirection: "column",
            gap: "10px",
            width: { xs: "100%", md: "450px" },
          }}
        >
          <Usage />
        </Box>
      </Box>
    </Container>
  );
};

export default Profile;

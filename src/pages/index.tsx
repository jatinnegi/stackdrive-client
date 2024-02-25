import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "@/redux/reducers";
import { Box, Button, Typography } from "@mui/material";
import Container from "@/components/Containers";
import constants from "@/constants";
import DesktopLight from "../../public/assets/desktop_light.png";
import DesktopDark from "../../public/assets/desktop_dark.png";
import MobileLight from "../../public/assets/mobile_light.png";
import MobileDark from "../../public/assets/mobile_dark.png";

export default function Home() {
  const navigate = useNavigate();
  const theme = useSelector((state: RootState) => state.settings.theme);

  const boxShadow =
    theme === "light" ? "0px 0px 10px #F0F0F0" : "0px 0px 10px #0f1217";

  return (
    <Box
      component="div"
      sx={{ padding: `${constants.appbar + 40}px 0px 280px 0px` }}
    >
      <Container>
        <Box
          component="div"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Box
            component="div"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              width: {
                xs: "100%",
                md: "50%",
              },
            }}
          >
            <Typography
              sx={{
                textAlign: { xs: "center", md: "left" },
                fontSize: {
                  xs: "32px",
                  sm: "48px",
                  md: "64px",
                },
                lineHeight: { xs: "2.2rem", sm: "3rem", md: "4.3rem" },
                fontWeight: 700,
                background:
                  theme === "light"
                    ? "linear-gradient(to right bottom, #1F1F1f, #5f5f5f)"
                    : "linear-gradient(to right bottom, #fff 30%, hsla(0, 0%, 100%, .38))",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              StackDrive is the easy way to stay organized
            </Typography>
            <Typography
              sx={{
                textAlign: { xs: "center", md: "left" },
                margin: {
                  xs: "20px 0px 25px 0px",
                  md: "30px 0px 40px 0px",
                },
                fontSize: {
                  xs: "18px",
                  md: "24px",
                },
                lineHeight: {
                  xs: "1.8rem",
                  md: "2rem",
                },
              }}
            >
              Say goodbye to local storage limitations with our cloud platform.
              Your files are always safe & secure. Join now to make cloud
              storage experience seamless.
            </Typography>
            <Button
              sx={{
                textTransform: "capitalize",
                py: 1,
                px: 2,
                borderRadius: "30px",
                background:
                  "linear-gradient(92.88deg, #4583b5 9.16%, #4570b5 43.89%, #4567b5 64.72%)",
                color: "#FFFFFF",
              }}
              onClick={() => {
                navigate("/auth/login");
              }}
            >
              Get Started
            </Button>
          </Box>
          <Box
            component="div"
            sx={{
              display: { xs: "none", md: "block" },
              position: "relative",
              width: "31%",
            }}
          >
            <Box
              component="div"
              sx={{
                position: "absolute",
                background: `url("${
                  theme === "light" ? DesktopLight : DesktopDark
                }") no-repeat center center/cover`,
                height: "475px",
                width: "1085px",
                border:
                  theme === "light"
                    ? "1px solid hsla(0, 0%, 84%, 0.4)"
                    : "1px solid hsla(0, 0%, 84%, 0.08)",
                borderRadius: "10px",
                boxShadow,
              }}
            />
            <Box
              component="div"
              sx={{
                position: "absolute",
                background: `url("${
                  theme === "light" ? MobileLight : MobileDark
                }") no-repeat center center/cover`,
                height: "410px",
                width: "235px",
                left: -110,
                top: 210,
                border:
                  theme === "light"
                    ? "1px solid hsla(0, 0%, 84%, 0.4)"
                    : "1px solid hsla(0, 0%, 84%, 0.08)",
                borderRadius: "10px",
                boxShadow,
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

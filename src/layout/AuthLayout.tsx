import { useEffect, useMemo, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/reducers";
import { useResize } from "@/hooks";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { lightTheme, darkTheme } from "@/theme";
import constants from "@/constants";
import OverlayImg from "../../public/assets/overlay_2.jpg";
import IllustrationImg from "../../public/assets/illustration.png";

export default function AuthLayout() {
  const { width: viewportWidth } = useResize();
  const [illustrationWidth, setIllustrationWidth] = useState<string>("60%");
  const authContentRef = useRef<HTMLDivElement | null>(null);

  const { theme } = useSelector((state: RootState) => state.settings);

  const illustrationBackground =
    theme === "dark"
      ? `linear-gradient(rgba(22, 28, 36, 0.94), rgba(22, 28, 36, 0.94)) center center / cover no-repeat, url(${OverlayImg}) no-repeat top center/cover`
      : `linear-gradient(rgba(255, 255, 255, 0.88), rgba(255, 255, 255, 0.88)) center center / cover no-repeat, url("${IllustrationImg}") no-repeat top center/cover`;

  const boxShadow = useMemo(() => {
    if (theme === "dark") {
      if (darkTheme.palette.boxShadow?.primary) {
        return `-10px 0px 200px ${darkTheme.palette.boxShadow?.primary}`;
      }
      return "none";
    }

    if (lightTheme.palette.boxShadow?.primary) {
      return `-10px 0px 200px ${lightTheme.palette.boxShadow?.primary}`;
    }
    return "none";
  }, [theme]);

  useEffect(() => {
    if (!authContentRef.current) {
      return;
    }

    setIllustrationWidth(
      `calc(100% - ${authContentRef.current.clientWidth}px)`
    );
  }, [viewportWidth]);

  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <Box
        component="div"
        sx={{
          background: illustrationBackground,
          display: {
            xs: "none",
            lg: "flex",
          },
          alignItems: "center",
          justifyContent: "center",
          position: "fixed",
          left: 0,
          top: 0,
          width: illustrationWidth,
          height: "100vh",
          zIndex: -1,
          img: {
            width: {
              lg: "65%",
              xl: "45%",
            },
          },
        }}
      >
        <img src={IllustrationImg} alt="illustration" />
      </Box>
      <Box
        ref={authContentRef}
        component="div"
        sx={{
          bgcolor: "background.default",
          boxShadow,
          minHeight: "100svh",
          width: {
            xs: "100%",
            lg: "40%",
          },
          maxWidth: {
            xs: "none",
            lg: "450px",
          },
          padding: {
            xs: `${constants.appbar - 20}px 0px`,
            lg: `${constants.appbar - 15}px 0px`,
          },
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}

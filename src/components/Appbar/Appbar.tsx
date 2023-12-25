import { useMemo } from "react";
import { RootState } from "@/redux/reducers";
import { useSelector } from "react-redux";
import { Box, IconButton, styled } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import ProfileIcon from "./ProfileIcon";
import Hamburger from "@/components/Hamburger";

export default function Appbar() {
  const { layout } = useSelector((state: RootState) => state.settings);

  const ResponsiveBox = useMemo(
    () =>
      styled(Box)(({ theme }) => ({
        width: "100%",
        left: "0px",
        [theme.breakpoints.up("lg")]: {
          left: layout === "full" ? "261px" : "86px",
          width: `calc(100% - ${layout === "full" ? "261px" : "86px"})`,
        },
      })),
    [layout]
  );

  return (
    <ResponsiveBox
      component="nav"
      sx={{
        position: "fixed",
        top: "0px",
        height: "70px",
        display: "flex",
        alignItems: "center",
        backgroundColor: "background.default",
        zIndex: 10,
      }}
    >
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "80%",
          width: "97%",
          margin: "0px auto",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", height: "100%" }}>
          <Hamburger />
          <IconButton
            sx={{
              padding: {
                xs: "7px",
                sm: "9px",
              },
              height: {
                xs: "34px",
                sm: "38px",
                md: "42px",
              },
              width: {
                xs: "34px",
                sm: "38px",
                md: "42px",
              },
            }}
          >
            <SearchIcon
              sx={{ color: "text.secondary", height: "100%", width: "100%" }}
            />
          </IconButton>
        </Box>
        <Box
          component="div"
          sx={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            gap: { xs: "2px", sm: "5px", md: "10px" },
          }}
        >
          <ProfileIcon />
        </Box>
      </Box>
    </ResponsiveBox>
  );
}

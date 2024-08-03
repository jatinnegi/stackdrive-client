import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/reducers";
import { Box, IconButton } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import Hamburger from "@/components/Hamburger";
import ProfileIcon from "./ProfileIcon";
import constants from "@/constants";

export const DashboardAppbar: FC = () => {
  const { layout } = useSelector((state: RootState) => state.settings);

  return (
    <Box
      component="nav"
      sx={{
        position: "fixed",
        top: "0px",
        height: constants.dashboardAppbar,
        display: "flex",
        alignItems: "center",
        backgroundColor: "background.default",
        zIndex: 10,
        width: {
          xs: "100%",
          lg:
            layout === "full"
              ? `calc(100% - ${constants.sidebar.full + 1}px)`
              : `calc(100% - ${constants.sidebar.collapse + 1}px)`,
        },
        left: {
          xs: "0px",
          lg:
            layout === "full"
              ? `${constants.sidebar.full + 1}px`
              : `${constants.sidebar.collapse + 1}px`,
        },
      }}
      style={{
        transition: "left 75ms ease-out, width 75ms ease-out",
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
    </Box>
  );
};

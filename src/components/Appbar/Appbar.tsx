import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateSettings } from "@/redux/actions";
import { RootState } from "@/redux/reducers";
import { Box, IconButton, MenuItem, MenuList, Typography } from "@mui/material";
import {
  DarkMode as DarkModeIcon,
  LightMode as LightModeIcon,
  Login as LoginIcon,
} from "@mui/icons-material";
import Container from "@/components/Containers";
import constants from "@/constants";
import StackDriveLogo from "../../../public/stack-drive-new-logo.svg";

export const Appbar: FC = () => {
  const navigate = useNavigate();
  const { theme } = useSelector((state: RootState) => state.settings);
  const dispatch = useDispatch();

  return (
    <Box
      component="nav"
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: constants.appbar,
        backdropFilter: "blur(24px)",
        zIndex: 50,
      }}
    >
      <Container>
        <Box
          component="div"
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottomWidth: "1px",
            borderBottomStyle: "solid",
            borderBottomColor:
              theme === "dark"
                ? "hsla(0, 0%, 84%, 0.08)"
                : "hsla(0, 0%, 84%, 0.4)",
          }}
        >
          <Box component="div">
            <Link
              to="/"
              onClick={() => {}}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                cursor: "pointer",
                color: "inherit",
                margin: "0px auto",
                userSelect: "none",
                textDecoration: "none",
              }}
            >
              <img
                src={StackDriveLogo}
                alt="stackdrive"
                style={{ height: "26px", width: "26px" }}
              />
              <Typography
                sx={{
                  display: {
                    xs: "none",
                    md: "block",
                  },
                  marginLeft: "15px",
                  fontSize: "15px",
                  fontWeight: 500,
                  textDecoration: "none",
                }}
              >
                StackDrive
              </Typography>
            </Link>
          </Box>
          <Box
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: {
                xs: "10px",
                md: "20px",
                lg: "25px",
              },
            }}
          >
            <IconButton
              key={`icon-${theme}`}
              sx={{ color: "text.secondary" }}
              onClick={() => {
                if (theme === "dark") {
                  dispatch(updateSettings({ theme: "light" }));
                } else {
                  dispatch(updateSettings({ theme: "dark" }));
                }
              }}
            >
              {theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
            <IconButton
              sx={{
                color: "text.secondary",
                display: { xs: "flex", sm: "none" },
              }}
              onClick={() => {
                navigate("/auth/login");
              }}
            >
              <LoginIcon />
            </IconButton>
            <MenuList sx={{ display: { xs: "none", sm: "block" } }}>
              <MenuItem
                sx={{
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: "border.primary",
                  borderRadius: "8px",
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "text.secondary",
                  transition: "all 80ms linear",
                  ":hover": {
                    color: "text.primary",
                  },
                }}
                onClick={() => {
                  navigate("/auth/login");
                }}
              >
                Get Started
              </MenuItem>
            </MenuList>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

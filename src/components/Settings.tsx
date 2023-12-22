import React, { useMemo } from "react";
import { RootState } from "@/redux/reducers";
import { useSelector, useDispatch } from "react-redux";
import { toggleDisplay, updateSettings } from "@/redux/actions";
import { Backdrop, Box, Typography, IconButton, Button } from "@mui/material";
import { Replay as ResetIcon, Close as CloseIcon } from "@mui/icons-material";
import { DarkModeIcon, LightModeIcon } from "@/icons";
import { lightTheme, darkTheme } from "@/theme";

export default function Settings() {
  const { display, theme } = useSelector((state: RootState) => state.settings);
  const dispatch = useDispatch();

  const boxShadow = useMemo(
    () =>
      theme === "light"
        ? `${lightTheme.palette.boxShadow?.primary} -40px 40px 80px -8px`
        : `${darkTheme.palette.boxShadow?.primary} -40px 40px 80px -8px`,
    [theme]
  );

  return (
    <Backdrop
      component="div"
      open={true}
      sx={{
        pointerEvents: display ? "all" : "none",
        zIndex: display ? 30 : 0,
        backgroundColor: "rgba(0, 0, 0, 0)",
      }}
      onClick={(_: React.MouseEvent<HTMLDivElement>) => {
        dispatch(toggleDisplay({ display: false }));
      }}
    >
      <Box
        component="div"
        sx={{
          position: "fixed",
          width: "280px",
          height: "100vh",
          top: "0px",
          right: "0px",
          transform: display ? "translateX(0px)" : "translateX(280px)",
          transition: "transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms",
          backdropFilter: "blur(10px)",
          backgroundColor: "filterBackgroundColor.primary",
          boxShadow: display ? boxShadow : "none",
          zIndex: 10,
        }}
        onClick={(e: React.MouseEvent<HTMLDivElement>) => {
          e.stopPropagation();
        }}
      >
        <Box
          component="div"
          sx={{
            height: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0px 15px",
            borderBottomColor: "border.primary",
            borderBottomStyle: "dashed",
            borderBottomWidth: "1px",
          }}
        >
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 600,
            }}
          >
            Settings
          </Typography>
          <Box component="div" sx={{ display: "flex", gap: "3px" }}>
            <IconButton>
              <ResetIcon
                sx={{ height: "20px", width: "20px", color: "text.secondary" }}
              />
            </IconButton>
            <IconButton
              onClick={(_: React.MouseEvent<HTMLButtonElement>) => {
                dispatch(toggleDisplay({ display: false }));
              }}
            >
              <CloseIcon
                sx={{ height: "20px", width: "20px", color: "text.secondary" }}
              />
            </IconButton>
          </Box>
        </Box>
        <Box
          component="div"
          sx={{
            margin: "20px 0px",
            padding: "0px 15px",
          }}
        >
          <Box component="div">
            <Typography
              sx={{
                fontSize: "12px",
                color: "text.secondary",
                marginBottom: "10px",
              }}
            >
              Mode
            </Typography>
            <Box
              component="div"
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "15px",
              }}
            >
              <Button
                sx={{
                  height: "90px",
                  padding: "32px",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: "border.primary",
                  backgroundColor:
                    theme === "light" ? "background.paper" : "none",
                  color: theme === "light" ? "icon.selected" : "icon.default",
                }}
                onClick={() => {
                  dispatch(updateSettings({ theme: "light" }));
                }}
              >
                <LightModeIcon />
              </Button>
              <Button
                sx={{
                  height: "90px",
                  padding: "32px",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: "border.primary",
                  backgroundColor:
                    theme === "dark" ? "background.paper" : "none",
                  color: theme === "dark" ? "icon.selected" : "icon.default",
                }}
                onClick={() => {
                  dispatch(updateSettings({ theme: "dark" }));
                }}
              >
                <DarkModeIcon />
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Backdrop>
  );
}

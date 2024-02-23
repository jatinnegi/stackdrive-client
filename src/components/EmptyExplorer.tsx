import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/reducers";
import { lightTheme, darkTheme } from "@/theme";
import { Box, Typography } from "@mui/material";
import WorkspaceArt from "@/components/Art/Workspace";

interface Props {
  view: "grid" | "list";
}

const EmptyExplorer: FC<Props> = ({ view }) => {
  const { theme } = useSelector((state: RootState) => state.settings);

  const boxShadow =
    theme === "light"
      ? `0px 0px 5px ${lightTheme.palette.boxShadow?.primary}`
      : `0px 0px 5px ${darkTheme.palette.boxShadow?.primary}`;

  return (
    <Box
      component="div"
      sx={{
        marginTop: view === "list" ? "30px" : "0px",
        padding: {
          xs: "0px 20px 60px 20px",
          lg: "0px 40px",
        },
        display: "flex",
        flexDirection: {
          xs: "column",
          lg: "row",
        },
        gap: {
          xs: "0px",
          lg: "40px",
        },
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "explorer.background",
        borderWidth: "1px",
        borderStyle: "dashed",
        borderColor: "border.primary",
        borderRadius: "8px",
        cursor: "pointer",
        transition: "background linear 150ms",
        boxShadow,
        ":hover": {
          bgcolor: "explorer.hover",
        },
      }}
    >
      <Box
        component="div"
        sx={{
          height: {
            xs: "220px",
            md: "280px",
            lg: "360px",
          },
          width: {
            xs: "220px",
            md: "280px",
            lg: "360px",
          },
        }}
      >
        <WorkspaceArt />
      </Box>
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          // flex: 1,
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: "18px",
              sm: "20px",
              lg: "24px",
            },
            // width: {
            //   xs: "100%",
            //   lg: "80%",
            // },
            textAlign: {
              xs: "center",
              lg: "left",
            },
          }}
        >
          Drop or Select File/Folders
        </Typography>
        <Typography
          sx={{
            fontSize: {
              xs: "11px",
              sm: "13px",
              lg: "14px",
            },
            color: "text.secondary",
            // width: {
            //   xs: "100%",
            //   lg: "50%",
            // },
            textAlign: {
              xs: "center",
              lg: "left",
            },
          }}
        >
          Drop files here or click to <Box component="span">browse</Box> through
          your machine
        </Typography>
      </Box>
    </Box>
  );
};

export default EmptyExplorer;

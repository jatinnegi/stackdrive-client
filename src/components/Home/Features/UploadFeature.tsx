import { FC } from "react";
import { Box, Typography } from "@mui/material";
import Workspace from "@/illustrations/Workspace";

interface Props {
  number: number;
  boxShadow: string;
}

const UploadFeature: FC<Props> = ({ number, boxShadow }) => {
  return (
    <Box
      component="div"
      sx={{
        position: "absolute",
        bottom: 0,
        right: 0,
        width: "80%",
        height: "80%",
        bgcolor: "background.default",
        borderRadius: "8px",
        borderWidth: "1px",
        borderColor: "border.primary",
        borderStyle: "dashed",
        boxShadow,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        opacity: number === 1 ? 1 : 0,
        transition: "opacity 150ms linear",
      }}
    >
      <Box component="div" sx={{ height: "180px", width: "180px" }}>
        <Workspace />
      </Box>
      <Box component="div">
        <Typography sx={{ fontSize: "14px" }}>
          Drag or select files/folders
        </Typography>
        <Typography
          sx={{
            fontSize: "8px",
            marginTop: "3px",
            color: "text.secondary",
          }}
        >
          Drop files here or click to browse through your machine
        </Typography>
      </Box>
    </Box>
  );
};

export default UploadFeature;

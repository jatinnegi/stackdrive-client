import { FC } from "react";
import { Box, Typography } from "@mui/material";
import supportedFileTypes, { Supported } from "@/utils/supportedFileTypes";

interface Props {
  number: number;
  boxShadow: string;
}

const DownloadFeature: FC<Props> = ({ number, boxShadow }) => {
  return (
    <Box
      component="div"
      sx={{
        position: "absolute",
        bottom: 0,
        right: 0,
        width: "80%",
        height: "85%",
        bgcolor: "background.default",
        borderRadius: "8px",
        borderWidth: "1px",
        borderColor: "border.primary",
        borderStyle: "dashed",
        boxShadow,
        opacity: number === 3 ? 1 : 0,
        transition: "opacity 150ms linear",
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "10px",
        p: 4,
      }}
    >
      {supportedFileTypes.map((file: Supported) => (
        <Box
          key={file.id}
          component="div"
          sx={{
            height: "40px",
            borderRadius: "8px",
            bgcolor: "background.paper",
            display: "flex",
            alignItems: "center",
            gap: "7px",
            p: 1,
          }}
        >
          <Box
            sx={{
              height: "22px",
              width: "22px",
              background: `url("${file.img}") no-repeat center center/cover`,
            }}
          />
          <Typography
            sx={{
              fontSize: "10px",
              textTransform: "capitalize",
              fontWeight: 700,
            }}
          >
            {file.type}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default DownloadFeature;

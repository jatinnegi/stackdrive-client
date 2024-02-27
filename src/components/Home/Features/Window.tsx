import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/reducers";
import { darkTheme } from "@/theme";
import { Box } from "@mui/material";
import UploadFeature from "./UploadFeature";
import CollaborateFeature from "./CollaborateFeature";
import DownloadFeature from "./DownloadFeature";

interface Props {
  number: number;
  left: boolean;
}

const Window: FC<Props> = ({ number, left }) => {
  const theme = useSelector((state: RootState) => state.settings.theme);
  const fontColor =
    theme === "light" ? "#C3D7E9" : darkTheme.palette.text.secondary;
  const boxShadow =
    theme === "light" ? "0px 0px 40px #E0E0E0" : "0px 0px 40px #0F1217";

  const className = left
    ? "window-features-background left"
    : "window-features-background right";

  return (
    <Box
      component="div"
      className={className}
      sx={{
        boxShadow,
      }}
    >
      <Box
        component="div"
        sx={{
          position: "absolute",
          top: "20px",
          left: "4%",
          display: "flex",
          gap: "8px",
        }}
      >
        <Box
          component="div"
          sx={{
            height: "10px",
            width: "10px",
            bgcolor: "#80ebff",
            borderRadius: "50%",
          }}
        />
        <Box
          component="div"
          sx={{
            height: "10px",
            width: "10px",
            bgcolor: "#fd7a8c",
            borderRadius: "50%",
          }}
        />
        <Box
          component="div"
          sx={{
            height: "10px",
            width: "10px",
            bgcolor: "#fee895",
            borderRadius: "50%",
          }}
        />
      </Box>
      <Box
        component="div"
        sx={{
          height: "100%",
          width: "30%",
          bgcolor: "background.paper",
          py: 10,
          borderTopLeftRadius: "inherit",
          borderBottomLeftRadius: "inherit",
        }}
      >
        <Box
          component="div"
          sx={{
            position: "relative",
            left: "13%",
          }}
        >
          <Box
            component="div"
            sx={{
              position: "relative",
              height: "7px",
              width: "60%",
              borderRadius: "8px",
              bgcolor: fontColor,
              mb: 2,
            }}
          />
          <Box
            component="div"
            sx={{
              position: "relative",
              height: "7px",
              width: "30%",
              borderRadius: "8px",
              bgcolor: fontColor,
            }}
          />
          <Box
            component="div"
            sx={{
              position: "relative",
              height: "7px",
              my: 1,
              width: "30%",
              borderRadius: "8px",
              bgcolor: fontColor,
            }}
          />
          <Box
            component="div"
            sx={{
              position: "relative",
              height: "7px",
              width: "30%",
              borderRadius: "8px",
              bgcolor: fontColor,
            }}
          />
          <Box
            component="div"
            sx={{
              position: "relative",
              height: "7px",
              width: "60%",
              borderRadius: "8px",
              bgcolor: fontColor,
              mt: 5,
              mb: 2,
            }}
          />
          <Box
            component="div"
            sx={{
              position: "relative",
              height: "7px",
              width: "30%",
              borderRadius: "8px",
              bgcolor: fontColor,
            }}
          />
          <Box
            component="div"
            sx={{
              position: "relative",
              height: "7px",
              my: 1,
              width: "30%",
              borderRadius: "8px",
              bgcolor: fontColor,
            }}
          />
          <Box
            component="div"
            sx={{
              position: "relative",
              height: "7px",
              width: "30%",
              borderRadius: "8px",
              bgcolor: fontColor,
            }}
          />
        </Box>
      </Box>
      <Box
        component="div"
        sx={{
          height: "100%",
          width: "70%",
          bgcolor: "background.default",
          py: 10,
          px: 3,
          borderTopRightRadius: "inherit",
          borderBottomRightRadius: "inherit",
        }}
      >
        <Box
          component="div"
          sx={{
            position: "relative",
            height: "7px",
            width: "40%",
            borderRadius: "8px",
            bgcolor: fontColor,
          }}
        />
        <Box component="div" sx={{ display: "flex", gap: "5px", mt: 1 }}>
          <Box
            component="div"
            sx={{
              position: "relative",
              height: "7px",
              width: "20%",
              borderRadius: "8px",
              bgcolor: fontColor,
            }}
          />
          <Box
            component="div"
            sx={{
              position: "relative",
              height: "7px",
              width: "10%",
              borderRadius: "8px",
              bgcolor: fontColor,
            }}
          />
        </Box>
      </Box>
      <Box
        component="div"
        className="features-container"
        sx={{
          position: "absolute",
          top: "100px",
          height: "400px",
          width: "98%",
        }}
      >
        <UploadFeature number={number} boxShadow={boxShadow} />
        <CollaborateFeature number={number} boxShadow={boxShadow} />
        <DownloadFeature number={number} boxShadow={boxShadow} />
      </Box>
    </Box>
  );
};

export default Window;

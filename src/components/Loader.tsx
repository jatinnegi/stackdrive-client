import { FC } from "react";
import {
  Box,
  LinearProgress,
  styled,
  linearProgressClasses,
} from "@mui/material";
import StackDriveLogo from "../../public/stack-drive-new-logo.svg";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 5,
  width: "100%",
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 300 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

interface Props {
  value: number;
}

const Loader: FC<Props> = ({ value }) => {
  return (
    <Box
      component="div"
      sx={{
        position: "fixed",
        height: "100svh",
        width: "100svw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "10px",
        top: 0,
        left: 0,
        bgcolor: "background.default",
        zIndex: 50,
      }}
    >
      <img
        src={StackDriveLogo}
        alt="stackdrive"
        style={{ userSelect: "none", width: "50px" }}
      />
      <Box component="div" sx={{ width: "100px" }}>
        <BorderLinearProgress variant="determinate" value={value} />
      </Box>
    </Box>
  );
};

export default Loader;

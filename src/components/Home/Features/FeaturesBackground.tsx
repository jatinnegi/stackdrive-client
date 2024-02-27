import { FC } from "react";
import { Box } from "@mui/material";
import Window from "./Window";
import constants from "@/constants";

interface Props {
  number: number;
  left?: boolean;
}

const FeaturesBackground: FC<Props> = ({ number, left = true }) => {
  return (
    <Box
      component="div"
      sx={{
        display: {
          xs: "none",
          md: "block",
        },
        position: "sticky",
        top: constants.appbar + 20,
        left: 0,
        pointerEvents: "none",
      }}
    >
      <Box component="div" sx={{ perspective: 1800 }}>
        <Window number={number} left={left} />
      </Box>
    </Box>
  );
};

export default FeaturesBackground;

import { FC, PropsWithChildren } from "react";
import { Typography } from "@mui/material";

const SectionHeading: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography
      fontSize={{ xs: "13px", md: "14px" }}
      sx={{ color: "text.secondary", userSelect: "none" }}
    >
      {children}
    </Typography>
  );
};

export default SectionHeading;

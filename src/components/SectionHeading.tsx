import { FC, PropsWithChildren } from "react";
import { Typography } from "@mui/material";

const SectionHeading: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography
      fontSize={{ xs: "14px", md: "16px" }}
      sx={{ color: "text.secondary" }}
    >
      {children}
    </Typography>
  );
};

export default SectionHeading;

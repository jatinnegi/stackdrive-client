import { FC, PropsWithChildren } from "react";
import { Typography } from "@mui/material";

const ModalTitle: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography
      sx={{
        padding: {
          xs: "25px 15px 0px 15px",
          md: "30px 20px 0px 20px",
        },
      }}
    >
      {children}
    </Typography>
  );
};

export default ModalTitle;

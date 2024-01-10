import { FC, PropsWithChildren } from "react";
import { Box } from "@mui/material";

const ModalActions: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box
      component="div"
      sx={{
        padding: {
          xs: "0px 15px 20px 15px",
          md: "0px 20px 20px 20px",
        },
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      {children}
    </Box>
  );
};

export default ModalActions;

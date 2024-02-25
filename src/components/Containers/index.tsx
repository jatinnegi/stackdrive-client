import { FC, PropsWithChildren } from "react";
import { Box } from "@mui/material";

const Container: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box
      sx={{
        height: "100%",
        width: {
          xs: "95%",
          md: "98%",
        },
        maxWidth: "1200px",
        margin: "0px auto",
      }}
    >
      {children}
    </Box>
  );
};

export default Container;

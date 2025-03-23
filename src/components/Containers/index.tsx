import { FC, PropsWithChildren } from "react";
import { Box } from "@mui/material";

interface Props {
  streched?: boolean;
}

const Container: FC<Props & PropsWithChildren> = ({
  streched = false,
  children,
}) => {
  return (
    <Box
      sx={{
        height: "100%",
        width: {
          xs: "95%",
          md: "98%",
        },
        maxWidth: streched ? "none" : "1200px",
        margin: "0px auto",
      }}
    >
      {children}
    </Box>
  );
};

export default Container;

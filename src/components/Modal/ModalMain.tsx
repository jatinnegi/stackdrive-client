import { FC, PropsWithChildren } from "react";
import { Box, BoxProps } from "@mui/material";

type Props = BoxProps & PropsWithChildren;

const ModalMain: FC<Props> = ({ children, ...props }) => {
  return (
    <Box
      component="div"
      sx={{
        flex: 1,
        margin: "15px 0px",
        padding: {
          xs: "0px 15px",
          md: "0px 20px",
        },
        ...props.sx,
      }}
    >
      {children}
    </Box>
  );
};

export default ModalMain;

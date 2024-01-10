import { FC, PropsWithChildren } from "react";
import { Box, BoxProps } from "@mui/material";

type Props = BoxProps & PropsWithChildren;

const ModalBody: FC<Props> = ({ children, ...props }) => {
  return (
    <Box
      component="div"
      sx={{
        backgroundColor: "background.paper",
        borderRadius: "10px",
        width: "95%",
        maxWidth: "450px",
        display: "flex",
        flexDirection: "column",
        boxShadow: "rgba(0, 0, 0, 0.24) -40px 40px 80px -8px",
        ...props.sx,
      }}
      onClick={(e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
      }}
    >
      {children}
    </Box>
  );
};

export default ModalBody;

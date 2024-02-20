import { FC, PropsWithChildren } from "react";
import { Box, BoxProps } from "@mui/material";

type Props = BoxProps & PropsWithChildren;

const ModalBody: FC<Props> = ({ children, ...props }) => {
  return (
    <Box
      component="div"
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "background.paper",
        borderRadius: "10px",
        width: "95%",
        maxWidth: "450px",
        display: "flex",
        flexDirection: "column",
        boxShadow: "rgba(0, 0, 0, 0.24) -40px 40px 80px -8px",
        ...props.sx,
      }}
      onMouseDown={(e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
      }}
      onContextMenu={(e: React.MouseEvent) => {
        e.stopPropagation();
      }}
    >
      {children}
    </Box>
  );
};

export default ModalBody;

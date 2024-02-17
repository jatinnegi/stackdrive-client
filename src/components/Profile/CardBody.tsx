import { FC, PropsWithChildren, useMemo } from "react";
import { Box, BoxProps } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/reducers";

const CardBody: FC<PropsWithChildren & BoxProps> = ({ children, ...props }) => {
  const { theme } = useSelector((state: RootState) => state.settings);

  const boxShadow = useMemo(() => {
    if (theme === "dark")
      return "rgba(0, 0, 0, 0.2) 0px 0px 2px 0px, rgba(0, 0, 0, 0.12) 0px 12px 24px -4px";
    return "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px";
  }, [theme]);

  return (
    <Box
      component="div"
      sx={{
        bgcolor: "background.paper",
        width: "100%",
        padding: "15px 15px",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        boxShadow,
        ...props.sx,
      }}
    >
      {children}
    </Box>
  );
};

export default CardBody;

import { FC, PropsWithChildren } from "react";
import { Box } from "@mui/material";
import InfoIcon from "@/icons/Info";

export const InfoAlert: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box
      component="div"
      sx={{
        bgcolor: "alert.primary.background",
        p: 2,
        borderRadius: 2,
        display: "flex",
        alignItems: "flex-start",
        gap: "10px",
      }}
    >
      <Box component="div" sx={{ width: "25px", height: "25px" }}>
        <InfoIcon />
      </Box>
      <Box
        component="div"
        sx={{
          color: "alert.primary.text",
          fontWeight: 400,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

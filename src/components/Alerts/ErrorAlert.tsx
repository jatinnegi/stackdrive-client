import { FC, PropsWithChildren } from "react";
import { Box } from "@mui/material";

export const ErrorAlert: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box
      component="div"
      sx={{
        width: "100%",
        mb: 1.5,
        bgcolor: "alert.danger.background",
        p: 2,
        borderRadius: 2,
        display: "flex",
        alignItems: "flex-start",
        gap: "10px",
      }}
    >
      <Box
        component="div"
        sx={{
          color: "alert.danger.text",
          fontWeight: 400,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

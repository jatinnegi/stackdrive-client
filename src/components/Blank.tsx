import { Box } from "@mui/material";

export default function Blank() {
  return (
    <Box
      component="div"
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "100svh",
        width: "100svw",
        bgcolor: "background.default",
        zIndex: 100,
      }}
    />
  );
}

import { Outlet } from "react-router-dom";
import { Appbar } from "@/components/Appbar";
import { Box } from "@mui/material";

export default function GuestLayout() {
  return (
    <Box component="div">
      <Appbar />
      <Outlet />
    </Box>
  );
}

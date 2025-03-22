import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetSelectedIds } from "@/redux/actions";
import { Box } from "@mui/material";
import { DashboardAppbar } from "@/components/Appbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import MobileMenu from "@/components/MobileMenu";
import ContextMenu from "@/components/ContextMenu";
import Operations from "@/components/Operations";
import DashboardContainer from "@/components/Containers/Dashboard";

export default function DashboardLayout() {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetSelectedIds());
  }, [location]);

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        minHeight: "100svh",
        userSelect: "none",
      }}
    >
      <DashboardAppbar />
      <MobileMenu />
      <Sidebar />
      <ContextMenu />
      <Operations />
      <DashboardContainer>
        <Outlet />
      </DashboardContainer>
    </Box>
  );
}

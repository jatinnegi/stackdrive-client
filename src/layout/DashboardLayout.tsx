import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetSelectedIds } from "@/redux/actions";
import { RootState } from "@/redux/reducers";
import { Box } from "@mui/material";
import Sidebar from "@/components/Sidebar/Sidebar";
import Toggle from "@/components/Sidebar/Toggle";
import Appbar from "@/components/Appbar/Appbar";
import MobileMenu from "@/components/MobileMenu";
import ContextMenu from "@/components/ContextMenu";
import SelectionBox from "@/components/SelectionBox";
import Operations from "@/components/Operations";

export default function DashboardLayout() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { layout } = useSelector((state: RootState) => state.settings);

  useEffect(() => {
    dispatch(resetSelectedIds());
  }, [location]);

  return (
    <Box
      sx={{ position: "relative", minHeight: "100svh", userSelect: "none" }}
      display="flex"
    >
      <Appbar />
      <MobileMenu />
      <Sidebar />
      <Toggle />
      <ContextMenu fixedView={false} />
      <Operations />
      <SelectionBox />
      <Box
        aria-label="main-container"
        width={{
          xs: "100%",
          lg: `calc(100% - ${layout === "full" ? "260px" : "85px"})`,
        }}
        margin={{
          xs: "70px auto 30px auto",
          lg: layout === "full" ? "70px 0px 30px 260px" : "70px 0px 30px 85px",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}

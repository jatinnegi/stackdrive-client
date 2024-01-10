import { useSelector } from "react-redux";
import { RootState } from "@/redux/reducers";
import { Box } from "@mui/material";
import Sidebar from "@/components/Sidebar/Sidebar";
import Toggle from "@/components/Sidebar/Toggle";
import ModifiedFilter from "@/components/Filters/ModifiedFilter";
import Appbar from "@/components/Appbar/Appbar";
import MobileMenu from "@/components/MobileMenu";
import ContextMenu from "@/components/ContextMenu";
import SelectionBox from "@/components/SelectionBox";
import Operations from "@/components/Operations";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  const { layout } = useSelector((state: RootState) => state.settings);

  return (
    <Box sx={{ position: "relative", minHeight: "100svh" }} display="flex">
      <Appbar />
      <MobileMenu />
      <Sidebar />
      <Toggle />
      <ContextMenu />
      <SelectionBox />
      <Operations />
      <ModifiedFilter />
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

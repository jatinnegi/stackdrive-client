import { useSelector } from "react-redux";
import { RootState } from "@/redux/reducers";
import { Box } from "@mui/material";
import Sidebar from "@/components/Sidebar/Sidebar";
import Toggle from "@/components/Sidebar/Toggle";
import Appbar from "@/components/Appbar/Appbar";
import MobileMenu from "@/components/MobileMenu";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  const { layout } = useSelector((state: RootState) => state.settings);

  return (
    <Box sx={{ position: "relative" }} display="flex">
      <Appbar />
      <MobileMenu />
      <Sidebar />
      <Toggle />
      <Box
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

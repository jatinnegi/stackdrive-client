import { useSelector } from "react-redux";
import { RootState } from "@/redux/reducers";
import { Box } from "@mui/material";
import Sidebar from "@/components/Sidebar/Sidebar";
import Toggle from "@/components/Sidebar/Toggle";
import Appbar from "@/components/Appbar/Appbar";
import Settings from "@/components/Settings";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  const { layout } = useSelector((state: RootState) => state.settings);

  return (
    <Box sx={{ position: "relative" }} display="flex">
      <Appbar />
      <Sidebar />
      <Toggle />
      <Settings />
      <Box
        width={{
          xs: "100%",
          lg: `calc(100% - ${layout === "full" ? "260px" : "85px"})`,
        }}
        margin={{
          xs: "75px auto 30px auto",
          lg: layout === "full" ? "75px 0px 30px 260px" : "75px 0px 30px 85px",
        }}
      >
        <Box
          sx={{
            width: {
              xs: "95%",
              md: "98%",
            },
            maxWidth: "1200px",
            margin: "0px auto",
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

import { FC, PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/reducers";
import { Box } from "@mui/material";
import constants from "@/constants";

const Dashboard: FC<PropsWithChildren> = ({ children }) => {
  const { layout } = useSelector((state: RootState) => state.settings);

  return (
    <Box
      aria-label="main-container"
      margin={{
        xs: `${constants.dashboardAppbar}px auto 30px auto`,
        lg:
          layout === "full"
            ? `${constants.dashboardAppbar}px 0px 30px ${constants.sidebar.full}px`
            : `${constants.dashboardAppbar}px 0px 30px ${constants.sidebar.collapse}px`,
      }}
      style={{
        width: "100%",
        transition: "margin 75ms ease-out",
      }}
    >
      {children}
    </Box>
  );
};

export default Dashboard;

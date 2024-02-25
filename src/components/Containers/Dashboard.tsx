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
      width={{
        xs: "100%",
        lg: `calc(100% - ${
          layout === "full"
            ? `${constants.sidebar.full}px`
            : `${constants.sidebar.collapse}px`
        })`,
      }}
      margin={{
        xs: `${constants.dashboardAppbar}px auto 30px auto`,
        lg:
          layout === "full"
            ? `${constants.dashboardAppbar}px 0px 30px ${constants.sidebar.full}px`
            : `${constants.dashboardAppbar}px 0px 30px ${constants.sidebar.collapse}px`,
      }}
    >
      {children}
    </Box>
  );
};

export default Dashboard;

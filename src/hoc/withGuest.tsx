import { RootState } from "@/redux/reducers";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Blank from "@/components/Blank";

const withGuest = (WrappedComponent: React.ComponentType) => () => {
  const userInfo = useSelector((state: RootState) => state.auth.userInfo);

  if (!userInfo) {
    return <WrappedComponent />;
  } else {
    return (
      <>
        <Navigate to="/dashboard" />;
        <Blank />
      </>
    );
  }
};

export default withGuest;

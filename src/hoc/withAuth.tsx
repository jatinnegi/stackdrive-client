import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/reducers";
import Blank from "@/components/Blank";

const withAuth = (WrappedComponent: React.ComponentType) => () => {
  const userInfo = useSelector((state: RootState) => state.auth.userInfo);

  if (userInfo) {
    return <WrappedComponent />;
  } else {
    return (
      <>
        <Navigate to="/auth/login" />;
        <Blank />
      </>
    );
  }
};

export default withAuth;

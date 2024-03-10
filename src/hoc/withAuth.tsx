import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCredentials } from "@/redux/actions";
import { useAuthMutation } from "@/redux/slices/api/usersApiSlice";
import { RootState } from "@/redux/reducers";
import Blank from "@/components/Blank";

const withAuth = (WrappedComponent: React.ComponentType) => () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state: RootState) => state.auth.userInfo);
  const [getUserApiCall] = useAuthMutation();
  const [loading, setLoading] = useState<boolean>(userInfo !== null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await getUserApiCall({}).unwrap();
        dispatch(setCredentials({ userInfo: res }));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (!userInfo) {
      fetchUser();
    } else {
      setLoading(false);
    }
  }, [userInfo]);

  if (loading) {
    return <Blank />;
  }

  if (userInfo) {
    return <WrappedComponent />;
  }

  return (
    <>
      <Blank />
      <Navigate to="/auth/login" />
    </>
  );
};

export default withAuth;

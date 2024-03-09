import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { RootState } from "@/redux/reducers";
import { useSelector, useDispatch } from "react-redux";
import { useAuthMutation } from "@/redux/slices/api/usersApiSlice";
import { setCredentials } from "@/redux/actions";
import Blank from "@/components/Blank";

const withGuest = (WrappedComponent: React.ComponentType) => () => {
  const userInfo = useSelector((state: RootState) => state.auth.userInfo);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(userInfo !== null);
  const [getUserApiCall] = useAuthMutation();

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

  if (!userInfo) {
    return <WrappedComponent />;
  }

  return (
    <>
      <Navigate to="/dashboard" />
      <Blank />
    </>
  );
};

export default withGuest;

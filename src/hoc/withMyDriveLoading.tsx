import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/reducers";
import { updateResourcesData } from "@/redux/actions";
import { NavigationProps, ResourceProps } from "@/types";
import Loader from "@/components/Loader";

export type FetchDataFunctionReturn = {
  data: ResourceProps[];
  navigation: NavigationProps[];
};

export type FetchDataFunction = (
  folderId: string | undefined
) => Promise<FetchDataFunctionReturn>;

const withMyDriveLoading = (
  WrappedComponent: React.ComponentType,
  fetchData: FetchDataFunction
) => {
  return () => {
    const [loaderValue, setLoaderValue] = useState<number>(0);
    const { folderId } = useParams();
    const { init } = useSelector((state: RootState) => state.resources);
    const dispatch = useDispatch();

    useEffect(() => {
      let active = true;

      const fetchInitialData = async () => {
        try {
          dispatch(updateResourcesData({ loading: true }));
          const { data, navigation } = await fetchData(folderId);
          if (active) {
            dispatch(updateResourcesData({ data, navigation }));
          }
        } catch (error) {
          if (active) {
            console.error(error);
          }
        } finally {
          if (active) {
            dispatch(updateResourcesData({ loading: false }));
          }
        }
      };

      fetchInitialData();

      return () => {
        // For handling race conditions
        active = false;
      };
    }, [folderId, fetchData]);

    useEffect(() => {
      const intervalId = setInterval(() => {
        if (loaderValue >= 100) {
          clearInterval(intervalId);
        } else {
          setLoaderValue(loaderValue + 5);
        }
      }, 100);

      return () => {
        clearInterval(intervalId);
      };
    }, [loaderValue]);

    if (!init) return <Loader value={loaderValue} />;

    return <WrappedComponent />;
  };
};

export default withMyDriveLoading;

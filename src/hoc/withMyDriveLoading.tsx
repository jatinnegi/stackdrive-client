import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/reducers";
import { updateResourcesData } from "@/redux/actions";
import { NavigationProps, ResourceProps } from "@/types";
import { Box } from "@mui/material";

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

    if (!init)
      return (
        <Box
          component="div"
          sx={{
            position: "fixed",
            height: "100svh",
            width: "100svw",
            top: 0,
            left: 0,
            bgcolor: "background.default",
            zIndex: 50,
          }}
        />
      );

    return <WrappedComponent />;
  };
};

export default withMyDriveLoading;

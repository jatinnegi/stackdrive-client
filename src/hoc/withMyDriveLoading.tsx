import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ResourceProps } from "@/types";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/reducers";

export type DataProps = {
  loading: boolean;
  data: ResourceProps[];
};

export type FetchDataFunction = (
  folderId: string | undefined
) => Promise<ResourceProps[]>;

const withMyDriveLoading = (
  WrappedComponent: React.ComponentType<DataProps>,
  fetchData: FetchDataFunction
) => {
  return () => {
    const { folderId } = useParams();
    const { data: resources } = useSelector(
      (state: RootState) => state.resources
    );
    const [data, setData] = useState<ResourceProps[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
      const fetchInitialData = async () => {
        try {
          setLoading(true);
          await fetchData(folderId);
          setData(resources);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };

      fetchInitialData();
    }, [folderId, fetchData]);

    useEffect(() => {
      setData(resources);
    }, [resources]);

    return <WrappedComponent loading={loading} data={data} />;
  };
};

export default withMyDriveLoading;

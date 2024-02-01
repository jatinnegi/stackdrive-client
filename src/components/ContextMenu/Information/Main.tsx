import { FC, useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/reducers";
import { ResourceProps } from "@/types";
import { dummyUsers } from "@/data";
import { InformationType } from ".";
import { Box, Button } from "@mui/material";
import Details from "./Details";
import Access from "./Access";

interface Props {
  headerHeight: number;
  handleManageAccess: () => void;
  current: InformationType;
}

interface DetailProps {
  resource: ResourceProps | null;
  loading: boolean;
}

const Main: FC<Props> = ({ headerHeight, handleManageAccess, current }) => {
  const [details, setDetails] = useState<DetailProps>({
    resource: null,
    loading: false,
  });
  const {
    settings: { theme },
    resources: { data, selected },
  } = useSelector((state: RootState) => state);

  useEffect(() => {
    async function fetchDetails(resourceId: string) {
      // Replicate a server call
      setDetails((prev: DetailProps) => ({
        ...prev,
        loading: true,
      }));
      try {
        const resource: ResourceProps | undefined = await new Promise(
          (resolve) =>
            setTimeout(() => {
              const resource = data.find(
                (resource: ResourceProps) => resource.id === resourceId
              );
              resolve(resource);
            }, 3000)
        );

        if (resource)
          setDetails((prev: DetailProps) => ({
            ...prev,
            resource,
          }));
      } catch (error) {
        console.log(error);
      } finally {
        setDetails((prev: DetailProps) => ({
          ...prev,
          loading: false,
        }));
      }
    }

    const resourceId = selected[0];
    fetchDetails(resourceId);
  }, [data, selected]);

  const { resource, loading } = details;

  const MANAGE_ACCESS_CONTAINER_HEIGHT = 80;

  const height =
    current === "details"
      ? `calc(100svh - ${headerHeight}px)`
      : `calc(100svh - ${headerHeight + MANAGE_ACCESS_CONTAINER_HEIGHT}px)`;

  const scrollbarThumbBgColor = useMemo(() => {
    if (theme === "dark") return "#808080";
    return "#A0A0A0";
  }, [theme]);

  return (
    <>
      <Box
        component="div"
        sx={{
          padding: "22px",
          overflowY: "scroll",
          height,
          "&::-webkit-scrollbar": {
            width: "5px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: scrollbarThumbBgColor,
            borderRadius: "8px",
          },
        }}
      >
        {current === "details" ? (
          <Details resource={resource} loading={loading} />
        ) : (
          <Access users={dummyUsers.slice(0, 7)} loading={loading} />
        )}
      </Box>
      {current === "access" && (
        <Box
          component="div"
          sx={{
            height: `${MANAGE_ACCESS_CONTAINER_HEIGHT}px`,
            width: "100%",
            bgcolor: "filterBackgroundColor.primary",
            backdropFilter: "blur(25px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            sx={{
              width: "80%",
              py: 1.5,
              textTransform: "capitalize",
              bgcolor: "selected.secondary",
              color: "text.primary",
              fontSize: "14px",
            }}
            onClick={() => {
              handleManageAccess();
            }}
          >
            Manage Access
          </Button>
        </Box>
      )}
    </>
  );
};

export default Main;

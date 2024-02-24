import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/reducers";
import { initialResourcesData } from "@/data";
import { ResourceProps, NavigationProps } from "@/types";
import { Box, CircularProgress } from "@mui/material";
import Header from "@/components/Header";
import Explorer from "@/components/Explorer";
import Container from "@/components/Container";
import withMyDriveLoading, {
  FetchDataFunction,
  FetchDataFunctionReturn,
} from "@/hoc/withMyDriveLoading";

const Loader: FC<{ view: "list" | "grid" }> = ({ view }) => {
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: view === "list" ? "30px" : "0px",
        height: "180px",
      }}
    >
      <CircularProgress size={30} />
    </Box>
  );
};

const MyDrive: FC = () => {
  const { data, loading } = useSelector((state: RootState) => state.resources);
  const view = useSelector((state: RootState) => state.myDrive.view);

  const myOptions = view === "list" ? "0px" : { xs: "25px", md: "30px" };

  return (
    <Box component="div">
      <Header />
      <Container>
        <Box
          component="div"
          mx={{ xs: "0px", md: "22px" }}
          my={myOptions}
          display="grid"
          gap="20px"
        >
          {loading ? <Loader view={view} /> : <Explorer resources={data} />}
        </Box>
      </Container>
    </Box>
  );
};

const fetchData: FetchDataFunction = async (folderId: string | undefined) => {
  const result: FetchDataFunctionReturn = await new Promise((resolve) => {
    setTimeout(() => {
      if (!folderId) {
        const data: ResourceProps[] = initialResourcesData.filter(
          (resource: ResourceProps) => resource.parentId === null
        );
        resolve({ data, navigation: [] });
      } else {
        const data: ResourceProps[] = initialResourcesData.filter(
          (resource: ResourceProps) => resource.parentId === folderId
        );
        const navigation: NavigationProps[] = [];
        let currentId: string | null = folderId ? folderId : null;

        while (currentId !== null) {
          const folder: ResourceProps | undefined = initialResourcesData.find(
            (resource: ResourceProps) => resource.id === currentId
          );
          if (!folder) {
            break;
          }

          navigation.push({ id: folder.id, name: folder.name });
          currentId = folder.parentId;
        }
        navigation.sort((item1, item2) => +item1.id - +item2.id);
        resolve({ data, navigation });
      }
    }, 3000);
  });

  return result;
};

const MyDriveWithLoading = withMyDriveLoading(MyDrive, fetchData);

export default MyDriveWithLoading;

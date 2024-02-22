import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/reducers";
import { Box, CircularProgress } from "@mui/material";
import Header from "@/components/Header";
import Explorer from "@/components/Explorer";
import Container from "@/components/Container";
import withMyDriveLoading, {
  DataProps,
  FetchDataFunction,
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

const MyDrive: FC<DataProps> = ({ loading, data }) => {
  const { view } = useSelector((state: RootState) => state.myDrive);

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

const fetchData: FetchDataFunction = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 3000);
  });

  return [];
};

const MyDriveWithLoading = withMyDriveLoading(MyDrive, fetchData);

export default MyDriveWithLoading;

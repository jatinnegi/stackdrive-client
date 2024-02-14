import { useSelector } from "react-redux";
import { RootState } from "@/redux/reducers";
import { Box } from "@mui/material";
import Header from "@/components/Header";
import Explorer from "@/components/Explorer";
import Container from "@/components/Container";

export default function MyDrive() {
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
          <Explorer />
        </Box>
      </Container>
    </Box>
  );
}

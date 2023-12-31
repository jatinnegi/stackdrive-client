import { Box } from "@mui/material";
import Header from "@/components/Header";
import Explorer from "@/components/Explorer";
import Container from "@/components/Container";

export default function MyDrive() {
  return (
    <Box component="div">
      <Header />
      <Container>
        <Box
          component="div"
          margin={{ xs: "25px 0px", md: "30px 22px" }}
          display="grid"
          gap="20px"
        >
          <Explorer />
        </Box>
      </Container>
    </Box>
  );
}

import { Box } from "@mui/material";
import Action from "@/components/Action";
import Filters from "@/components/Filters/Filters";
import Container from "@/components/Container";

export default function Header() {
  return (
    <Box
      component="div"
      sx={{
        backgroundColor: "background.default",
        position: "sticky",
        top: "70px",
        width: "100%",
        zIndex: 5,
        paddingBottom: "5px",
      }}
    >
      <Container>
        <Action>My Drive</Action>
        <Filters />
      </Container>
    </Box>
  );
}

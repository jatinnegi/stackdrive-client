import { Box } from "@mui/material";
import Container from "@/components/Container";

export default function Home() {
  return (
    <Container>
      <Box component="div" sx={{ display: "flex" }}>
        <Box component="div" sx={{ bgcolor: "red", width: "60%" }}></Box>
        <Box component="div" sx={{ bgcolor: "blue", width: "40%" }}></Box>
      </Box>
    </Container>
  );
}

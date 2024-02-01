import { useSelector } from "react-redux";
import { RootState } from "@/redux/reducers";
import { Box } from "@mui/material";
import Action from "@/components/Action";
import Filters from "@/components/Filters/Filters";
import Container from "@/components/Container";
import SelectedControls from "@/components/SelectedControls";

export default function Header() {
  const { selected } = useSelector((state: RootState) => state.resources);

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
        userSelect: "none",
      }}
    >
      <Container>
        <Action title="My Drive" />
        <Box sx={{ height: "38px" }}>
          {selected.length ? <SelectedControls /> : <Filters />}
        </Box>
      </Container>
    </Box>
  );
}

import { useSelector } from "react-redux";
import { RootState } from "@/redux/reducers";
import { Box } from "@mui/material";
import Action from "@/components/Action";
import Filters from "@/components/Filters/Filters";
import Container from "@/components/Containers";
import SelectedControls from "@/components/SelectedControls";
import constants from "@/constants";

export default function Header() {
  const { selected } = useSelector((state: RootState) => state.resources);

  return (
    <Box
      component="div"
      sx={{
        bgcolor: "background.default",
        position: "sticky",
        top: constants.appbar,
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

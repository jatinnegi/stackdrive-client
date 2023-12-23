import { Box } from "@mui/material";
import Action from "@/components/Action";
import Filters from "@/components/Filters/Filters";
import Suggested from "@/components/Suggested";
import Explorer from "@/components/Explorer";

export default function MyDrive() {
  return (
    <Box component="div">
      <Action>My Drive</Action>
      <Filters />
      <Box
        component="div"
        margin={{ xs: "25px 0px", md: "30px 22px" }}
        sx={{ display: "grid", gap: "20px" }}
      >
        <Suggested />
        <Explorer />
      </Box>
    </Box>
  );
}

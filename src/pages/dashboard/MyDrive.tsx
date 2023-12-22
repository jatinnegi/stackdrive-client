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
      <Suggested />
      <Explorer />
    </Box>
  );
}

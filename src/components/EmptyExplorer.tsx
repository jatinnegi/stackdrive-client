import { FC } from "react";
import {} from "@/redux/slices/myDrive";
import { Typography } from "@mui/material";

interface Props {
  view: "grid" | "list";
}

const EmptyExplorer: FC<Props> = ({ view }) => {
  return (
    <Typography
      sx={{ marginTop: view === "list" ? "30px" : "0px", fontSize: "1.5rem" }}
    >
      Nothing Found Here
    </Typography>
  );
};

export default EmptyExplorer;

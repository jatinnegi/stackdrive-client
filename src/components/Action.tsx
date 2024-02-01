import { FC } from "react";
import { Box } from "@mui/material";
import LayoutButton from "@/components/LayoutButton";
import ContextMenu from "./ContextMenu";

interface Props {
  title: string;
}

const Action: FC<Props> = ({ title }) => {
  return (
    <Box
      component="div"
      margin={{ md: "0px 22px 0px 0px" }}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <ContextMenu fixedView title={title} />
      <LayoutButton />
    </Box>
  );
};

export default Action;

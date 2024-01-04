import { FC, PropsWithChildren } from "react";
import { Box } from "@mui/material";
import { BoxProps } from "@mui/material";
// import { useDispatch } from "react-redux";
// import { updateSelectedId, updateMultipleSelectedIds } from "@/redux/actions";

type Props = { id: string } & PropsWithChildren & BoxProps;

const ResourceWrapper: FC<Props> = ({ id, children, ...props }) => {
  // const dispatch = useDispatch();

  function handleClick(e: React.MouseEvent) {
    // e.stopPropagation();
    e.preventDefault();

    // Temporarily disable multiple selection
    if (e.shiftKey) {
      // dispatch(updateMultipleSelectedIds({ id }));
    } else {
      // dispatch(updateSelectedId({ id }));
    }
  }

  return (
    <Box
      component="div"
      aria-label="resource-item"
      {...props}
      onClick={handleClick}
    >
      {children}
    </Box>
  );
};

export default ResourceWrapper;

import { FC, PropsWithChildren } from "react";
import { Box } from "@mui/material";
import { BoxProps } from "@mui/material";
import { useDispatch } from "react-redux";
import { updateSelectedId, updateMultipleSelectedIds } from "@/redux/actions";

type Props = { id: string } & PropsWithChildren & BoxProps;

const ResourceWrapper: FC<Props> = ({ id, children, ...props }) => {
  const dispatch = useDispatch();

  function handleMouseDown(e: React.MouseEvent) {
    e.stopPropagation();

    // Don't handle right click event
    if (e.button === 2) return;

    if (e.shiftKey) {
      dispatch(updateMultipleSelectedIds({ id }));
    } else {
      dispatch(updateSelectedId({ id }));
    }
  }

  return (
    <Box
      component="div"
      id={id}
      aria-label="resource-item"
      {...props}
      // onClick={handleClick}
      onMouseDown={handleMouseDown}
    >
      {children}
    </Box>
  );
};

export default ResourceWrapper;

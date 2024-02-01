import { FC, PropsWithChildren } from "react";
import { Box } from "@mui/material";
import { BoxProps } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/reducers";
import { updateSelectedId, updateMultipleSelectedIds } from "@/redux/actions";

type Props = { id: string } & PropsWithChildren & BoxProps;

const ResourceWrapper: FC<Props> = ({ id, children, ...props }) => {
  const { selected } = useSelector((state: RootState) => state.resources);
  const dispatch = useDispatch();

  function handleMouseDown(e: React.MouseEvent) {
    e.stopPropagation();

    let isSelected = false;
    for (let i = 0; i < selected.length && !isSelected; i++) {
      if (id === selected[i]) {
        isSelected = true;
      } else {
        continue;
      }
    }

    if (e.button === 2 && !isSelected) {
      dispatch(updateSelectedId({ id }));
    } else if (e.button === 2 && isSelected) {
      // Don't update selected values for this case
    } else if (e.shiftKey) {
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
      onMouseDown={handleMouseDown}
    >
      {children}
    </Box>
  );
};

export default ResourceWrapper;

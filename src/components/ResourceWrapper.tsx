import { FC, PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/reducers";
import {
  updateSelectedId,
  updateMultipleSelectedIds,
  updateOperations,
  appendNavigation,
} from "@/redux/actions";
import { ResourceProps } from "@/types";
import { getResourceById } from "@/utils/helper";
import { Box } from "@mui/material";
import { BoxProps } from "@mui/material";

type Props = { id: string; name: string } & PropsWithChildren & BoxProps;

const ResourceWrapper: FC<Props> = ({ id, name, children, ...props }) => {
  const navigate = useNavigate();
  const { data, selected } = useSelector((state: RootState) => state.resources);
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

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.detail === 2) {
      handleDoubleClick(id);
    }
  };

  const handleDoubleClick = (id: string) => {
    const item: ResourceProps | undefined = getResourceById(id, data);

    if (!item) {
      return;
    }

    if (item.type === "folder") {
      navigate(`/dashboard/folders/${id}`);
      dispatch(appendNavigation({ id, name }));
    } else {
      dispatch(updateOperations({ information: true }));
    }
  };

  return (
    <Box
      component="div"
      id={id}
      aria-label="resource-item"
      {...props}
      onMouseDown={handleMouseDown}
      onClick={handleClick}
    >
      {children}
    </Box>
  );
};

export default ResourceWrapper;

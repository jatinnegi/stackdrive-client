import { FC, useEffect } from "react";
import { useResize } from "@/hooks";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/reducers";
import { handleContextMenu, onContextMenuClose } from "@/redux/actions";
import { Menu, MenuItem, Typography, ListItemIcon, Box } from "@mui/material";
import {
  OperationProps,
  mainOperations,
  createOperations,
} from "@/utils/operations";

interface Props {
  handleClick: (operationId: number) => void;
}

const ContextMenu: FC<Props> = ({ handleClick }) => {
  const {
    resources: { selected: selectedResources },
    contextMenu: { open, resourceContextMenu, anchorX, anchorY },
  } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const { width } = useResize();

  useEffect(() => {
    function handleEvent(e: MouseEvent) {
      let currentElement: HTMLElement | null = e.target as HTMLElement;
      let isInsideMainContainer = false;
      let resourceItem = false;

      while (currentElement && !resourceItem) {
        const ariaLabel = currentElement.getAttribute("aria-label");
        if (ariaLabel === "main-container") {
          isInsideMainContainer = true;
          break;
        }
        if (ariaLabel === "resource-item") {
          resourceItem = true;
          isInsideMainContainer = true;
        }
        currentElement = currentElement.parentElement;
      }

      if (isInsideMainContainer) {
        // e.preventDefault();
        dispatch(
          handleContextMenu({
            resourceContextMenu: resourceItem,
            anchorX: e.clientX,
            anchorY: e.clientY,
          })
        );
      } else if (!isInsideMainContainer && open) {
        dispatch(onContextMenuClose());
      } else {
      }
    }

    function handleClick() {
      if (open) {
        dispatch(onContextMenuClose());
      }
    }

    window.addEventListener("contextmenu", handleEvent);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("contextmenu", handleEvent);
      window.removeEventListener("click", handleClick);
    };
  }, [open]);

  useEffect(() => {
    dispatch(onContextMenuClose());
  }, [width]);

  const operations = resourceContextMenu ? mainOperations : createOperations;

  return (
    <Menu
      open={open}
      anchorReference="anchorPosition"
      anchorPosition={{ top: anchorY, left: anchorX }}
      sx={{ padding: 0, pointerEvents: "none" }}
      slotProps={{
        paper: {
          sx: {
            backgroundImage: "none",
            backgroundColor: "filterBackgroundColor.secondary",
            backdropFilter: "blur(20px)",
            maxHeight: "none",
          },
        },
      }}
      onMouseDown={(e: React.MouseEvent) => {
        e.stopPropagation();
      }}
    >
      {operations.map((operation: OperationProps) => (
        <Box key={operation.id} component="div">
          <MenuItem
            key={operation.id}
            sx={{ width: "250px", py: "10px", pointerEvents: "all" }}
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation();
              handleClick(operation.id);
              dispatch(onContextMenuClose());
            }}
            disabled={
              [5, 7].includes(operation.id) && selectedResources.length !== 1
            }
          >
            <ListItemIcon sx={{ fontSize: "12px" }}>
              {operation.icon}
            </ListItemIcon>
            <Typography sx={{ fontSize: "13px" }}>{operation.text}</Typography>
          </MenuItem>
        </Box>
      ))}
    </Menu>
  );
};

export default ContextMenu;

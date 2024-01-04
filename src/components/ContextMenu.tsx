import { useEffect } from "react";
import { useResize } from "@/hooks";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/reducers";
import {
  handleContextMenu,
  onContextMenuClose,
  resetSelectedId,
} from "@/redux/actions";
import { Menu, MenuItem, Typography, ListItemIcon } from "@mui/material";
import {
  OperationProps,
  mainOperations,
  createOperations,
} from "@/utils/operations";

export default function ContextMenu() {
  const { open, resourceContextMenu, anchorX, anchorY } = useSelector(
    (state: RootState) => state.contextMenu
  );
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
        e.preventDefault();
        dispatch(
          handleContextMenu({
            resourceContextMenu: resourceItem,
            anchorX: e.clientX,
            anchorY: e.clientY,
          })
        );
      } else if (!isInsideMainContainer && open) dispatch(onContextMenuClose());
      else;
    }

    function handleClick() {
      if (open) dispatch(onContextMenuClose());
      else dispatch(resetSelectedId());
    }

    // window.addEventListener("contextmenu", handleEvent);
    window.addEventListener("click", handleClick);

    return () => {
      // window.removeEventListener("contextmenu", handleEvent);
      window.addEventListener("click", handleClick);
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
    >
      {operations.map((operation: OperationProps) => (
        <MenuItem
          key={operation.id}
          sx={{ width: "250px", py: "10px", pointerEvents: "all" }}
          onClick={(e: React.MouseEvent) => {
            e.stopPropagation();
            console.log(`Operation: ${operation.text}`);
          }}
        >
          <ListItemIcon sx={{ fontSize: "12px" }}>
            {operation.icon}
          </ListItemIcon>
          <Typography sx={{ fontSize: "13px" }}>{operation.text}</Typography>
        </MenuItem>
      ))}
    </Menu>
  );
}

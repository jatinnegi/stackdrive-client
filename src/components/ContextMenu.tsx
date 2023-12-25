import { FC } from "react";
import { Menu, MenuItem, Typography, ListItemIcon } from "@mui/material";
import operations, { OperationProps } from "@/utils/operations";

interface Props {
  open: boolean;
  onClose: () => void;
  onMenuItemClick: (action: string) => void;
  anchorX: number;
  anchorY: number;
}

const ContextMenu: FC<Props> = ({
  open,
  onClose,
  onMenuItemClick,
  anchorX,
  anchorY,
}) => {
  return (
    <Menu
      open={open}
      onClose={onClose}
      anchorReference="anchorPosition"
      anchorPosition={{ top: anchorY, left: anchorX }}
      sx={{ padding: 0 }}
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
          sx={{ width: "250px", py: "10px" }}
          onClick={() => {
            onMenuItemClick(operation.text);
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
};

export default ContextMenu;

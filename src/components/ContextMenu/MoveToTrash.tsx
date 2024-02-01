import { FC } from "react";
import { Snackbar, Button, IconButton } from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";

interface Props {
  open: boolean;
  handleUndo: () => void;
  handleClose: () => void;
}

const MoveToTrash: FC<Props> = ({ open, handleUndo, handleClose }) => {
  const action = (
    <>
      <Button
        size="small"
        onClick={handleUndo}
        sx={{
          color: "text.secondary",
          "&:hover": {
            bgcolor: "inherit",
          },
        }}
      >
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
        sx={{
          "&:hover": {
            bgcolor: "inherit",
          },
        }}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      message="Moved to trash"
      action={action}
      sx={{
        ".MuiPaper-root": {
          bgcolor: "background.default",
          color: "text.primary",
        },
      }}
    />
  );
};

export default MoveToTrash;

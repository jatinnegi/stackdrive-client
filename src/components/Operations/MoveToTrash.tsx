import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetData, updateOperations } from "@/redux/actions";
import { RootState } from "@/redux/reducers";
import { Snackbar, Button, IconButton } from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";

const MoveToTrash: FC = () => {
  const { trash: open } = useSelector((state: RootState) => state.operations);
  const dispatch = useDispatch();

  const handleUndo = () => {
    dispatch(resetData());
    handleClose();
  };

  const handleClose = () => {
    dispatch(updateOperations({ trash: false }));
  };

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

import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateOperations } from "@/redux/actions";
import { RootState } from "@/redux/reducers";
import { Snackbar, Alert } from "@mui/material";

const FolderCreated: FC = () => {
  const { newFolderCreate: open } = useSelector(
    (state: RootState) => state.operations
  );
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(updateOperations({ newFolderCreate: false }));
  };

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity="success"
        sx={{
          width: "100%",
          bgcolor: "alert.primary.background",
        }}
      >
        New folder created
      </Alert>
    </Snackbar>
  );
};

export default FolderCreated;

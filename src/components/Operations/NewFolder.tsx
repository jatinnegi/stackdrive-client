import { FC, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateOperations } from "@/redux/actions";
import { RootState } from "@/redux/reducers";
import { TextField } from "@mui/material";
import {
  Modal,
  ModalBody,
  ModalTitle,
  ModalMain,
  ModalActions,
  ModalCancel,
  ModalSave,
} from "@/components/Modal";

const NewFolder: FC = () => {
  const { newFolder: open } = useSelector(
    (state: RootState) => state.operations
  );
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>("");

  const handleClose = () => {
    dispatch(updateOperations({ newFolder: false }));
  };

  return (
    <Modal open={open} handleClose={handleClose}>
      <ModalBody>
        <ModalTitle>Create New Folder</ModalTitle>
        <ModalMain>
          <TextField
            variant="outlined"
            label="Folder Name"
            value={value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setValue(e.currentTarget.value);
            }}
            sx={{
              width: "100%",
              my: "10px",
            }}
          />
        </ModalMain>
        <ModalActions>
          <ModalCancel
            onClick={() => {
              setValue("");
              handleClose();
            }}
          >
            Cancel
          </ModalCancel>
          <ModalSave>Create</ModalSave>
        </ModalActions>
      </ModalBody>
    </Modal>
  );
};

export default NewFolder;

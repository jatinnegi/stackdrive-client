import React, { FC, useState } from "react";
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

interface Props {
  open: boolean;
  handleClose: () => void;
}

const NewFolder: FC<Props> = ({ open, handleClose }) => {
  const [value, setValue] = useState<string>("");

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

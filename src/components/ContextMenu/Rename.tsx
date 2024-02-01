import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
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
import { ResourceProps } from "@/types";

interface Props {
  open: boolean;
  handleClose: () => void;
}

const Rename: FC<Props> = ({ open, handleClose }) => {
  const { data, selected } = useSelector((state: RootState) => state.resources);
  const [value, setValue] = useState<string>("");
  const [type, setType] = useState<string>("");

  useEffect(() => {
    const resource = data.find(
      (resource: ResourceProps) => resource.id === selected[0]
    );
    if (!resource) return;

    setValue(resource.name);
    setType(resource.type === "folder" ? "Folder" : "File");
  }, [selected]);

  return (
    <Modal open={open} handleClose={handleClose}>
      <ModalBody>
        <ModalTitle>Rename {type}</ModalTitle>
        <ModalMain>
          <TextField
            variant="outlined"
            label="New Name"
            value={value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setValue(e.currentTarget.value);
            }}
            sx={{ width: "100%", my: "10px" }}
          />
        </ModalMain>
        <ModalActions>
          <ModalCancel
            onClick={() => {
              handleClose();
            }}
          >
            Cancel
          </ModalCancel>
          <ModalSave>OK</ModalSave>
        </ModalActions>
      </ModalBody>
    </Modal>
  );
};

export default Rename;

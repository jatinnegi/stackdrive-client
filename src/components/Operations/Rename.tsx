import { FC, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/reducers";
import { updateOperations } from "@/redux/actions";
import { ResourceProps } from "@/types";
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

const Rename: FC = () => {
  const open = useSelector((state: RootState) => state.operations.rename);
  const { data, selected } = useSelector((state: RootState) => state.resources);

  const dispatch = useDispatch();
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

  const handleClose = () => {
    dispatch(updateOperations({ rename: false }));
  };

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

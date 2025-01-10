import { FC, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateOperations, updateResourcesData } from "@/redux/actions";
import { RootState } from "@/redux/reducers";
import { NewResourceProps } from "@/redux/slices/resources";
// import { TextField } from "@mui/material";
import { TextField } from "@/components/Inputs";
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
  const { folderId } = useParams();
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
            name="name"
            value={value}
            error=""
            label="Folder Name"
            autoFocus={open}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setValue(e.target.value);
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
          <ModalSave
            onClick={() => {
              const newResource: NewResourceProps = {
                parentId: folderId ? folderId : null,
                name: value,
                type: "folder",
              };
              dispatch(updateResourcesData({ newResource }));
              dispatch(updateOperations({ newFolderCreate: true }));
              setValue("");
              handleClose();
            }}
          >
            Create
          </ModalSave>
        </ModalActions>
      </ModalBody>
    </Modal>
  );
};

export default NewFolder;

import { FC, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { updateTrash, resetData } from "@/redux/actions";
import ContextMenu from "./ContextMenu";
import ContextMenuFixedView from "./ContextMenuFixedView";
import NewFolder from "./NewFolder";
import UploadFile from "./UploadFile";
import UploadFolder from "./UploadFolder";
import Rename from "./Rename";
import Share from "./Share";
import Information from "./Information";
import MoveToTrash from "./MoveToTrash";

export type Operation =
  | "newFolder"
  | "rename"
  | "share"
  | "information"
  | "trash";

interface Props {
  fixedView: boolean;
  title?: string;
}

const ContextMenuMain: FC<Props> = ({ fixedView, title }) => {
  const dispatch = useDispatch();
  const [operation, setOperation] = useState<Operation | null>(null);
  const uploadFileRef = useRef<HTMLInputElement | null>(null);
  const uploadFolderRef = useRef<HTMLInputElement | null>(null);

  function handleClick(operationId: number) {
    if (operationId === 1) {
      setOperation("newFolder");
    } else if (operationId === 2 && uploadFileRef.current) {
      uploadFileRef.current.click();
    } else if (operationId === 3 && uploadFolderRef.current) {
      uploadFolderRef.current.click();
    } else if (operationId === 4) {
    } else if (operationId === 5) {
      setOperation("rename");
    } else if (operationId === 6) {
      setOperation("share");
    } else if (operationId === 7) {
      setOperation("information");
    } else if (operationId === 8) {
      dispatch(updateTrash());
      setOperation("trash");
    }
  }

  function handleClose() {
    setOperation(null);
  }

  const Context = fixedView ? (
    <ContextMenuFixedView title={title || ""} handleClick={handleClick} />
  ) : (
    <ContextMenu handleClick={handleClick} />
  );

  return (
    <>
      {Context}
      <NewFolder open={operation === "newFolder"} handleClose={handleClose} />
      <UploadFile ref={uploadFileRef} />
      <UploadFolder ref={uploadFolderRef} />
      <Rename open={operation === "rename"} handleClose={handleClose} />
      <Share open={operation === "share"} handleClose={handleClose} />
      <Information
        open={operation === "information"}
        handleClose={handleClose}
      />
      <MoveToTrash
        open={operation === "trash"}
        handleUndo={() => {
          dispatch(resetData());
          handleClose();
        }}
        handleClose={handleClose}
      />
    </>
  );
};

export default ContextMenuMain;

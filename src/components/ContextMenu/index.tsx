import { FC, useRef } from "react";
import { useDispatch } from "react-redux";
import { updateTrash, updateOperations } from "@/redux/actions";
import ContextMenu from "./ContextMenu";
import ContextMenuFixedView from "./ContextMenuFixedView";

interface Props {
  title?: string;
  fixedView?: boolean;
}

const ContextMenuMain: FC<Props> = ({ fixedView = false, title = "" }) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const folderInputRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useDispatch();

  const handleClick = (operationId: number) => {
    if (operationId === 1) {
      dispatch(updateOperations({ newFolder: true }));
    } else if (operationId === 2 && fileInputRef.current) {
      fileInputRef.current.click();
    } else if (operationId === 3 && folderInputRef.current) {
      folderInputRef.current.click();
    } else if (operationId === 4) {
      console.log("handle download");
    } else if (operationId === 5) {
      dispatch(updateOperations({ rename: true }));
    } else if (operationId === 6) {
      dispatch(updateOperations({ share: true }));
    } else if (operationId === 7) {
      dispatch(updateOperations({ information: true }));
    } else if (operationId === 8) {
      dispatch(updateTrash());
      dispatch(updateOperations({ trash: true }));
    }
  };

  const Context = fixedView ? (
    <ContextMenuFixedView title={title} handleClick={handleClick} />
  ) : (
    <ContextMenu handleClick={handleClick} />
  );

  return (
    <>
      {Context}
      <input
        ref={fileInputRef}
        type="file"
        style={{ display: "none" }}
        multiple
      />
      <input
        ref={folderInputRef}
        type="file"
        style={{ display: "none" }}
        {...({
          webkitdirectory: "",
          directory: "",
        } as any)}
      />
    </>
  );
};

export default ContextMenuMain;

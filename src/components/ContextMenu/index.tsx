import { FC, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/reducers";
import {
  updateTrash,
  updateOperations,
  appendNavigation,
} from "@/redux/actions";
import { ResourceProps } from "@/types";
import { getResourceById } from "@/utils/helper";
import ContextMenu from "./ContextMenu";
import ContextMenuFixedView from "./ContextMenuFixedView";

interface Props {
  title?: string;
  fixedView?: boolean;
}

const ContextMenuMain: FC<Props> = ({ fixedView = false, title = "" }) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const folderInputRef = useRef<HTMLInputElement | null>(null);

  const navigate = useNavigate();
  const { selected, data } = useSelector((state: RootState) => state.resources);
  const dispatch = useDispatch();

  const handleClick = (operationId: number) => {
    if (operationId === 1) {
      dispatch(updateOperations({ newFolder: true }));
    } else if (operationId === 2 && fileInputRef.current) {
      fileInputRef.current.click();
    } else if (operationId === 3 && folderInputRef.current) {
      folderInputRef.current.click();
    } else if (operationId === 4) {
      const item: ResourceProps | undefined = getResourceById(
        selected[0],
        data
      );

      if (!item) {
        return;
      }

      if (item.type === "folder") {
        navigate(`/dashboard/folders/${item.id}`);
        dispatch(appendNavigation({ id: item.id, name: item.name }));
      } else {
        dispatch(updateOperations({ information: true }));
      }
    } else if (operationId === 5) {
      console.log("handle download");
    } else if (operationId === 6) {
      dispatch(updateOperations({ rename: true }));
    } else if (operationId === 7) {
      dispatch(updateOperations({ share: true }));
    } else if (operationId === 8) {
      dispatch(updateOperations({ information: true }));
    } else if (operationId === 9) {
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

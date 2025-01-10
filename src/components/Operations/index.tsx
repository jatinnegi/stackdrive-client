import { FC } from "react";
import NewFolder from "./NewFolder";
import Rename from "./Rename";
import Share from "./Share";
import Information from "./Information";
import MoveToTrash from "./MoveToTrash";
import FolderCreated from "./FolderCreated";

const Operations: FC = () => {
  return (
    <>
      <NewFolder />
      <Rename />
      <Share />
      <Information />
      <MoveToTrash />
      <FolderCreated />
    </>
  );
};

export default Operations;

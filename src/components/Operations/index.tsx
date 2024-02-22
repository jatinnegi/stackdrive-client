import { FC } from "react";
import NewFolder from "./NewFolder";
import Rename from "./Rename";
import Share from "./Share";
import Information from "./Information";
import MoveToTrash from "./MoveToTrash";

const Operations: FC = () => {
  return (
    <>
      <NewFolder />
      <Rename />
      <Share />
      <Information />
      <MoveToTrash />
    </>
  );
};

export default Operations;

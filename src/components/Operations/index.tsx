import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/reducers";
import { updateMyDrive } from "@/redux/actions";
import NewFolder from "./NewFolder";

export default function Operations() {
  const { operation } = useSelector((state: RootState) => state.myDrive);
  const dispatch = useDispatch();

  function handleClose(e: React.MouseEvent) {
    e.stopPropagation();
    dispatch(updateMyDrive({ operation: null }));
  }

  return (
    <>
      <NewFolder open={operation === "newFolder"} handleClose={handleClose} />
    </>
  );
}

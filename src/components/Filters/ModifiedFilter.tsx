import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/reducers";
import { updateMyDrive } from "@/redux/actions";
import { Box } from "@mui/material";
import {
  Modal,
  ModalBody,
  ModalTitle,
  ModalMain,
  ModalActions,
  ModalCancel,
  ModalSave,
} from "@/components/Modal";
import DateCalendar from "@/components/DateCalendar";

const ModifiedFilter: FC = () => {
  const { displayModifiedFilter } = useSelector(
    (state: RootState) => state.myDrive
  );
  const dispatch = useDispatch();

  const open = displayModifiedFilter;

  function handleClose() {
    dispatch(updateMyDrive({ displayModifiedFilter: false }));
  }

  return (
    <Modal open={open} handleClose={handleClose}>
      <ModalBody
        sx={{
          maxWidth: "750px",
          height: "90vh",
          maxHeight: "480px",
        }}
      >
        <ModalTitle>Selected Date Range</ModalTitle>
        <ModalMain
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
            },
            gap: "20px",
            overflowX: {
              xs: "scroll",
              md: "hidden",
            },
            overflowY: "scroll",
          }}
        >
          <Box
            component="div"
            sx={{
              borderColor: "border.primary",
              borderStyle: "dashed",
              borderWidth: "1px",
              borderRadius: "8px",
            }}
          >
            <DateCalendar />
          </Box>
          <Box
            component="div"
            sx={{
              borderColor: "border.primary",
              borderStyle: "dashed",
              borderWidth: "1px",
              borderRadius: "8px",
            }}
          >
            <DateCalendar />
          </Box>
        </ModalMain>
        <ModalActions>
          <ModalCancel
            onClick={() => {
              console.log("cancel");
            }}
          >
            Cancel
          </ModalCancel>
          <ModalSave
            onClick={() => {
              console.log("apply");
            }}
          >
            Apply
          </ModalSave>
        </ModalActions>
      </ModalBody>
    </Modal>
  );
};

export default ModifiedFilter;

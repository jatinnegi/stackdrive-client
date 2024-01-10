import { FC, PropsWithChildren } from "react";
import { Backdrop } from "@mui/material";
import ModalBody from "./ModalBody";
import ModalTitle from "./ModalTitle";
import ModalMain from "./ModalMain";
import ModalActions from "./ModalActions";
import ModalCancel from "./ModalActions/ModalCancel";
import ModalSave from "./ModalActions/ModalSave";

interface Props extends PropsWithChildren {
  open: boolean;
  handleClose: (e: React.MouseEvent) => void;
}

const Modal: FC<Props> = ({ open, handleClose, children }) => {
  return (
    <Backdrop
      open={open}
      sx={{
        zIndex: 40,
        backgroundColor: "backdrop.primary",
      }}
      onClick={handleClose}
      onMouseDown={(e: React.MouseEvent) => {
        e.stopPropagation();
      }}
    >
      {children}
    </Backdrop>
  );
};

export {
  Modal,
  ModalBody,
  ModalTitle,
  ModalMain,
  ModalActions,
  ModalCancel,
  ModalSave,
};

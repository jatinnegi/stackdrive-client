import { FC, PropsWithChildren, useEffect } from "react";
import ReactDOM from "react-dom";
import { Backdrop } from "@mui/material";
import ModalBody from "./ModalBody";
import ModalTitle from "./ModalTitle";
import ModalMain from "./ModalMain";
import ModalActions from "./ModalActions";
import ModalCancel from "./ModalActions/ModalCancel";
import ModalSave from "./ModalActions/ModalSave";

interface Props extends PropsWithChildren {
  open: boolean;
  handleClose: () => void;
  updateWindowScroll?: boolean;
}

const Modal: FC<Props> = ({
  open,
  handleClose,
  updateWindowScroll = true,
  children,
}) => {
  useEffect(() => {
    function handleKeyUp(e: KeyboardEvent) {
      if (e.key === "Escape" && open) {
        handleClose();
      }
    }
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [open]);

  useEffect(() => {
    if (!updateWindowScroll) {
      return;
    }

    if (open) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [open, updateWindowScroll]);

  return ReactDOM.createPortal(
    <Backdrop
      open={open}
      sx={{
        zIndex: 40,
        bgcolor: "backdrop.primary",
      }}
      onMouseDown={(e: React.MouseEvent) => {
        e.stopPropagation();
        handleClose();
      }}
    >
      {children}
    </Backdrop>,
    document.getElementById("modal-root")!
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

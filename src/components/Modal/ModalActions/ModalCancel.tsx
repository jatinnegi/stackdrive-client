import { FC, PropsWithChildren } from "react";
import { Button, ButtonProps } from "@mui/material";

type Props = ButtonProps & PropsWithChildren;

const ModalCancel: FC<Props> = ({ children, ...props }) => {
  return (
    <Button
      sx={{
        color: "text.primary",
        textTransform: "capitalize",
        borderRadius: "5px",
        padding: "5px 10px",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "text.primary",
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default ModalCancel;

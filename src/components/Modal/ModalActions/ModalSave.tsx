import { FC, PropsWithChildren } from "react";
import { Button, ButtonProps } from "@mui/material";

type Props = ButtonProps & PropsWithChildren;

const ModalSave: FC<Props> = ({ children, ...props }) => {
  return (
    <Button
      sx={{
        marginLeft: "10px",
        textTransform: "capitalize",
        borderRadius: "5px",
        padding: "5px 10px",
        backgroundColor: "button.primary.background",
        color: "button.primary.text",
        fontWeight: 700,
        "&:hover": {
          backgroundColor: "button.primary.hover",
        },
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default ModalSave;

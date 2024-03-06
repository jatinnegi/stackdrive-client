import { FC, PropsWithChildren } from "react";
import { Button, ButtonProps } from "@mui/material";

interface PricingButtonProps extends PropsWithChildren, ButtonProps {
  isSelected: boolean;
}

const PricingButton: FC<PricingButtonProps> = ({
  isSelected,
  children,
  ...props
}) => (
  <Button
    type="button"
    sx={{
      width: "48%",
      height: "60px",
      textTransform: "capitalize",
      fontSize: "16px",
      color: isSelected ? "#FFF" : "text.primary",
      bgcolor: isSelected ? "icon.selected" : "none",
      ":hover": {
        bgcolor: isSelected ? "icon.selected" : "none",
      },
    }}
    {...props}
  >
    {children}
  </Button>
);

export default PricingButton;

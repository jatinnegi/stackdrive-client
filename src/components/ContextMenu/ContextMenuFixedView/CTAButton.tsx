import { FC } from "react";
import { Button, Typography } from "@mui/material";
import { ArrowDropDown as ArrowDropDownIcon } from "@mui/icons-material";

interface Props {
  title: string;
  handleMenuClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const CTAButton: FC<Props> = ({ title, handleMenuClick }) => {
  return (
    <Button
      sx={{
        transition: "none",
        color: "text.primary",
        padding: {
          xs: "7px",
          md: "7px 20px",
        },
        borderRadius: {
          xs: "5px",
          md: "30px",
        },
      }}
      onClick={handleMenuClick}
    >
      <Typography
        fontWeight={500}
        fontSize={{ xs: "12px", sm: "14px", md: "20px" }}
        sx={{
          textTransform: "capitalize",
          maxWidth: {
            xs: "70px",
            md: "180px",
          },
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
        }}
      >
        {title}
      </Typography>
      <ArrowDropDownIcon
        sx={{
          marginLeft: {
            xs: "3px",
            md: "10px",
          },
          fontSize: {
            xs: "16px",
            sm: "20px",
            md: "24px",
          },
        }}
      />
    </Button>
  );
};

export default CTAButton;

import { FC } from "react";
import { Button, Typography } from "@mui/material";

interface Props {
  title: string;
  handleClick: () => void;
}

const LinkButton: FC<Props> = ({ title, handleClick }) => {
  return (
    <Button
      sx={{
        transition: "none",
        color: "text.secondary",
        padding: {
          xs: "7px",
          md: "7px 20px",
        },
        borderRadius: {
          xs: "5px",
          md: "30px",
        },
      }}
      onClick={handleClick}
    >
      <Typography
        fontWeight={500}
        fontSize={{
          xs: "14px",
          sm: "18px",
          md: "22px",
        }}
        sx={{
          textTransform: "capitalize",
          maxWidth: "150px",
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
        }}
      >
        {title}
      </Typography>
    </Button>
  );
};

export default LinkButton;

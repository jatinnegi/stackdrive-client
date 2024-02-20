import { FC } from "react";
import {
  Button as MuiButton,
  CircularProgress,
  Typography,
} from "@mui/material";

interface Props {
  type: "button" | "reset" | "submit";
  value: string;
  loading: boolean;
}

const Button: FC<Props> = ({ type, value, loading }) => {
  return (
    <MuiButton
      type={type}
      variant="contained"
      disableElevation
      sx={{
        bgcolor: loading
          ? "button.primary.loading"
          : "button.primary.background",
        height: "45px",
        borderRadius: "0.475rem",
        ":hover": {
          bgcolor: loading ? "button.primary.loading" : "button.primary.hover",
        },
      }}
      disabled={loading}
    >
      {loading ? (
        <CircularProgress
          style={{ color: "rgba(145, 158, 171, 0.5)", padding: "8px" }}
        />
      ) : (
        <Typography
          sx={{
            textTransform: "capitalize",
            color: "button.primary.text",
            fontWeight: 700,
            fontSize: "0.875rem",
          }}
        >
          {value}
        </Typography>
      )}
    </MuiButton>
  );
};

export default Button;

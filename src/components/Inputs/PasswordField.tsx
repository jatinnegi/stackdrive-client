import { FC, useState } from "react";
import {
  FormControl,
  FormHelperText,
  TextField,
  IconButton,
} from "@mui/material";
import {
  VisibilityRounded as VisibilityIcon,
  VisibilityOffRounded as VisibilityOffIcon,
} from "@mui/icons-material";

interface Props {
  name: string;
  value: string;
  label: string;
  error: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PasswordField: FC<Props> = ({
  name,
  value,
  label,
  error,
  onChange,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <FormControl>
      <TextField
        variant="outlined"
        name={name}
        label={label}
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={onChange}
        sx={{
          width: "100%",
          "& label": {
            color: error ? "text.danger" : "default",
          },
          "& label.Mui-focused": {
            color: error ? "text.danger" : "default",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: error ? "text.danger" : "default",
            },
            "&:hover fieldset": {
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: error ? "text.danger" : "default",
            },
            "&.Mui-focused fieldset": {
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: error ? "text.danger" : "default",
            },
          },
        }}
        autoComplete="off"
        InputLabelProps={{ sx: { fontSize: "0.875rem" } }}
        InputProps={{
          sx: {
            borderRadius: "7px",
            fontSize: "0.875rem",
          },
          endAdornment: (
            <>
              {showPassword ? (
                <IconButton
                  onClick={() => {
                    setShowPassword(false);
                  }}
                >
                  <VisibilityIcon sx={{ fontSize: "1.25rem" }} />
                </IconButton>
              ) : (
                <IconButton
                  onClick={() => {
                    setShowPassword(true);
                  }}
                >
                  <VisibilityOffIcon sx={{ fontSize: "1.25rem" }} />
                </IconButton>
              )}
            </>
          ),
        }}
      />
      {error && (
        <FormHelperText
          sx={{
            margin: "4px 10px 0px 10px",
            color: "rgb(255, 86, 48)",
          }}
        >
          {error}
        </FormHelperText>
      )}
    </FormControl>
  );
};

import { FC } from "react";
import {
  FormControl,
  FormHelperText,
  TextField as MuiTextField,
} from "@mui/material";

interface Props {
  name: string;
  value: string;
  label: string;
  error: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField: FC<Props> = ({ name, value, label, error, onChange }) => {
  return (
    <FormControl>
      <MuiTextField
        variant="outlined"
        name={name}
        label={label}
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
        InputLabelProps={{
          sx: {
            fontSize: "0.875rem",
          },
        }}
        InputProps={{
          sx: {
            borderRadius: "7px",
            fontSize: "0.875rem",
          },
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

export default TextField;

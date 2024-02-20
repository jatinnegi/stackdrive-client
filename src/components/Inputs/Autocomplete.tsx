import { FC, useMemo } from "react";
import {
  TextField,
  Autocomplete as MUIAutocomplete,
  AutocompleteChangeReason,
  CircularProgress,
} from "@mui/material";

interface Props {
  label: string;
  value: string;
  loading: boolean;
  options: any[];
  selectedValues: any[];
  handleOptionClick: (values: any[]) => void;
  handleValueChange: (newValue: string) => void;
  getOptionLabel: (option: any) => string;
  renderOption: (key: string) => JSX.Element;
}

export const Autocomplete: FC<Props> = ({
  label,
  value,
  loading,
  options,
  selectedValues,
  handleOptionClick,
  handleValueChange,
  getOptionLabel,
  renderOption,
}) => {
  const hideAutoCompleteMenu = useMemo(() => {
    if (value.length === 0 || loading || options.length === 0) return true;
    return false;
  }, [value, loading, options]);

  return (
    <MUIAutocomplete
      multiple
      loading={loading}
      options={options}
      getOptionLabel={getOptionLabel}
      value={selectedValues}
      filterSelectedOptions
      onChange={(
        _: React.ChangeEvent<{}>,
        values: any[] | null,
        reason: AutocompleteChangeReason
      ) => {
        if (!values) return;

        if (reason === "selectOption") {
          handleOptionClick(values);
        } else if (reason === "removeOption") {
          handleOptionClick(values);
          handleValueChange("");
        }
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            handleValueChange(e.target.value);
          }}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
      renderOption={(option: any) => {
        const key = option.key;

        if (!key) return <></>;

        return renderOption(key);
      }}
      slotProps={
        hideAutoCompleteMenu
          ? {
              paper: {
                sx: {
                  display: "none",
                },
              },
            }
          : {}
      }
    />
  );
};

import { FC, useMemo } from "react";
import {
  Select,
  InputAdornment,
  TextField,
  MenuItem,
  Typography,
  Box,
} from "@mui/material";
import { countries } from "@/data";
import { CountryType } from "@/types";

const incrementCodepoint = (codePoint: string, incrementBy: number): string => {
  const decimal = parseInt(codePoint, 16);
  return Number(decimal + incrementBy).toString(16);
};

const alphabet = "abcdefghijklmnopqrstuvwxyz";

const A_LETTER_CODEPOINT = "1f1e6";
const codepoints: Record<string, string> = alphabet
  .split("")
  .reduce((obj, currentLetter, index) => {
    return {
      ...obj,
      [currentLetter]: incrementCodepoint(A_LETTER_CODEPOINT, index),
    };
  }, {});

const getFlagCodepointByIso2 = (iso2: string) => {
  return [codepoints[iso2[0]], codepoints[iso2[1]]].join("-");
};

interface Props {
  name: string;
  countryCode: string;
  setCountryCode: (newCountryCode: string) => void;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Phone: FC<Props> = ({
  name,
  countryCode,
  setCountryCode,
  value,
  onChange,
}) => {
  const getSrc = (code: string) => {
    const flagCodepoint = getFlagCodepointByIso2(code);
    return `https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/${flagCodepoint}.svg`;
  };

  const selectedCountry = useMemo(
    () =>
      countries.find((country: CountryType) => country.code === countryCode),
    [countryCode]
  );

  if (!selectedCountry) {
    return <></>;
  }

  return (
    <TextField
      name={name}
      label="Phone Number"
      value={value}
      onChange={onChange}
      autoComplete="off"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Select
              MenuProps={{
                style: {
                  height: "300px",
                  width: "360px",
                  top: "10px",
                  left: "-34px",
                },
                transformOrigin: {
                  vertical: "top",
                  horizontal: "left",
                },
              }}
              sx={{
                position: "relative",
                width: "max-content",
                fieldset: {
                  display: "none",
                },
                '&.Mui-focused:has(div[aria-expanded="false"])': {
                  fieldset: {
                    display: "block",
                  },
                },
                ".MuiSelect-select": {
                  padding: "8px",
                  paddingRight: "24px !important",
                },
              }}
              value={countryCode}
              onChange={(e) => {
                e.target.value;
              }}
              renderValue={(value) => (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "7px",
                  }}
                >
                  <img
                    src={getSrc(value.toLowerCase())}
                    alt={value}
                    width="25px"
                  />
                </Box>
              )}
            >
              {countries.map((country: CountryType) => (
                <MenuItem
                  key={country.code}
                  onClick={() => {
                    setCountryCode(country.code);
                  }}
                >
                  <img
                    src={getSrc(country.code.toLowerCase())}
                    alt={country.code}
                    width="25px"
                  />
                  <Typography
                    sx={{
                      marginLeft: "8px",
                      fontSize: "14px",
                      maxWidth: "180px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {country.label}
                  </Typography>
                  <Typography
                    sx={{
                      marginLeft: "8px",
                      color: "text.secondary",
                      fontSize: "12px",
                    }}
                  >
                    +{country.phone}
                  </Typography>
                </MenuItem>
              ))}
            </Select>
            <Typography>+ {selectedCountry.phone}</Typography>
          </InputAdornment>
        ),
      }}
    />
  );
};

import { useState } from "react";
import {
  CssBaseline,
  Container,
  Typography,
  Checkbox,
  FormControlLabel,
  FormControl,
} from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { darkTheme, lightTheme } from "@/theme.tsx";

export default function Home() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <FormControl style={{ userSelect: "none" }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={darkMode}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setDarkMode(e.target.checked);
                }}
              />
            }
            label="Dark Mode"
          />
        </FormControl>
        <Typography variant="h5">Material UI + Typescript</Typography>
      </Container>
    </ThemeProvider>
  );
}

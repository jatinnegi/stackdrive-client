import { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./redux/reducers";
import { ThemeProvider } from "@emotion/react";
import { darkTheme, lightTheme } from "@/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import DashboardLayout from "@/layout/DashboardLayout";
import Home from "@/pages";
import MyDrive from "@/pages/dashboard/MyDrive";

export default function App() {
  const { theme } = useSelector((state: RootState) => state.settings);

  const currentTheme = useMemo(() => {
    if (theme === "light") return lightTheme;
    return darkTheme;
  }, [theme]);

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<MyDrive />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

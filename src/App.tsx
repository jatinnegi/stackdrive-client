import { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./redux/reducers";
import { ThemeProvider } from "@emotion/react";
import { darkTheme, lightTheme } from "@/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";

// Layouts
import DashboardLayout from "@/layout/DashboardLayout";
import AuthLayout from "@/layout/AuthLayout";

// Pages
import Home from "@/pages";
import MyDrive from "@/pages/dashboard/MyDrive";
import Profile from "@/pages/dashboard/Profile";
import Login from "@/pages/auth/Login";

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
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
          </Route>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<MyDrive />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

import { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./redux/reducers";
import { ThemeProvider } from "@emotion/react";
import { darkTheme, lightTheme } from "@/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import ToastMessages from "@/components/Toast";

// Layouts
import DashboardLayout from "./layout/DashboardLayout";
import AuthLayout from "@/layout/AuthLayout";

// Pages
import Home from "@/pages";
import MyDrive from "@/pages/dashboard/MyDrive";
import Profile from "@/pages/dashboard/Profile";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import ForgotPassword from "@/pages/auth/ForgotPassword";
import NewPassword from "@/pages/auth/NewPassword";

export default function App() {
  const { theme } = useSelector((state: RootState) => state.settings);

  const currentTheme = useMemo(() => {
    if (theme === "light") return lightTheme;
    return darkTheme;
  }, [theme]);

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <ToastMessages />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route path="/auth/forgot-password" element={<ForgotPassword />} />
          <Route path="/auth/new-password" element={<NewPassword />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<MyDrive />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

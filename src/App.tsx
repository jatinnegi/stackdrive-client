import { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./redux/reducers";
import { updateSettings } from "./redux/actions";
import { ThemeProvider } from "@emotion/react";
import { darkTheme, lightTheme } from "@/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline, useMediaQuery } from "@mui/material";
import ToastMessages from "@/components/Toast";

// Layouts
import GuestLayout from "@/layout/GuestLayout";
import DashboardLayout from "@/layout/DashboardLayout";
import AuthLayout from "@/layout/AuthLayout";

// Pages
import Home from "@/pages";
import MyDrive from "@/pages/dashboard/MyDrive";
import Profile from "@/pages/dashboard/Profile";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import ForgotPassword from "@/pages/auth/ForgotPassword";
import NewPassword from "@/pages/auth/NewPassword";
import UnderConstruction from "@/pages/UnderConstruction";
import Error404 from "@/pages/Error404";

interface LinkProps {
  id: number;
  path: string;
}

const underConstructionLinks: LinkProps[] = [
  { id: 1, path: "/dashboard/shared-with-me" },
  { id: 2, path: "/dashboard/recent" },
  { id: 3, path: "/dashboard/starred" },
  { id: 4, path: "/dashboard/spam" },
  { id: 5, path: "/dashboard/trash" },
  { id: 6, path: "/dashboard/storage" },
];

export default function App() {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.settings.theme);
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  useEffect(() => {
    if (prefersDarkMode) {
      dispatch(updateSettings({ theme: "dark" }));
    } else {
      dispatch(updateSettings({ theme: "light" }));
    }
  }, [prefersDarkMode]);

  const currentTheme = useMemo(() => {
    if (theme === "light") {
      return lightTheme;
    }
    return darkTheme;
  }, [theme]);

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <ToastMessages />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GuestLayout />}>
            <Route index element={<Home />} />
            <Route path="auth" element={<AuthLayout />}>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>
            <Route path="auth/forgot-password" element={<ForgotPassword />} />
            <Route path="auth/new-password" element={<NewPassword />} />
          </Route>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<MyDrive />} />
            <Route path="folders/:folderId" element={<MyDrive />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          {underConstructionLinks.map((link: LinkProps) => (
            <Route
              key={link.id}
              path={link.path}
              element={<UnderConstruction />}
            />
          ))}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

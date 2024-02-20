import { FC, useState } from "react";
import { v4 } from "uuid";
import { useNavigate, Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { ChevronLeftRounded as ChevronLeftIcon } from "@mui/icons-material";
import Lock from "@/components/Art/Lock";
import { TextField } from "@/components/Inputs";
import Button from "@/components/Button";
import { ErrorAlert } from "@/components/Alerts";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/reducers";

const ForgotPassword: FC = () => {
  const navigate = useNavigate();
  const { theme } = useSelector((state: RootState) => state.settings);
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const cleanedEmail = email.trim();

    if (cleanedEmail === "") {
      setEmailError("Email is required");
      return;
    }
    if (!emailPattern.test(cleanedEmail)) {
      setEmailError("Enter a valid email");
      return;
    }

    try {
      setLoading(true);
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (cleanedEmail === "demo@stackdrive.com") {
            resolve(true);
          } else {
            setEmailError("");
            reject(new Error("No user found with this email"));
          }
        }, 3000);
      });
      const id = v4();
      navigate(`/auth/new-password?id=${id}`);
    } catch (error) {
      if (error instanceof Error) setError(error.message);
      else console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      component="div"
      sx={{
        width: "90%",
        maxWidth: "380px",
        margin: "40px auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box component="div" sx={{ height: "100px", width: "100px" }}>
        <Lock />
      </Box>
      <Typography
        sx={{
          fontSize: "24px",
          fontWeight: 600,
          margin: "20px 0px 10px 0px",
          textAlign: "center",
        }}
      >
        Forgot your password?
      </Typography>
      <Typography
        sx={{
          fontSize: "12px",
          fontWeight: 400,
          margin: "10px 0px 20px 0px",
          color: "text.secondary",
          textAlign: "center",
        }}
      >
        Please enter the email address associated with your account and We will
        email you a link to reset your password.
      </Typography>
      {error.trim() !== "" && (
        <Box component="div" sx={{ width: "100%", mt: 1 }}>
          <ErrorAlert>
            <Typography sx={{ fontSize: "12px" }}>{error}</Typography>
          </ErrorAlert>
        </Box>
      )}
      <form
        onSubmit={handleSubmit}
        style={{
          margin: "15px 0px",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          gap: "20px",
        }}
      >
        <TextField
          label="Email address"
          value={email}
          error={emailError}
          name="email"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value);
          }}
        />
        <Button loading={loading} type="submit" value="Send Request" />
      </form>
      <Link
        to="/auth/login"
        style={{
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
          color: theme === "dark" ? "#FFFFFF" : "rgb(33, 43, 54)",
          fontSize: "14px",
          fontWeight: 600,
        }}
      >
        <ChevronLeftIcon /> Return to sign in
      </Link>
    </Box>
  );
};

export default ForgotPassword;

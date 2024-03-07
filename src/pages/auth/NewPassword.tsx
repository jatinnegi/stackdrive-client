import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/reducers";
import { Link } from "react-router-dom";
import { addToastMessage } from "@/utils/helper";
import { Box, Typography } from "@mui/material";
import { ChevronLeftRounded as ChevronLeftIcon } from "@mui/icons-material";
import PaperPlane from "@/illustrations/PaperPlane";
import Button from "@/components/Button";
import { ErrorAlert } from "@/components/Alerts";
import { PasswordField, OtpField } from "@/components/Inputs";
import constants from "@/constants";
import withGuest from "@/hoc/withGuest";

interface FormProps {
  otp: string;
  password: string;
  confirmPassword: string;
}

const NewPassword: FC = () => {
  const navigate = useNavigate();
  const { theme } = useSelector((state: RootState) => state.settings);
  const dispatch = useDispatch();

  const [form, setForm] = useState<FormProps>({
    otp: "",
    password: "",
    confirmPassword: "",
  });
  const [formErrors, setFormErrors] = useState<FormProps>({
    otp: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (form.otp.length === 6) {
      setFormErrors({ ...formErrors, otp: "" });
    }
  }, [form.otp]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (form.otp.length !== 6) {
      setFormErrors({
        otp: "Otp must be 6 digits",
        password: "",
        confirmPassword: "",
      });
      return;
    } else if (form.password === "") {
      setFormErrors({
        otp: "",
        password: "Password is required",
        confirmPassword: "",
      });
      return;
    } else if (form.password !== form.confirmPassword) {
      setFormErrors({
        otp: "",
        password: "",
        confirmPassword: "Passwords don't match",
      });
      return;
    } else {
      setFormErrors({ otp: "", password: "", confirmPassword: "" });
    }

    try {
      setLoading(true);
      setError("");
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (form.otp === "756770") {
            resolve(true);
          } else {
            reject(new Error("Incorrect Code"));
          }
        }, 3000);
      });
      addToastMessage(dispatch, "Password reset successfull!");
      navigate("/auth/login");
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        console.log(error);
      }
    } finally {
      setLoading(false);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const resendOtp = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
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
        padding: `${constants.appbar - 10}px 0px`,
      }}
    >
      <Box component="div" sx={{ height: "100px", width: "100px" }}>
        <PaperPlane />
      </Box>
      <Typography
        sx={{
          fontSize: "24px",
          fontWeight: 600,
          margin: "20px 0px 10px 0px",
          textAlign: "center",
        }}
      >
        Request sent successfully!
      </Typography>
      <Typography
        sx={{
          fontSize: "12px",
          fontWeight: 400,
          margin: "5px 0px 20px 0px",
          color: "text.secondary",
          textAlign: "center",
        }}
      >
        We've sent a 6-digit confirmation email to{" "}
        <Box
          component="span"
          sx={{
            fontWeight: 600,
          }}
        >
          demo@stackdrive.com
        </Box>
        . Please enter the code in below box to verify your email.
      </Typography>
      {error.trim() !== "" && (
        <Box component="div" sx={{ width: "100%", mt: 1 }}>
          <ErrorAlert>
            <Typography sx={{ fontSize: "13px" }}>{error}</Typography>
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
        <OtpField
          setValue={(newValue: string) => {
            setForm({ ...form, otp: newValue });
          }}
          error={formErrors.otp}
        />
        <PasswordField
          name="password"
          label="Password"
          value={form.password}
          error={formErrors.password}
          onChange={onChange}
        />
        <PasswordField
          name="confirmPassword"
          label="Confirm Password"
          value={form.confirmPassword}
          error={formErrors.confirmPassword}
          onChange={onChange}
        />
        <Button loading={loading} type="submit" value="Update Password" />
      </form>
      <Typography
        sx={{
          fontSize: "14px",
          fontWeight: 500,
          mb: 2,
          color: "text.secondary",
        }}
      >
        Don't have a code?{" "}
        <Box
          component="span"
          sx={{
            color: "rgb(32, 101, 209)",
            cursor: "pointer",
            ":hover": {
              textDecoration: "underline",
            },
          }}
          onClick={resendOtp}
        >
          Resend code
        </Box>
      </Typography>
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

export default withGuest(NewPassword);

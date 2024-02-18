import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { loginValidation } from "@/validation/auth";
import { Typography, Box, Button, CircularProgress } from "@mui/material";
import TextField from "@/components/Inputs/TextField";
import InfoIcon from "@/icons/Info";
import PasswordField from "@/components/Inputs/PasswordField";

interface FormProps {
  email: string;
  password: string;
}

const Login: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [form, setForm] = useState<FormProps>({ email: "", password: "" });
  const [errors, setErrors] = useState<FormProps>({ email: "", password: "" });
  const [formError, setFormError] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { hasErrors, errors }: { hasErrors: boolean; errors: FormProps } =
      loginValidation(form.email, form.password);
    setErrors(errors);
    if (hasErrors) {
      return;
    }

    try {
      setLoading(true);
      const data = await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (
            form.email === "demo@stackdrive.com" &&
            form.password === "demo1234"
          ) {
            resolve(form);
          } else {
            reject(new Error("Invalid credentials"));
          }
        }, 3000);
      });
      setFormError("");
      console.log(data);
    } catch (error) {
      if (error instanceof Error) {
        setFormError(error.message);
      } else {
        console.error(error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      component="div"
      sx={{
        width: "90%",
        maxWidth: {
          xs: "450px",
          lg: "none",
        },
        margin: {
          xs: "40px auto",
        },
        a: {
          color: "text.secondary",
          fontWeight: 500,
          textDecoration: "none",
        },
      }}
    >
      <Typography sx={{ fontSize: "28px", fontWeight: 600 }}>
        Welcome, back
      </Typography>
      <Typography
        sx={{
          fontSize: "14px",
          mt: 2,
          mb: 5,
          color: "text.secondary",
          fontWeight: 500,
        }}
      >
        New User?{" "}
        <Link
          to="/auth/register"
          style={{
            color: "rgb(32, 101, 209)",
            fontWeight: 700,
          }}
        >
          Create an account
        </Link>
      </Typography>
      {formError.trim() !== "" && (
        <Box
          component="div"
          sx={{
            mb: 1.5,
            bgcolor: "alert.danger.background",
            p: 2,
            borderRadius: 2,
            display: "flex",
            alignItems: "flex-start",
            gap: "10px",
          }}
        >
          <Typography
            sx={{
              color: "alert.danger.text",
              fontSize: "0.8rem",
              fontWeight: 400,
            }}
          >
            {formError}
          </Typography>
        </Box>
      )}
      <Box
        component="div"
        sx={{
          bgcolor: "alert.primary.background",
          p: 2,
          borderRadius: 2,
          display: "flex",
          alignItems: "flex-start",
          gap: "10px",
        }}
      >
        <Box component="div" sx={{ width: "25px", height: "25px" }}>
          <InfoIcon />
        </Box>
        <Typography
          sx={{
            color: "alert.primary.text",
            fontSize: "0.875rem",
            fontWeight: 400,
          }}
        >
          Use email:{" "}
          <Box component="span" sx={{ fontWeight: 700 }}>
            demo@stackdrive.com
          </Box>{" "}
          / password:{" "}
          <Box component="span" sx={{ fontWeight: 700 }}>
            demo1234
          </Box>
        </Typography>
      </Box>
      <form
        onSubmit={handleSubmit}
        style={{
          margin: "20px 0px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <TextField
          name="email"
          label="Email"
          value={form.email}
          error={errors.email}
          onChange={onChange}
        />
        <PasswordField
          name="password"
          label="Password"
          value={form.password}
          error={errors.password}
          onChange={onChange}
        />
        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            mb: 2,
          }}
        >
          <Link to="/auth/forgot-password" style={{ fontSize: "14px" }}>
            Forgot Password?
          </Link>
        </Box>
        <Button
          type="submit"
          variant="contained"
          disableElevation
          sx={{
            bgcolor: loading
              ? "button.primary.loading"
              : "button.primary.background",
            height: "45px",
            borderRadius: "0.475rem",
            ":hover": {
              bgcolor: loading
                ? "button.primary.loading"
                : "button.primary.hover",
            },
          }}
          disabled={loading}
        >
          {loading ? (
            <CircularProgress
              style={{ color: "rgba(145, 158, 171, 0.5)", padding: "8px" }}
            />
          ) : (
            <Typography
              sx={{
                textTransform: "capitalize",
                color: "button.primary.text",
                fontWeight: 700,
                fontSize: "0.875rem",
              }}
            >
              Loading
            </Typography>
          )}
        </Button>
      </form>
    </Box>
  );
};

export default Login;

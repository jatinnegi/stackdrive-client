import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { loginValidation } from "@/validation/auth";
import { Typography, Box } from "@mui/material";
import { TextField, PasswordField } from "@/components/Inputs";
import { InfoAlert, ErrorAlert } from "@/components/Alerts";
import Button from "@/components/Button";

interface FormProps {
  email: string;
  password: string;
}

const Login: FC = () => {
  const navigate = useNavigate();
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

    if (hasErrors) {
      setErrors(errors);
      return;
    }

    try {
      setLoading(true);
      setFormError("");

      await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (
            form.email === "demo@stackdrive.com" &&
            form.password === "demo1234"
          ) {
            resolve(form);
          } else {
            setErrors({ email: "", password: "" });
            reject(new Error("Invalid credentials"));
          }
        }, 3000);
      });
      setFormError("");
      navigate("/dashboard");
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
          ":hover": {
            textDecoration: "underline",
          },
        },
      }}
    >
      <Typography sx={{ fontSize: "28px", fontWeight: 400 }}>
        Welcome, back
      </Typography>
      <Typography
        sx={{
          fontSize: "14px",
          mt: 2,
          mb: 5,
          color: "text.secondary",
          fontWeight: 400,
        }}
      >
        New User?{" "}
        <Link
          to="/auth/register"
          style={{
            color: "rgb(32, 101, 209)",
            fontWeight: 500,
          }}
        >
          Create an account
        </Link>
      </Typography>
      {formError.trim() !== "" && (
        <ErrorAlert>
          <Typography
            sx={{
              fontSize: "13px",
            }}
          >
            {formError}
          </Typography>
        </ErrorAlert>
      )}
      <InfoAlert>
        <Typography sx={{ fontSize: "14px" }}>
          Use email:{" "}
          <Box component="span" sx={{ fontWeight: 600 }}>
            demo@stackdrive.com
          </Box>{" "}
          / password:{" "}
          <Box component="span" sx={{ fontWeight: 600 }}>
            demo1234
          </Box>
        </Typography>
      </InfoAlert>
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
        <Button type="submit" value="Login" loading={loading} />
      </form>
    </Box>
  );
};

export default Login;

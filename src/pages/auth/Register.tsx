import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { registerValidation } from "@/validation/auth";
import { Typography, Box } from "@mui/material";
import { TextField, PasswordField } from "@/components/Inputs";
import Button from "@/components/Button";

interface FormProps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const Register: FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [form, setForm] = useState<FormProps>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<FormProps>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { hasErrors, errors }: { hasErrors: boolean; errors: FormProps } =
      registerValidation(
        form.firstName,
        form.lastName,
        form.email,
        form.password
      );

    if (hasErrors) {
      setErrors(errors);
      return;
    }

    try {
      setLoading(true);
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (form.email.trim() === "demo@stackdrive.com") {
            setErrors({ ...errors, email: "Email is already in use" });
            reject(new Error("Email is already in use"));
          } else {
            resolve(form);
          }
        }, 3000);
      });
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
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
      <Typography sx={{ fontSize: "28px", fontWeight: 400 }}>
        Get started
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
        Already have an account?{" "}
        <Link
          to="/auth/login"
          style={{
            color: "rgb(32, 101, 209)",
            fontWeight: 500,
          }}
        >
          Sign In
        </Link>
      </Typography>
      <form
        onSubmit={handleSubmit}
        style={{
          margin: "20px 0px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <Box component="div" sx={{ display: "flex", gap: "10px" }}>
          <TextField
            name="firstName"
            label="First Name"
            value={form.firstName}
            error={errors.firstName}
            onChange={onChange}
          />
          <TextField
            name="lastName"
            label="Last Name"
            value={form.lastName}
            error={errors.lastName}
            onChange={onChange}
          />
        </Box>
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
        <Button type="submit" value="Create account" loading={loading} />
      </form>
      <Typography sx={{ fontSize: "12px", color: "text.secondary" }}>
        By signing up, I agree to{" "}
        <Link
          to="/auth/register"
          style={{
            textDecoration: "underline",
          }}
        >
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link
          to="/auth/register"
          style={{
            textDecoration: "underline",
          }}
        >
          Privacy Policy
        </Link>
        .
      </Typography>
    </Box>
  );
};

export default Register;

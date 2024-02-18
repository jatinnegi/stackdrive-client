export const loginValidation = (email: string, password: string) => {
  let hasErrors = false;
  const errors = { email: "", password: "" };
  const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  if (!email) {
    errors.email = "Email is required";
    hasErrors = true;
  } else if (!emailPattern.test(email)) {
    errors.email = "Enter a valid email";
    hasErrors = true;
  } else errors.email = "";

  if (!password) {
    errors.password = "Password is required";
    hasErrors = true;
  } else errors.password = "";

  return { hasErrors, errors };
};

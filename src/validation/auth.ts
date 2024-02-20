export const loginValidation = (email: string, password: string) => {
  let hasErrors = false;
  const errors = { email: "", password: "" };
  const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const cleanedEmail = email.trim();

  if (!cleanedEmail) {
    errors.email = "Email is required";
    hasErrors = true;
  } else if (!emailPattern.test(cleanedEmail)) {
    errors.email = "Enter a valid email";
    hasErrors = true;
  } else errors.email = "";

  if (!password) {
    errors.password = "Password is required";
    hasErrors = true;
  } else errors.password = "";

  return { hasErrors, errors };
};

export const registerValidation = (
  firstName: string,
  lastName: string,
  email: string,
  password: string
) => {
  let hasErrors = false;
  const errors = { firstName: "", lastName: "", email: "", password: "" };
  const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const cleanedFirstName = firstName.trim();
  const cleanedLastName = lastName.trim();
  const cleanedEmail = email.trim();

  if (!cleanedFirstName) {
    errors.firstName = "First name is required";
    hasErrors = true;
  } else {
    errors.firstName = "";
  }

  if (!cleanedLastName) {
    errors.lastName = "Last name is required";
    hasErrors = true;
  } else {
    errors.lastName = "";
  }

  if (!cleanedEmail) {
    errors.email = "Email is required";
    hasErrors = true;
  } else if (!emailPattern.test(cleanedEmail)) {
    errors.email = "Enter a valid email";
    hasErrors = true;
  } else {
    errors.email = "";
  }

  if (!password) {
    errors.password = "Password is required";
    hasErrors = true;
  } else errors.password = "";

  return { hasErrors, errors };
};

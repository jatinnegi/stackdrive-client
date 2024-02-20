import { FC, PropsWithChildren, useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { CountrySelect } from "@/components/Inputs";
import CardBody from "./CardBody";

const Row: FC<PropsWithChildren> = ({ children }) => (
  <Box
    component="div"
    sx={{
      display: "grid",
      gridTemplateColumns: {
        xs: "repeat(1, 1fr)",
        lg: "repeat(2, 1fr)",
      },
      gap: {
        xs: "20px",
        lg: "10px",
      },
    }}
  >
    {children}
  </Box>
);

interface FormProps {
  fullName: string;
  email: string;
  phoneNumber: string;
  state: string;
  city: string;
  address: string;
  zipCode: string;
}

const MainSection: FC = () => {
  const [values, setValues] = useState<FormProps>({
    fullName: "Avery Langef",
    email: "avery@hotmail.com",
    phoneNumber: "9876543210",
    state: "Las Vegas",
    city: "Nevada",
    address: "402 Street",
    zipCode: "900016",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <CardBody sx={{ padding: "35px 20px", justifyContent: "flex-start" }}>
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "100%",
        }}
      >
        <Row>
          <TextField
            variant="outlined"
            name="fullName"
            label="Full Name"
            value={values.fullName}
            onChange={onChange}
            autoComplete="off"
          />
          <TextField
            variant="outlined"
            name="email"
            label="Email Address"
            value={values.email}
            onChange={onChange}
            autoComplete="off"
          />
        </Row>
        <Row>
          <TextField
            variant="outlined"
            name="phoneNumber"
            label="Phone Number"
            value={values.phoneNumber}
            onChange={onChange}
          />
          <CountrySelect />
        </Row>
        <Row>
          <TextField
            variant="outlined"
            name="state"
            label="State/Region"
            value={values.state}
            onChange={onChange}
          />
          <TextField
            variant="outlined"
            name="city"
            label="City"
            value={values.city}
            onChange={onChange}
          />
        </Row>
        <Row>
          <TextField
            variant="outlined"
            name="address"
            label="Address"
            value={values.address}
            onChange={onChange}
          />
          <TextField
            variant="outlined"
            name="zipCode"
            label="Zip/Code"
            value={values.zipCode}
            onChange={onChange}
          />
        </Row>
      </Box>
      <Box
        component="div"
        sx={{
          mt: 4,
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          gap: "10px",
        }}
      >
        <Button
          variant="contained"
          disableElevation
          sx={{
            fontSize: "14px",
            textTransform: "capitalize",
            bgcolor: "button.primary.background",
            color: "button.primary.text",
            fontWeight: 600,
            ":hover": {
              bgcolor: "button.primary.hover",
            },
          }}
        >
          Save Changes
        </Button>
        <Button
          variant="contained"
          disableElevation
          sx={{
            fontSize: "14px",
            textTransform: "capitalize",
            bgcolor: "button.danger.background",
            color: "button.danger.text",
            fontWeight: 700,
            ":hover": {
              bgcolor: "button.danger.hover",
            },
          }}
        >
          Delete My Account
        </Button>
      </Box>
    </CardBody>
  );
};

export default MainSection;

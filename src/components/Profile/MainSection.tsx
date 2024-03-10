import { FC, PropsWithChildren, useState } from "react";
import { useDispatch } from "react-redux";
import { setCredentials } from "@/redux/actions";
import { useUpdateMutation } from "@/redux/slices/api/usersApiSlice";
import { addToastMessage } from "@/utils/helper";
import {
  Box,
  TextField,
  Button,
  Typography,
  CircularProgress,
} from "@mui/material";
import { Phone as PhoneField } from "@/components/Inputs/Phone";
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

const FormButton: FC<
  {
    type: "save" | "delete";
    isLoading: boolean;
    onClick: () => void;
  } & PropsWithChildren
> = ({ type, isLoading, onClick, children }) => (
  <Button
    onClick={onClick}
    variant="contained"
    disableElevation
    sx={{
      height: "35px",
      fontSize: "14px",
      textTransform: "capitalize",
      bgcolor:
        type === "save"
          ? "button.primary.background"
          : "button.danger.background",
      color: type === "save" ? "button.primary.text" : "button.danger.text",
      fontWeight: 600,
      ":hover": {
        bgcolor:
          type === "save" ? "button.primary.hover" : "button.danger.hover",
      },
    }}
    disabled={isLoading}
  >
    <CircularProgress
      size="35px"
      style={{
        opacity: isLoading ? 1 : 0,
        position: "absolute",
        color: "rgba(145, 158, 171, 0.5)",
        padding: "8px",
      }}
    />
    <Typography
      sx={{
        opacity: isLoading ? 0 : 1,
        textTransform: "capitalize",
        fontWeight: 700,
        fontSize: "0.875rem",
      }}
    >
      {children}
    </Typography>
  </Button>
);

interface FormProps {
  firstName: string;
  lastName: string;
  email: string;
  countryCode: string;
  phoneNumber: string;
  state: string;
  city: string;
  address: string;
  zipCode: string;
}

interface Props {
  userInfo: Record<string, string>;
}

const MainSection: FC<Props> = ({ userInfo }) => {
  const dispatch = useDispatch();
  const [updateUserApiCall, { isLoading: isSaveLoading }] = useUpdateMutation();

  const [values, setValues] = useState<FormProps>({
    firstName: userInfo.firstName,
    lastName: userInfo.lastName,
    email: userInfo.email,
    countryCode: userInfo.countryCode,
    phoneNumber: userInfo.phoneNumber,
    state: userInfo.state,
    city: userInfo.city,
    address: userInfo.address,
    zipCode: userInfo.zipCode,
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      const res = await updateUserApiCall(values).unwrap();
      dispatch(setCredentials({ userInfo: res }));
      addToastMessage(dispatch, "User updated successfully!");
    } catch (error) {
      console.error(error);
    }
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
            name="firstName"
            label="First Name"
            value={values.firstName}
            onChange={onChange}
            autoComplete="off"
            disabled
          />
          <TextField
            variant="outlined"
            name="lastName"
            label="Last Name"
            value={values.lastName}
            onChange={onChange}
            autoComplete="off"
            disabled
          />
        </Row>
        <Row>
          <TextField
            variant="outlined"
            name="email"
            label="Email Address"
            value={values.email}
            onChange={onChange}
            autoComplete="off"
            disabled
          />
          <PhoneField
            name="phoneNumber"
            countryCode={values.countryCode}
            setCountryCode={(newCountryCode: string) => {
              setValues({ ...values, countryCode: newCountryCode });
            }}
            value={values.phoneNumber}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              if (isNaN(+e.target.value)) {
                return;
              }
              setValues({ ...values, phoneNumber: e.target.value });
            }}
          />
        </Row>
        <Row>
          <TextField
            variant="outlined"
            name="state"
            label="State/Region"
            value={values.state}
            onChange={onChange}
            autoComplete="off"
          />
          <TextField
            variant="outlined"
            name="city"
            label="City"
            value={values.city}
            onChange={onChange}
            autoComplete="off"
          />
        </Row>
        <Row>
          <TextField
            variant="outlined"
            name="address"
            label="Address"
            value={values.address}
            onChange={onChange}
            autoComplete="off"
          />
          <TextField
            variant="outlined"
            name="zipCode"
            label="Zip/Code"
            value={values.zipCode}
            onChange={onChange}
            autoComplete="off"
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
        <FormButton type="save" isLoading={isSaveLoading} onClick={handleSave}>
          Save Changes
        </FormButton>
        <FormButton type="delete" isLoading={false} onClick={() => {}}>
          Delete My Account
        </FormButton>
      </Box>
    </CardBody>
  );
};

export default MainSection;

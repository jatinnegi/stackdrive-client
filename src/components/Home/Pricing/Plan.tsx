import { FC } from "react";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

interface Props {
  mostPopular?: boolean;
  monthlyPricing: boolean;
  planName: string;
  planDescription: string;
  price: number;
  services: string[];
}

const Plan: FC<Props> = ({
  mostPopular = false,
  monthlyPricing,
  planName,
  planDescription,
  price,
  services,
}) => {
  const displayPrice = monthlyPricing ? price : price * 11;

  return (
    <Box
      component="div"
      sx={{
        position: "relative",
        width: "100%",
        borderRadius: "20px",
        borderTopLeftRadius: "0px",
        color: mostPopular ? "#FFF" : "text.primary",
        bgcolor: mostPopular ? "icon.selected" : "plan.background",
        "::before": {
          content: '""',
          position: "absolute",
          top: "-18px",
          width: "200px",
          height: "25px",
          bgcolor: "inherit",
          borderRadius: "25px 0 0 0",
          zIndex: 5,
          clipPath: "path('M 0 0 L 160 0 C 185 2, 175 16, 200 18 L 0 50 z')",
        },
        "::after": {
          content: '""',
          position: "absolute",
          height: "10px",
          width: "90%",
          left: "10px",
          top: "-7px",
          bgcolor: "white",
          zIndex: -1,
          borderTopRightRadius: "10px",
        },
      }}
    >
      <Box
        component="div"
        sx={{
          pt: 4,
          pb: 2,
          px: 2,
        }}
      >
        <Typography sx={{ color: mostPopular ? "#E0E0E0" : "text.secondary" }}>
          {planDescription}
        </Typography>
        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            my: 1,
            pb: 3,
            borderBottomWidth: "1px",
            borderBottomStyle: "solid",
            borderBottomColor: "border.primary",
          }}
        >
          <Typography sx={{ fontSize: "28px" }}>{planName}</Typography>
          <Typography sx={{ fontSize: "28px" }}>${displayPrice}</Typography>
        </Box>
        <List sx={{ display: "flex", flexDirection: "column", gap: "13px" }}>
          {services.map((service: string) => (
            <ListItem
              key={service}
              sx={{
                p: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                height={25}
                width={25}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <ListItemText
                sx={{
                  display: "block",
                  width: "calc(100% - 25px)",
                  ml: 1.5,
                }}
              >
                {service}
              </ListItemText>
            </ListItem>
          ))}
        </List>
        <Button
          type="button"
          sx={{
            mt: 2,
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: mostPopular ? "#FFF" : "text.primary",
            color: mostPopular ? "#FFF" : "text.primary",
            textTransform: "capitalize",
            width: "100%",
            py: 2,
          }}
        >
          <Typography sx={{ fontWeight: 600, mr: 2 }}>Purchase Now</Typography>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            height={25}
            width={25}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </Button>
      </Box>
    </Box>
  );
};

export default Plan;

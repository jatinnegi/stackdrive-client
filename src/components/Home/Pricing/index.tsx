import { useState } from "react";
import { Box, Typography } from "@mui/material";
import PricingButton from "./PricingButton";
import Plan from "./Plan";

type PricingType = "month" | "annual";

export default function Pricing() {
  const [pricingType, setPricingType] = useState<PricingType>("month");

  return (
    <>
      <Box
        component="div"
        sx={{
          bgcolor: "background.paper",
          my: 8,
          borderRadius: "10px",
          py: 8,
          px: {
            xs: 2,
            md: 25,
            lg: 38,
          },
          textAlign: "center",
        }}
      >
        <Box component="div" sx={{ px: 2 }}>
          <Typography
            sx={{
              fontSize: {
                xs: "32px",
                lg: "36px",
              },
            }}
          >
            We offer a range of options to choose from for you
          </Typography>
          <Typography sx={{ fontSize: "16px", color: "text.secondary", mt: 2 }}>
            Simple, transparent pricing that grows with you. Try any plan free
            for 30 days.
          </Typography>
          <Box
            component="div"
            sx={{
              borderWidth: "1px",
              borderColor: "border.primary",
              borderStyle: "solid",
              borderRadius: "6px",
              p: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mt: 4,
              mb: {
                xs: 0,
                lg: 14,
              },
            }}
          >
            <PricingButton
              isSelected={pricingType === "month"}
              onClick={() => {
                setPricingType("month");
              }}
            >
              Monthly Billing
            </PricingButton>
            <PricingButton
              isSelected={pricingType === "annual"}
              onClick={() => {
                setPricingType("annual");
              }}
            >
              Annual Billing
            </PricingButton>
          </Box>
        </Box>
      </Box>
      <Box
        component="div"
        sx={{
          position: "relative",
          top: { xs: 0, lg: -150 },
          left: "50%",
          transform: "translateX(-50%)",
          maxWidth: "950px",
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            md: "repeat(3, 1fr)",
          },
          gap: {
            xs: "30px",
            md: "15px",
          },
        }}
      >
        <Plan
          monthlyPricing={pricingType === "month"}
          planName="Basic"
          planDescription="Best choice for personal"
          price={0}
          services={[
            "One account user",
            "1 GB of secure storage",
            "Easy-to-use content protection and sharing controls",
          ]}
        />
        <Plan
          mostPopular
          monthlyPricing={pricingType === "month"}
          planName="Advanced"
          planDescription="Best choice for teams"
          price={24}
          services={[
            "Three accounts user",
            "500 GB of secure storage",
            "Easy-to-use content protection and sharing controls",
          ]}
        />
        <Plan
          monthlyPricing={pricingType === "month"}
          planName="Enterprise"
          planDescription="Best choice for companies"
          price={50}
          services={[
            "100 accounts user",
            "5,000 GB of secure storage",
            "Easy-to-use content protection and sharing controls",
          ]}
        />
      </Box>
    </>
  );
}

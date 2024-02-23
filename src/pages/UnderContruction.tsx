import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import Lost from "@/components/Art/Lost";
import Button from "@/components/Button";
import WorkingGirl from "../../public/assets/working_girl.png";

const UnderConstruction: FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
        minHeight: "100svh",
        width: "95%",
        maxWidth: "550px",
        margin: "0px auto",
        padding: "40px 0px",
      }}
    >
      <Typography
        sx={{
          fontSize: {
            xs: "22px",
            md: "28px",
          },
          fontWeight: 500,
          textAlign: "center",
        }}
      >
        Comming Soon!
      </Typography>
      <Typography
        sx={{
          fontSize: {
            xs: "14px",
            sm: "16px",
          },
          fontWeight: 400,
          color: "text.secondary",
          textAlign: "center",
        }}
      >
        Sorry, this page is currently under contruction. Your patience is
        appreciated. Come back soon!
      </Typography>
      <Box
        component="div"
        sx={{ position: "relative", width: "100%", maxWidth: "220px" }}
      >
        <img
          src={WorkingGirl}
          alt="lost-girl"
          style={{
            width: "100%",
          }}
        />
      </Box>
      <Button loading={false} type="submit" value="Go to Home" />
    </form>
  );
};

export default UnderConstruction;

import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import Lost from "@/components/Art/Lost";
import Button from "@/components/Button";
import LostGirl from "../../public/assets/lost_girl.png";

const Error404: FC = () => {
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
        Sorry, Page Not Found!
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
        Sorry, we couldn't find the page you're looking for. Perhaps you've
        mistyped the URL? Be sure to check your spelling.
      </Typography>
      <Box
        component="div"
        sx={{ position: "relative", width: "100%", maxWidth: "400px" }}
      >
        <img
          src={LostGirl}
          alt="lost-girl"
          style={{
            position: "absolute",
            width: "30%",
            top: "50%",
            right: "20%",
            transform: "translateY(-50%)",
            zIndex: -1,
          }}
        />
        <Lost />
      </Box>
      <Button loading={false} type="submit" value="Go to Home" />
    </form>
  );
};

export default Error404;

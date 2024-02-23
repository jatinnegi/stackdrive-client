import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import Button from "@/components/Button";
import Loader from "@/components/Loader";
import WorkingGirl from "../../public/assets/working_girl.png";

const UnderConstruction: FC = () => {
  const [loaderValue, setLoaderValue] = useState<number>(0);
  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (loaderValue < 100) {
        setLoaderValue(loaderValue + 10);
      } else {
        clearInterval(intervalId);
      }
    }, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, [loaderValue]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  if (loaderValue < 100) {
    return <Loader value={loaderValue} />;
  }

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
        sx={{ position: "relative", width: "100%", maxWidth: "222px" }}
      >
        <Box
          sx={{
            width: "100%",
            height: "319px",
            background: `url("${WorkingGirl}") no-repeat center center/cover`,
          }}
        />
      </Box>
      <Button loading={false} type="submit" value="Go to Home" />
    </form>
  );
};

export default UnderConstruction;

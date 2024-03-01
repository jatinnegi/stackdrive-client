import { FC, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useInView } from "react-intersection-observer";

interface Props {
  title: string;
  description: string;
  number: number;
  cb: (number: number) => void;
  right?: boolean;
}

const Section: FC<Props> = ({
  title,
  description,
  number,
  cb,
  right = true,
}) => {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  useEffect(() => {
    if (inView) {
      cb(number);
    }
  }, [inView]);

  return (
    <Box
      ref={ref}
      component="section"
      sx={{
        minHeight: { xs: "none", md: "850px" },
        height: { xs: "auto", md: "100svh" },
        width: "100%",
        display: "flex",
        justifyContent: right ? "flex-end" : "flex-start",
        alignItems: "center",
        mb: {
          xs: "60px",
          md: "0px",
        },
      }}
    >
      <Box
        component="div"
        sx={{
          width: {
            xs: "100%",
            md: "40%",
          },
          textAlign: { xs: "center", lg: "left" },
        }}
      >
        <Typography
          sx={{
            position: "relative",
            fontSize: {
              xs: "24px",
              md: "32px",
              lg: "36px",
            },
            fontWeight: 400,
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            position: "relative",
            fontSize: {
              xs: "13px",
              md: "16px",
              lg: "18px",
            },
            mt: 2,
            fontWeight: 500,
            color: "text.secondary",
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default Section;

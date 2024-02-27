import { FC, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useInView } from "react-intersection-observer";

interface Props {
  title: string;
  description: string;
  number: number;
  cb: (num: number) => void;
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
    threshold: 0.5,
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
            fontSize: {
              xs: "24px",
              lg: "32px",
            },
            fontWeight: 600,
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: {
              xs: "13px",
              lg: "16px",
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

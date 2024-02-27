import { FC, useState } from "react";
import { Box } from "@mui/material";
import Section from "./Section";
import FeaturesBackground from "./FeaturesBackground";

const Features: FC = () => {
  const [current, setCurrent] = useState<number>(1);

  return (
    <Box
      component="div"
      sx={{
        mt: {
          xs: "80px",
          md: "250px",
          lg: "300px",
        },
      }}
    >
      <FeaturesBackground number={current} left={current !== 2} />
      <Section
        title="Upload your files and folders to the cloud"
        description="
        Effortlessly upload files and folders to the cloud, streamlining data management and accessibility. Securely store and access your data from anywhere, ensuring peace of mind and flexibility. Simplify collaboration and sharing, empowering users with seamless file management and efficient workflows for enhanced productivity and convenience."
        number={1}
        cb={(num: number) => {
          setCurrent(num);
        }}
      />
      <Section
        title="Collaborate with other people"
        description="Easily collaborate with others, fostering teamwork and productivity. Streamline communication, file sharing, and task management in a unified platform, promoting synergy and efficiency among team members for successful project outcomes."
        number={2}
        cb={(num: number) => {
          setCurrent(num);
        }}
        right={false}
      />
      <Section
        title="Download anytime"
        description="
        Download files anytime, ensuring flexibility and accessibility. Retrieve your data whenever needed, empowering users with seamless access to their resources for increased convenience and productivity."
        number={3}
        cb={(num: number) => {
          setCurrent(num);
        }}
      />
    </Box>
  );
};

export default Features;

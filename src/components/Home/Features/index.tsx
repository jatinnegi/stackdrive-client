import { FC, useState } from "react";
import { Box } from "@mui/material";
import Section from "./Section";
import FeaturesBackground from "./FeaturesBackground";

interface FeatureProps {
  id: number;
  title: string;
  description: string;
}

const featuresData: FeatureProps[] = [
  {
    id: 1,
    title: "Centralized workspace.",
    description:
      "Centralize your workspace and streamline collaboration with our SaaS file storage app, ensuring organized access anytime, anywhere for enhanced productivity.",
  },
  {
    id: 2,
    title: "Upload your files and folders to the cloud.",
    description:
      "Effortlessly upload files and folders to the cloud, streamlining data management and accessibility. Securely store and access your data from anywhere, ensuring peace of mind and flexibility. Simplify collaboration and sharing, empowering users with seamless file management and efficient workflows for enhanced productivity and convenience.",
  },
  {
    id: 3,
    title: "Share with other people.",
    description:
      "Effortlessly share files with others while maintaining seamless organization on-the-go with our SaaS file storage app, accessible anytime, anywhere.",
  },
  {
    id: 4,
    title: "Analytics and report.",
    description:
      "Access detailed analytics and generate reports effortlessly, ensuring informed decisions and organized data management with our versatile SaaS file storage solution.",
  },
  {
    id: 5,
    title: "Download anywhere anytime and stay organized.",
    description:
      "Access files anywhere, anytime, and maintain seamless organization with StackDrive, ensuring your digital workspace stays tidy and efficient.",
  },
];

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
      <FeaturesBackground number={current} left={current % 2 === 1} />
      {featuresData.map((featureData: FeatureProps) => (
        <Section
          key={featureData.id}
          number={featureData.id}
          title={featureData.title}
          description={featureData.description}
          cb={(number: number) => {
            setCurrent(number);
          }}
          right={featureData.id % 2 === 1}
        />
      ))}
    </Box>
  );
};

export default Features;

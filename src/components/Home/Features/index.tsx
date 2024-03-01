import { FC, useState, useEffect } from "react";
import { Box } from "@mui/material";
import Section from "./Section";
import FeaturesBackground from "./FeaturesBackground";

const Features: FC = () => {
  const [prevScrollPos, setPrevScrollPos] = useState<number>(window.scrollY);
  const [inViews, setInViews] = useState<number[]>([1]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const add = (number: number) => {
    const index = inViews.indexOf(number);
    let newInViews = inViews;

    if (index !== -1) {
      newInViews.splice(index, 1);
    }

    newInViews.push(number);
    setInViews(newInViews);
  };

  const remove = (numToRemove: number) => {
    const newInViews = inViews.filter(
      (number: number) => number !== numToRemove
    );
    setInViews(newInViews);
  };

  const current = inViews[inViews.length - 1];

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
        title="Upload your files and folders to the cloud."
        description="
        Effortlessly upload files and folders to the cloud, streamlining data management and accessibility. Securely store and access your data from anywhere, ensuring peace of mind and flexibility. Simplify collaboration and sharing, empowering users with seamless file management and efficient workflows for enhanced productivity and convenience."
        number={1}
        add={add}
        remove={remove}
      />
      <Section
        title="Collaborate with other people."
        description="Easily collaborate with others, fostering teamwork and productivity. Streamline communication, file sharing, and task management in a unified platform, promoting synergy and efficiency among team members for successful project outcomes."
        number={2}
        add={add}
        remove={remove}
        right={false}
      />
      <Section
        title="Download anywhere anytime."
        description="
        Download files anytime, ensuring flexibility and accessibility. Retrieve your data whenever needed, empowering users with seamless access to their resources for increased convenience and productivity."
        number={3}
        add={add}
        remove={remove}
      />
    </Box>
  );
};

export default Features;

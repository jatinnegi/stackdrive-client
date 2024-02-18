import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/reducers";

const Info: FC = () => {
  const { theme } = useSelector((state: RootState) => state.settings);

  const fillColor =
    theme === "dark" ? "rgb(202, 253, 245)" : "rgb(0, 184, 217)";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
    >
      <path
        fill={fillColor}
        d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m1 14a1 1 0 0 1-2 0v-5a1 1 0 0 1 2 0Zm-1-7a1 1 0 1 1 1-1a1 1 0 0 1-1 1"
      ></path>
    </svg>
  );
};

export default Info;

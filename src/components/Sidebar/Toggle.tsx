import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/reducers";
import { updateSettings } from "@/redux/actions";
import { IconButton } from "@mui/material";
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from "@mui/icons-material";
import constants from "@/constants";

const HEIGHT = 28;
const WIDTH = 28;

interface Props {
  hoverState: boolean;
  setHoverState: (newState: boolean) => void;
}

const Toggle: FC<Props> = ({ hoverState, setHoverState }) => {
  const { layout } = useSelector((state: RootState) => state.settings);
  const dispatch = useDispatch();

  const icon =
    layout === "full" ? (
      <ChevronLeftIcon
        fontSize="small"
        sx={{ fontSize: "18px", color: "text.secondary" }}
      />
    ) : (
      <ChevronRightIcon
        fontSize="small"
        sx={{ fontSize: "18px", color: "text.secondary" }}
      />
    );

  const left = hoverState
    ? constants.sidebar.full - WIDTH / 2
    : layout === "full"
    ? constants.sidebar.full - WIDTH / 2
    : constants.sidebar.collapse - WIDTH / 2;

  return (
    <IconButton
      key={`toggle-${layout}`}
      sx={{
        display: {
          xs: "none",
          lg: "flex",
        },
        // transition: "none",
        backgroundColor: "background.default",
        position: "fixed",
        height: HEIGHT,
        width: WIDTH,
        top: "40px",
        left,
        borderWidth: "1px",
        borderStyle: "dashed",
        borderColor: "border.primary",
        zIndex: 25,
        transition: "left 200ms ease-in",
        "&:hover": { backgroundColor: "background.default" },
        "&:focus": { backgroundColor: "background.default" },
      }}
      onMouseDown={(e: React.MouseEvent) => {
        e.stopPropagation();
      }}
      onClick={() => {
        const newLayout = layout === "full" ? "collapse" : "full";
        dispatch(updateSettings({ layout: newLayout }));
      }}
      onMouseMove={() => {
        if (!hoverState && layout === "collapse") {
          return;
        }
        setHoverState(true);
      }}
      onMouseLeave={() => {
        setHoverState(false);
      }}
    >
      {icon}
    </IconButton>
  );
};

export default Toggle;

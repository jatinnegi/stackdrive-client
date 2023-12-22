import { IconButton, styled } from "@mui/material";
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/reducers";
import { updateSettings } from "@/redux/actions";

const ResponsiveIconButton = styled(IconButton)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("lg")]: {
    display: "flex",
  },
}));

const Toggle = () => {
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

  return (
    <ResponsiveIconButton
      key={`toggle-${layout}`}
      sx={{
        transition: "none",
        backgroundColor: "background.default",
        position: "fixed",
        height: "28px",
        width: "28px",
        top: "40px",
        left: layout === "full" ? "245px" : "71px",
        borderWidth: "1px",
        borderStyle: "dashed",
        borderColor: "border.primary",
        zIndex: 10,
        "&:hover": { backgroundColor: "background.default" },
        "&:focus": { backgroundColor: "background.default" },
      }}
      onClick={() => {
        const newLayout = layout === "full" ? "collapse" : "full";
        dispatch(updateSettings({ layout: newLayout }));
      }}
    >
      {icon}
    </ResponsiveIconButton>
  );
};

export default Toggle;

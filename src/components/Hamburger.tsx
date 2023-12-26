import { useDispatch } from "react-redux";
import { updateSettings } from "@/redux/actions";
import { IconButton } from "@mui/material";
import { HamburgerIcon } from "@/icons";

export default function Hamburger() {
  const dispatch = useDispatch();

  return (
    <IconButton
      sx={{
        display: {
          xs: "flex",
          lg: "none",
        },
        alignItems: "center",
        justifyContent: "center",
        height: {
          xs: "35px",
          md: "40px",
        },
        color: "text.secondary",
        marginRight: {
          xs: "5px",
          sm: "8px",
          md: "10px",
        },
      }}
      onClick={() => {
        dispatch(updateSettings({ displayMobileMenu: true }));
      }}
    >
      <HamburgerIcon />
    </IconButton>
  );
}

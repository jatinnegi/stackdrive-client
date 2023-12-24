import { useDispatch } from "react-redux";
import { updateSettings } from "@/redux/actions";
import { IconButton, styled } from "@mui/material";
import { HamburgerIcon } from "@/icons";

const ResponsiveIconButton = styled(IconButton)(({ theme }) => ({
  display: "block",
  [theme.breakpoints.up("lg")]: { display: "none" },
}));

export default function Hamburger() {
  const dispatch = useDispatch();

  return (
    <ResponsiveIconButton
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: { xs: "65%", md: "70%" },
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
    </ResponsiveIconButton>
  );
}

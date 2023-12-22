import { IconButton, styled } from "@mui/material";
import { HamburgerIcon } from "@/icons";

const ResponsiveIconButton = styled(IconButton)(({ theme }) => ({
  display: "block",
  [theme.breakpoints.up("lg")]: { display: "none" },
}));

export default function Hamburger() {
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
    >
      <HamburgerIcon />
    </ResponsiveIconButton>
  );
}

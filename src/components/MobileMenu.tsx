import { useMemo } from "react";
import { lightTheme, darkTheme } from "@/theme";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/reducers";
import { updateSettings } from "@/redux/actions";
import { Box, Button, Typography, Link } from "@mui/material";
import dashboardLinks, { LinkProps } from "@/utils/dashboardLinks";
import { isActiveLink } from "@/utils/helper";
import StackDriveLogo from "../../public/stackdrive-logo.png";

export default function MobileMenu() {
  const navigate = useNavigate();
  const { theme, displayMobileMenu } = useSelector(
    (state: RootState) => state.settings
  );
  const dispatch = useDispatch();

  const boxShadow = useMemo(
    () =>
      theme === "light"
        ? `${lightTheme.palette.boxShadow?.primary} 40px 40px 80px -8px`
        : `${darkTheme.palette.boxShadow?.primary} 40px 40px 80px -8px`,
    [theme]
  );

  return (
    <Box
      component="div"
      display={{ xs: "block", lg: "none" }}
      onMouseDown={(e: React.MouseEvent) => {
        e.stopPropagation();
      }}
    >
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "backdrop.primary",
          zIndex: 15,
          opacity: displayMobileMenu ? 1 : 0,
          pointerEvents: displayMobileMenu ? "all" : "none",
        }}
        onClick={() => {
          dispatch(updateSettings({ displayMobileMenu: false }));
        }}
      />
      <Box
        position="fixed"
        top="0px"
        left={displayMobileMenu ? "0px" : "-260px"}
        height="100vh"
        zIndex={20}
        width="260px"
        sx={{
          backgroundColor: "filterBackgroundColor.secondary",
          backdropFilter: "blur(20px)",
          boxShadow: displayMobileMenu ? boxShadow : "none",
          transition: "left 225ms cubic-bezier(0, 0, 0.2, 1) 0ms",
          overflow: "hidden scroll",
          "&::-webkit-scrollbar": {
            width: "0px",
          },
          "&::-webkit-scrollbar-track": {
            boxShadow: `inset 0 0 6px rgba(0, 0, 0, 0.3)`,
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "darkgrey",
            outline: `1px solid slategrey`,
          },
        }}
      >
        <Box
          sx={{
            marginTop: "20px",
          }}
        >
          <Link
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              textDecoration: "none",
              cursor: "pointer",
              color: "text.primary",
              width: "80%",
              margin: "0px auto",
              userSelect: "none",
            }}
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            <img
              src={StackDriveLogo}
              alt="stackdrive"
              style={{ height: "26px", width: "26px" }}
            />
            <Typography
              sx={{
                display: "block",
                marginLeft: "15px",
                fontSize: "15px",
                fontWeight: 500,
              }}
            >
              StackDrive
            </Typography>
          </Link>
        </Box>
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            width: "90%",
            margin: "20px auto",
          }}
        >
          {dashboardLinks.map((link: LinkProps) => (
            <Button
              key={link.id}
              fullWidth
              sx={{
                display: "flex",
                flexDirection: "row",
                textAlign: "start",
                width: "100%",
                color: isActiveLink(link.href)
                  ? "icon.selected"
                  : "icon.default",
                padding: "10px",
                backgroundColor: isActiveLink(link.href)
                  ? "link.selected"
                  : "none",
                "&:hover": {
                  backgroundColor: isActiveLink(link.href)
                    ? "link.hover"
                    : "-moz-initial",
                  margin: "0px",
                },
              }}
              onClick={() => {
                navigate(link.href);
              }}
            >
              <Box
                component="span"
                sx={{
                  display: "block",
                  height: "25px",
                  width: "25px",
                }}
              >
                {link.icon}
              </Box>
              <Typography
                fontSize="13px"
                textTransform="capitalize"
                fontWeight={600}
                marginTop="0px"
                marginLeft="10px"
                sx={{
                  color: "inherit",
                  width: "100%",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                }}
              >
                {link.name}
              </Typography>
            </Button>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

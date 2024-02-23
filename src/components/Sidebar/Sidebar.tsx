import { useNavigate } from "react-router-dom";
import { useResize } from "@/hooks";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/reducers";
import { removeNavigation } from "@/redux/actions";
import { Box, Button, Typography, Link, Tooltip } from "@mui/material";
import dashboardLinks, { LinkProps } from "@/utils/dashboardLinks";
import { isActiveLink } from "@/utils/helper";
import StackDriveLogo from "../../../public/stackdrive-logo.png";

export default function Sidebar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { layout } = useSelector((state: RootState) => state.settings);

  const { width } = useResize();

  const isMobile: boolean = width < 1200;
  const fullDisplay: boolean = isMobile || layout === "full";

  return (
    <Box
      display={{ xs: "none", lg: "block" }}
      position="fixed"
      top="0px"
      left="0px"
      height="100vh"
      zIndex={20}
      width={fullDisplay ? "260px" : "85px"}
      onMouseDown={(e: React.MouseEvent) => {
        e.stopPropagation();
      }}
      sx={{
        backgroundColor: "background.default",
        borderRightColor: "border.primary",
        borderRightStyle: "dashed",
        borderRightWidth: "1px",
        backdropFilter: "blur(20px)",
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
            justifyContent: fullDisplay ? "flex-start" : "center",
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
              display: fullDisplay ? "block" : "none",
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
          <Tooltip
            key={link.id}
            title={layout === "collapse" ? link.name : ""}
            placement="right"
          >
            <Button
              fullWidth
              sx={{
                display: "flex",
                flexDirection: fullDisplay ? "row" : "column",
                textAlign: fullDisplay ? "start" : "center",
                width: "100%",
                color: isActiveLink(link.href)
                  ? "icon.selected"
                  : "icon.default",
                padding: fullDisplay ? "10px" : "none",
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
                if (link.href === "/dashboard") {
                  dispatch(removeNavigation({ id: null }));
                }
              }}
            >
              <Box
                component="span"
                sx={{
                  display: "block",
                  height: fullDisplay ? "25px" : "22px",
                  width: fullDisplay ? "25px" : "22px",
                }}
              >
                {link.icon}
              </Box>
              <Typography
                fontSize={fullDisplay ? "13px" : "10px"}
                textTransform="capitalize"
                fontWeight={600}
                marginTop={fullDisplay ? "0px" : "3px"}
                marginLeft={fullDisplay ? "10px" : "0px"}
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
          </Tooltip>
        ))}
      </Box>
    </Box>
  );
}

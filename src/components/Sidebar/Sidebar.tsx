import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/reducers";
import { Box, Button, Typography, Link } from "@mui/material";
import dashboardLinks, { LinkProps } from "@/utils/dashboardLinks";
import { isActiveLink } from "@/utils/helper";
import StackDriveLogo from "../../../public/stackdrive-logo.png";

export default function Sidebar() {
  const navigate = useNavigate();
  const { layout } = useSelector((state: RootState) => state.settings);

  return (
    <Box
      display={{ xs: "none", lg: "block" }}
      position="fixed"
      top="0px"
      left="0px"
      height="100vh"
      width={layout === "full" ? "260px" : "85px"}
      sx={{
        borderRightColor: "border.primary",
        borderRightStyle: "dashed",
        borderRightWidth: "1px",
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
            justifyContent: layout === "full" ? "flex-start" : "center",
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
              display: layout === "full" ? "block" : "none",
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
              flexDirection: layout === "full" ? "row" : "column",
              textAlign: layout === "full" ? "start" : "center",
              width: "100%",
              color: isActiveLink(link.href) ? "icon.selected" : "icon.default",
              padding: layout === "full" ? "10px" : "none",
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
                height: layout === "full" ? "25px" : "22px",
                width: layout === "full" ? "25px" : "22px",
              }}
            >
              {link.icon}
            </Box>
            <Typography
              fontSize={layout === "full" ? "13px" : "10px"}
              textTransform="capitalize"
              fontWeight={600}
              marginTop={layout === "full" ? "0px" : "3px"}
              marginLeft={layout === "full" ? "10px" : "0px"}
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
  );
}

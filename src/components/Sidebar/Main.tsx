import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeNavigation } from "@/redux/actions";
import { LayoutType } from "@/types";
import { isActiveLink } from "@/utils/helper";
import dashboardLinks, { LinkProps } from "@/utils/dashboardLinks";
import { Box, MenuList, MenuItem, Tooltip, Typography } from "@mui/material";

interface Props {
  height: string;
  layout: LayoutType;
  fullDisplay: boolean;
}

const Main: FC<Props> = ({ height, layout, fullDisplay }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Box
      component="div"
      sx={{
        height,
        width: "100%",
        overflowY: "scroll",
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
      <MenuList
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        {dashboardLinks.map((link: LinkProps) => (
          <Tooltip
            key={link.id}
            title={layout === "collapse" ? link.name : ""}
            placement="right"
          >
            <MenuItem
              sx={{
                borderRadius: "4px",
                display: "flex",
                flexDirection: fullDisplay ? "row" : "column",
                textAlign: fullDisplay ? "start" : "center",
                width: "100%",
                color: isActiveLink(link.href)
                  ? "icon.selected"
                  : "icon.default",
                padding: fullDisplay ? "10px" : "6px",
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
            </MenuItem>
          </Tooltip>
        ))}
      </MenuList>
    </Box>
  );
};

export default Main;

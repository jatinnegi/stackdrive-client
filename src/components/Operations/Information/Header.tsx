import { FC, useState, forwardRef, ForwardedRef } from "react";
import { getFileImage } from "@/utils/helper";
import { SupportedTypes } from "@/types";
import { InformationType } from ".";
import { Box, IconButton, Typography, Tooltip, Button } from "@mui/material";
import {
  StarRounded as StarRoundedIcon,
  StarOutlineRounded as StarOutlineRoundedIcon,
} from "@mui/icons-material";

interface Props {
  ref: ForwardedRef<HTMLDivElement | null>;
  type: SupportedTypes;
  name: string;
  current: InformationType;
  updateCurrent: (newValue: InformationType) => void;
}

const Header: FC<Props> = forwardRef(
  (
    { type, name, current, updateCurrent },
    headerRef: ForwardedRef<HTMLDivElement | null>
  ) => {
    const [isStarred, setIsStarred] = useState<boolean>(false);

    return (
      <Box
        component="div"
        ref={headerRef}
        sx={{
          borderBottomWidth: "1px",
          borderBottomStyle: "solid",
          borderBottomColor: "border.primary",
          bgcolor: "background.paper",
        }}
      >
        <Box
          component="div"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "22px",
          }}
        >
          <img
            src={getFileImage(type)}
            alt={name}
            style={{ height: "20px", width: "20px" }}
          />
          <Box sx={{ display: "flex", flex: 1, overflow: "hidden" }}>
            <Tooltip title={name} placement="top-start">
              <Typography
                sx={{
                  fontSize: {
                    xs: "12px",
                    md: "14px",
                  },
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  cursor: "pointer",
                }}
              >
                {name}
              </Typography>
            </Tooltip>
          </Box>
          <IconButton
            sx={{
              padding: "6px",
              color: isStarred ? "rgb(255, 171, 0)" : "text.secondary",
              ":hover": {
                bgcolor: "rgba(255, 171, 0, 0.05)",
              },
            }}
            onClick={() => {
              setIsStarred(!isStarred);
            }}
          >
            {isStarred ? (
              <StarRoundedIcon sx={{ fontSize: "24px", fontWeight: 700 }} />
            ) : (
              <StarOutlineRoundedIcon
                sx={{
                  fontSize: "24px",
                  fontWeight: 700,
                }}
              />
            )}
          </IconButton>
        </Box>
        <Box
          component="div"
          sx={{
            position: "relative",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
          }}
        >
          <Button
            sx={{
              display: "block",
              padding: "8px",
              textTransform: "capitalize",
              color: current === "details" ? "text.primary" : "text.secondary",
              borderRadius: "0px",
              ":hover": {
                bgcolor: "initial",
              },
            }}
            onClick={() => {
              updateCurrent("details");
            }}
          >
            Details
          </Button>
          <Button
            sx={{
              display: "block",
              padding: "8px",
              textTransform: "capitalize",
              color: current === "access" ? "text.primary" : "text.secondary",
              borderRadius: "0px",
              ":hover": {
                bgcolor: "initial",
              },
            }}
            onClick={() => {
              updateCurrent("access");
            }}
          >
            Access Control
          </Button>
          <Box
            component="div"
            sx={{
              position: "absolute",
              left: current === "details" ? "0px" : "50%",
              bottom: "-1px",
              height: "2px",
              width: "50%",
              bgcolor: "border.secondary",
              transition: "left 120ms ease-out",
            }}
          />
        </Box>
      </Box>
    );
  }
);

export default Header;

import React, { FC, useState } from "react";
import { SortBy } from "@/redux/slices/resources";
import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import {
  KeyboardArrowDown as KeyboardArrowDownIcon,
  ArrowUpwardRounded as ArrowUpwordIcon,
  ArrowDownwardRounded as ArrowDownwardIcon,
} from "@mui/icons-material";

interface Props {
  sortBy: SortBy | null;
  isOrderAsc: boolean;
  handleSortUpdate: (sort: SortBy) => void;
}

const Sort: FC<Props> = ({ sortBy, isOrderAsc, handleSortUpdate }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuClick = (sortValue: SortBy) => {
    handleSortUpdate(sortValue);
    handleClose();
  };

  const format = (sortValue: SortBy) => {
    if (sortValue === "lastModified") return "last modified";
    return sortValue;
  };

  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        alignItems: "center",
        gap: {
          xs: "5px",
          md: "10px",
        },
      }}
    >
      {sortBy && (
        <Box component="div">
          <IconButton
            sx={{ padding: "5px" }}
            onMouseDown={(e: React.MouseEvent) => {
              e.stopPropagation();
            }}
            onClick={() => {
              if (sortBy) handleSortUpdate(sortBy);
            }}
          >
            {isOrderAsc ? (
              <ArrowUpwordIcon
                sx={{
                  fontSize: {
                    xs: "18px",
                    md: "24px",
                  },
                }}
              />
            ) : (
              <ArrowDownwardIcon
                sx={{
                  fontSize: {
                    xs: "18px",
                    md: "24px",
                  },
                }}
              />
            )}
          </IconButton>
        </Box>
      )}
      <Button
        variant="outlined"
        onMouseDown={(e: React.MouseEvent) => {
          e.stopPropagation();
        }}
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          textTransform: "capitalize",
          color: "text.primary",
          borderRadius: "6px",
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "border.primary",
          py: 1,
          ":hover": { borderColor: "border.secondary" },
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: "12px",
              md: "13px",
            },
            width: "50px",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          {sortBy ? format(sortBy) : "Sort By"}
        </Typography>
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onMouseDown={(e: React.MouseEvent) => {
          e.stopPropagation();
        }}
        onClose={handleClose}
        sx={{
          margin: "10px 0px",
          li: {
            fontSize: {
              xs: "12px",
              md: "14px",
            },
          },
        }}
        slotProps={{
          paper: {
            sx: {
              bgcolor: "background.paper",
              width: {
                xs: "140px",
                md: "150px",
              },
            },
          },
        }}
      >
        <MenuItem onClick={() => handleMenuClick("name")}>Name</MenuItem>
        <MenuItem onClick={() => handleMenuClick("owner")}>Owner</MenuItem>
        <MenuItem onClick={() => handleMenuClick("lastModified")}>
          Last Modified
        </MenuItem>
        <MenuItem onClick={() => handleMenuClick("size")}>Size</MenuItem>
      </Menu>
    </Box>
  );
};

export default Sort;

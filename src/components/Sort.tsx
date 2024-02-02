import React, { FC, useState } from "react";
import { SortBy } from "@/redux/slices/resources";
import { Box, Button, IconButton, Menu, MenuItem } from "@mui/material";
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
          borderRadius: "20px",
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "border.primary",
          width: {
            xs: "140px",
            md: "150px",
          },
          fontSize: {
            xs: "12px",
            md: "14px",
          },
          ":hover": { borderColor: "border.secondary" },
        }}
      >
        {sortBy ? format(sortBy) : "Sort By"}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{ fontSize: "14px" }}
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

import React, { FC, useMemo, useState } from "react";
import {
  Paper,
  Menu,
  MenuList,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Typography,
  TextField,
  Box,
  Tooltip,
} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { UserProps, dummyUsers } from "@/data";

interface Props {
  anchorEl: HTMLElement | null;
  open: boolean;
  handleClose: () => void;
}

const INITIAL = 4;

const PeopleFilter: FC<Props> = ({ anchorEl, open, handleClose }) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const users = useMemo(() => dummyUsers.slice(0, INITIAL), []);

  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      sx={{ ul: { padding: "0px" } }}
      slotProps={{
        paper: {
          style: {
            marginTop: "7px",
          },
        },
      }}
    >
      <Paper
        sx={{
          backgroundColor: "background.paper",
          width: "350px",
        }}
      >
        <Box
          component="div"
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "0px 10px",
            fieldset: { display: "none" },
          }}
        >
          <SearchIcon
            sx={{ color: "text.secondary", height: "20px", width: "20px" }}
          />
          <TextField
            variant="outlined"
            placeholder="Search for people"
            sx={{
              width: "100%",
              marginLeft: "10px",
              input: { fontSize: "14px", padding: "15px 0px" },
            }}
            value={searchValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setSearchValue(e.target.value);
            }}
          />
        </Box>
        <MenuList sx={{ width: "100%" }}>
          {users.map((user: UserProps) => (
            <MenuItem
              key={user.id}
              sx={{
                display: "flex",
                alignItems: "center",
                padding: "12px 10px",
              }}
            >
              <ListItemIcon sx={{ borderRadius: "50%", overflow: "hidden" }}>
                <img
                  src={user.img}
                  alt={user.email}
                  style={{
                    height: "40px",
                    width: "40px",
                  }}
                />
              </ListItemIcon>
              <ListItemText
                sx={{
                  marginLeft: "10px",
                }}
              >
                <Tooltip placement="top-start" title={user.email}>
                  <Typography
                    sx={{
                      fontSize: { xs: "13px", md: "14px" },
                      lineHeight: "1.2rem",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {user.email}
                  </Typography>
                </Tooltip>
                <Typography
                  sx={{
                    color: "text.secondary",
                    fontSize: { xs: "12px", md: "13px" },
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {user.name}
                </Typography>
              </ListItemText>
            </MenuItem>
          ))}
        </MenuList>
      </Paper>
    </Menu>
  );
};

export default PeopleFilter;

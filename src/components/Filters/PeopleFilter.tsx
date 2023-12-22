import React, { FC, useMemo, useState } from "react";
import {
  Paper,
  Menu,
  MenuList,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Input,
  TextField,
  Box,
} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

interface Props {
  anchorEl: HTMLElement | null;
  open: boolean;
  handleClose: () => void;
}

const dummyUsers = [
  {
    id: 1,
    name: "Avery Lang",
    email: "avery43@hotmail.com",
    img: "https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_1.jpg",
  },
  {
    id: 2,
    name: "Ashlynn Ohara",
    email: "ashlynn_ohara62",
    img: "https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_2.jpg",
  },
  {
    id: 3,
    name: "Milo Farrell",
    email: "milo.farrell@hotmail.com",
    img: "https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_3.jpg",
  },
  {
    id: 4,
    name: "Dasia Jenkins",
    email: "dasia_jenkins@hotmail.com",
    img: "https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_4.jpg",
  },
  {
    id: 5,
    name: "Vito Hudson",
    email: "vito.hudson@hotmail.com",
    img: "https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_5.jpg",
  },
  {
    id: 6,
    name: "Dwight Block",
    email: "dwight.block85@yahoo.com",
    img: "https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_6.jpg",
  },
  {
    id: 7,
    name: "Tyrel Greenholt",
    email: "tyrel_greenholt@gmail.com",
    img: "https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_7.jpg",
  },
  {
    id: 8,
    name: "Joana Simonis",
    email: "joana.simonis84@gmail.com",
    img: "https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_8.jpg",
  },
  {
    id: 9,
    name: "Mireya Schmitt",
    email: "mireya13@hotmail.com",
    img: "https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_9.jpg",
  },
  {
    id: 10,
    name: "Benny Morse",
    email: "benny89@yahoo.com",
    img: "https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_10.jpg",
  },
];

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
          width: "100%",
          minWidth: "320px",
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
        <MenuList>
          {users.map((user) => (
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
              <ListItemText sx={{ marginLeft: "10px" }}>
                <Typography
                  sx={{
                    fontSize: { xs: "13px", md: "14px" },
                    lineHeight: "1.2rem",
                  }}
                >
                  {user.email}
                </Typography>
                <Typography
                  sx={{
                    color: "text.secondary",
                    fontSize: { xs: "12px", md: "13px" },
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

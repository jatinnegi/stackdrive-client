import { FC } from "react";
import {
  Paper,
  Menu,
  MenuList,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import supportedFileTypes from "@/utils/supportedFileTypes";
import { capitalize } from "@/utils/helper";

interface Props {
  anchorEl: HTMLElement | null;
  open: boolean;
  handleClose: () => void;
}

const TypeFilter: FC<Props> = ({ anchorEl, open, handleClose }) => {
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
        <MenuList>
          {supportedFileTypes.map((file) => (
            <MenuItem
              key={file.id}
              sx={{
                display: "flex",
                alignItems: "center",
                padding: "10px",
              }}
            >
              <ListItemIcon>
                <img
                  src={file.img}
                  alt={file.type}
                  style={{
                    height: "22px",
                    width: "22px",
                  }}
                />
              </ListItemIcon>
              <ListItemText>
                <Typography sx={{ fontSize: { xs: "13px", md: "14px" } }}>
                  {capitalize(file.type)}
                </Typography>
              </ListItemText>
            </MenuItem>
          ))}
        </MenuList>
      </Paper>
    </Menu>
  );
};

export default TypeFilter;

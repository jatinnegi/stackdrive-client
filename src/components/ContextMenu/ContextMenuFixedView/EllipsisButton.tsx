import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeNavigation } from "@/redux/actions";
import { NavigationProps } from "@/types";
import {
  Box,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Paper,
  Typography,
} from "@mui/material";
import {
  MoreHorizRounded as MoreHorizIcon,
  FolderSpecial as FolderSpecialIcon,
  Folder as FolderIcon,
} from "@mui/icons-material";

interface Props {
  menu: NavigationProps[];
}

const EllipsisButton: FC<Props> = ({ menu }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        onClick={onClick}
        sx={{
          marginLeft: {
            xs: "0px",
            md: "13px",
          },
        }}
      >
        <MoreHorizIcon sx={{ color: "text.secondary" }} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{ ul: { padding: "0px" } }}
      >
        <Paper
          sx={{
            backgroundColor: "background.paper",
            width: 250,
            maxWidth: "100%",
          }}
        >
          <Box component="div" onClick={handleClose}>
            <MenuItem
              sx={{
                display: "flex",
                alignItems: "center",
                padding: "10px",
              }}
              onClick={() => {
                navigate("/dashboard");
                dispatch(removeNavigation({ id: null }));
              }}
            >
              <ListItemIcon>
                <FolderSpecialIcon />
              </ListItemIcon>
              <ListItemText>
                <Typography sx={{ fontSize: { xs: "12px", md: "13px" } }}>
                  My Drive
                </Typography>
              </ListItemText>
            </MenuItem>
            {menu.map((item: NavigationProps) => (
              <MenuItem
                key={item.id}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: "10px",
                }}
                onClick={() => {
                  navigate(`/dashboard/folders/${item.id}`);
                  dispatch(removeNavigation({ id: item.id }));
                }}
              >
                <ListItemIcon>
                  <FolderIcon />
                </ListItemIcon>
                <ListItemText>
                  <Typography sx={{ fontSize: { xs: "12px", md: "13px" } }}>
                    {item.name}
                  </Typography>
                </ListItemText>
              </MenuItem>
            ))}
          </Box>
        </Paper>
      </Menu>
    </>
  );
};

export default EllipsisButton;

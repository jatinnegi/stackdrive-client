import { FC, PropsWithChildren, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/reducers";
import { updateSettings } from "@/redux/actions";
import {
  SxProps,
  Switch,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";

const ProfileMenuItem: FC<
  PropsWithChildren & { sx?: SxProps; onClick: (e: React.MouseEvent) => void }
> = ({ sx, onClick, children }) => (
  <MenuItem
    sx={{ padding: "5px 8px", borderRadius: "5px", fontSize: "14px", ...sx }}
    onClick={onClick}
  >
    {children}
  </MenuItem>
);

export default function ProfileIcon() {
  const { theme } = useSelector((state: RootState) => state.settings);
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setAnchorEl(null);
  };

  return (
    <>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        slotProps={{
          paper: {
            sx: {
              backgroundImage: "none",
              backgroundColor: "filterBackgroundColor.secondary",
              backdropFilter: "blur(20px)",
              maxHeight: "none",
              width: "250px",
              marginTop: "6px",
              borderRadius: "10px",
              padding: "10px 0px 0px 0px",
            },
          },
        }}
      >
        <Box
          component="div"
          sx={{
            padding: "0px 20px 10px 20px",
          }}
        >
          <Typography fontWeight={600} fontSize="14px">
            Jaydon Frankie
          </Typography>
          <Typography fontWeight={400} color="text.secondary" fontSize="13px">
            minimals@demo.com
          </Typography>
        </Box>
        <Box
          component="div"
          display="flex"
          flexDirection="column"
          gap="5px"
          sx={{
            padding: "10px 12px",
            borderWidth: "1px 0px",
            borderStyle: "dashed none",
            borderColor: "border.primary",
          }}
        >
          <ProfileMenuItem onClick={handleClose}>Home</ProfileMenuItem>
          <ProfileMenuItem onClick={handleClose}>Profile</ProfileMenuItem>
          <Box
            component="div"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "5px 8px",
            }}
          >
            <Typography fontSize="14px">Dark Mode</Typography>
            <Switch
              size="small"
              checked={theme === "dark"}
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation();
                const newTheme = theme === "dark" ? "light" : "dark";
                dispatch(updateSettings({ theme: newTheme }));
              }}
            />
          </Box>
        </Box>
        <Box
          component="div"
          sx={{
            padding: "10px 12px",
          }}
        >
          <ProfileMenuItem
            sx={{
              color: "rgb(255, 86, 48)",
              fontWeight: 600,
            }}
            onClick={handleClose}
          >
            Logout
          </ProfileMenuItem>
        </Box>
      </Menu>
      <IconButton
        sx={{
          padding: "2px",
          height: {
            xs: "34px",
            sm: "38px",
            md: "42px",
          },
          width: {
            xs: "34px",
            sm: "38px",
            md: "42px",
          },
          borderRadius: "50%",
          borderStyle: "solid",
          borderWidth: "2px",
          borderColor: "border.primary",
        }}
        onClick={handleClick}
      >
        <img
          src="https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_5.jpg"
          alt="profile"
          height="100%"
          width="100%"
          style={{ borderRadius: "100%" }}
        />
      </IconButton>
    </>
  );
}

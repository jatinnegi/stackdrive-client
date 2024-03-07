import { FC, PropsWithChildren, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/reducers";
import { useLogoutMutation } from "@/redux/slices/api/usersApiSlice";
import {
  updateSettings,
  removeNavigation,
  resetResources,
  clearCredentials,
} from "@/redux/actions";
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
  const navigate = useNavigate();
  const [logoutAPICall] = useLogoutMutation();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMouseDown = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (event.button === 2) return;
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e: React.MouseEvent, url?: string) => {
    e.stopPropagation();
    e.preventDefault();

    if (e.button === 2) return;

    setAnchorEl(null);

    if (url) {
      navigate(url);
    } else {
      return;
    }
  };

  return (
    <>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onContextMenu={(e: React.MouseEvent) => {
          e.preventDefault();
        }}
        onMouseDown={(e: React.MouseEvent) => {
          e.stopPropagation();
        }}
        onClick={handleClose}
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
          onClick={(e: React.MouseEvent) => {
            e.stopPropagation();
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
            <ProfileMenuItem
              onClick={(e: React.MouseEvent) => {
                handleClose(e, "/dashboard");
                dispatch(removeNavigation({ id: null }));
              }}
            >
              Home
            </ProfileMenuItem>
            <ProfileMenuItem
              onClick={(e: React.MouseEvent) => {
                handleClose(e, "/dashboard/profile");
              }}
            >
              Profile
            </ProfileMenuItem>
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
                onMouseDown={(e: React.MouseEvent) => {
                  e.stopPropagation();
                }}
                onClick={(e: React.MouseEvent) => {
                  if (e.button === 2) return;
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
              onClick={async (e: React.MouseEvent) => {
                try {
                  await logoutAPICall({}).unwrap();
                  dispatch(resetResources());
                  dispatch(clearCredentials());
                  handleClose(e, "/auth/login");
                } catch (error) {
                  console.log(error);
                }
              }}
            >
              Logout
            </ProfileMenuItem>
          </Box>
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
        onMouseDown={handleMouseDown}
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

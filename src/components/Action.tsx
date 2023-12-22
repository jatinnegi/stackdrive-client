import { FC, PropsWithChildren, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Paper,
  Divider,
  Menu,
  MenuList,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  ArrowDropDown,
  CreateNewFolder,
  DriveFolderUpload,
  UploadFile,
} from "@mui/icons-material";
import LayoutButton from "@/components/LayoutButton";

interface ActionProps {
  id: number;
  text: string;
  icon: JSX.Element;
}

const actions: ActionProps[] = [
  {
    id: 1,
    text: "New Folder",
    icon: <CreateNewFolder />,
  },
  {
    id: 2,
    text: "Upload File",
    icon: <UploadFile />,
  },
  {
    id: 3,
    text: "Upload Folder",
    icon: <DriveFolderUpload />,
  },
];

const Action: FC<PropsWithChildren> = ({ children }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    // <Box component="div">

    <Box
      component="div"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Button
        sx={{
          transition: "none",
          color: "text.primary",
          padding: {
            xs: "7px",
            md: "7px 20px",
          },
          borderRadius: {
            xs: "5px",
            md: "30px",
          },
        }}
        onClick={handleClick}
      >
        <Typography
          fontWeight={500}
          fontSize={{ xs: "14px", sm: "18px", md: "24px" }}
          sx={{
            textTransform: "capitalize",
          }}
        >
          {children}
        </Typography>
        <ArrowDropDown
          sx={{
            marginLeft: {
              xs: "3px",
              md: "10px",
            },
            fontSize: {
              xs: "16px",
              sm: "20px",
              md: "24px",
            },
          }}
        />
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{ ul: { padding: "0px" } }}
      >
        <Paper
          sx={{
            backgroundColor: "background.paper",
            width: 320,
            maxWidth: "100%",
          }}
        >
          <MenuList>
            {actions.map((action: ActionProps) => (
              <Box key={action.id} component="div">
                <MenuItem
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: "10px",
                  }}
                >
                  <ListItemIcon>{action.icon}</ListItemIcon>
                  <ListItemText>
                    <Typography sx={{ fontSize: { xs: "13px", md: "14px" } }}>
                      {action.text}
                    </Typography>
                  </ListItemText>
                </MenuItem>
                {action.id === 1 && <Divider />}
              </Box>
            ))}
          </MenuList>
        </Paper>
      </Menu>
      <LayoutButton />
    </Box>
  );
};

export default Action;

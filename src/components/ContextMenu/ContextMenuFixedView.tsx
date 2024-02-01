import { FC, useState } from "react";
import {
  Button,
  Menu,
  MenuItem,
  Typography,
  ListItemIcon,
  Box,
  Paper,
  ListItemText,
  Divider,
} from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";
import { OperationProps, createOperations } from "@/utils/operations";

interface Props {
  title: string;
  handleClick: (operationId: number) => void;
}

const ContextMenuFixedView: FC<Props> = ({ title, handleClick }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      component="div"
      position="relative"
      onMouseDown={(e: React.MouseEvent) => {
        e.stopPropagation();
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
        onClick={handleMenuClick}
      >
        <Typography
          fontWeight={500}
          fontSize={{ xs: "14px", sm: "18px", md: "24px" }}
          sx={{
            textTransform: "capitalize",
          }}
        >
          {title}
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
          {createOperations.map((action: OperationProps) => (
            <Box
              key={action.id}
              component="div"
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation();
                handleClick(action.id);
                handleClose();
              }}
            >
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
        </Paper>
      </Menu>
    </Box>
  );
};

export default ContextMenuFixedView;

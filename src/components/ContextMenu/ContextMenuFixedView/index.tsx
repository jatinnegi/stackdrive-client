import { FC, useState } from "react";
import { useResize } from "@/hooks";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/reducers";
import { removeNavigation } from "@/redux/actions";
import { NavigationProps } from "@/types";
import {
  Menu,
  MenuItem,
  Typography,
  ListItemIcon,
  Box,
  Paper,
  ListItemText,
  Divider,
} from "@mui/material";
import { ChevronRightRounded as ChevronRightIcon } from "@mui/icons-material";
import { OperationProps, createOperations } from "@/utils/operations";
import EllipsisButton from "./EllipsisButton";
import CTAButton from "./CTAButton";
import LinkButton from "./LinkButton";

interface Props {
  title: string;
  handleClick: (operationId: number) => void;
}

const ContextMenuFixedView: FC<Props> = ({ title, handleClick }) => {
  const navigate = useNavigate();
  const { width: viewportWidth } = useResize();

  const dispatch = useDispatch();
  const { navigation } = useSelector((state: RootState) => state.resources);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const render = () => {
    const goToHome = () => {
      navigate("/dashboard");
      dispatch(removeNavigation({ id: null }));
    };

    if (navigation.length === 0) {
      return <CTAButton title={title} handleMenuClick={handleMenuClick} />;
    }

    if (navigation.length === 1 && viewportWidth > 550) {
      return (
        <>
          <LinkButton title="My Drive" handleClick={goToHome} />
          <ChevronRightIcon sx={{ color: "text.secondary" }} />
          <CTAButton
            title={navigation[0].name}
            handleMenuClick={handleMenuClick}
          />
        </>
      );
    }

    let i: number = 0;
    const ellipsisMenu: NavigationProps[] = [];

    while (i < navigation.length - 1) {
      ellipsisMenu.push({ id: navigation[i].id, name: navigation[i].name });
      i += 1;
    }

    const output: JSX.Element[] = [
      <EllipsisButton key={i++} menu={ellipsisMenu} />,
    ];

    output.push(
      <ChevronRightIcon key={i++} sx={{ color: "text.secondary" }} />
    );

    output.push(
      <CTAButton
        key={i++}
        title={navigation[navigation.length - 1].name}
        handleMenuClick={handleMenuClick}
      />
    );

    return output;
  };

  return (
    <Box
      component="div"
      position="relative"
      onMouseDown={(e: React.MouseEvent) => {
        e.stopPropagation();
      }}
    >
      <Box
        component="div"
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
        }}
      >
        {render()}
      </Box>
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

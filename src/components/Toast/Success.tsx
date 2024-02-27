import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeMessage } from "@/redux/actions";
import { RootState } from "@/redux/reducers";
import { darkTheme, lightTheme } from "@/theme";
import { Box, Typography, IconButton } from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";

interface Props {
  id: string;
  top: string;
  display: boolean;
  message: string;
}

export const SuccessToast: FC<Props> = ({ id, top, display, message }) => {
  const dispatch = useDispatch();

  const { theme } = useSelector((state: RootState) => state.settings);

  const boxShadow =
    theme === "dark"
      ? `0px 0px 30px ${darkTheme.palette.boxShadow?.primary}`
      : `0px 10px 30px ${lightTheme.palette.boxShadow?.primary}`;

  return (
    <Box
      component="div"
      sx={{
        position: "fixed",
        top,
        bgcolor: "background.paper",
        width: "280px",
        borderRadius: "4px",
        display: "flex",
        alignItems: "center",
        padding: "8px",
        gap: "10px",
        boxShadow,
        transition: "all 100ms ease-out 125ms",
        zIndex: 50,
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "border.primary",
        animation: display
          ? "display-toast-message 175ms ease-out forwards"
          : "hide-toast-message 175ms ease-out forwards",
      }}
    >
      <Box
        component="div"
        sx={{
          bgcolor: theme === "dark" ? "rgba(34, 197, 94, 0.16)" : "#DBF6E5",
          height: "36px",
          width: "36px",
          padding: "7px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "8px",
        }}
      >
        <svg width="100%" height="100%" viewBox="0 0 24 24">
          <path
            fill="#33C96A"
            d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m4.3 7.61l-4.57 6a1 1 0 0 1-.79.39a1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08l3.78-5a1 1 0 1 1 1.6 1.22Z"
          ></path>
        </svg>
      </Box>
      <Typography sx={{ flex: 1, fontSize: "12px" }}>{message}</Typography>
      <IconButton
        sx={{ p: 1 }}
        onClick={() => {
          dispatch(removeMessage({ id }));
        }}
      >
        <CloseIcon sx={{ fontSize: "16px", fontWeight: 600 }} />
      </IconButton>
    </Box>
  );
};

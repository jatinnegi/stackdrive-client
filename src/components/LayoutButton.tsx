import { FC, useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/reducers";
import { useDispatch } from "react-redux";
import { updateSettings } from "@/redux/actions";
import { Box, Button } from "@mui/material";
import {
  Sort as ListViewIcon,
  Apps as GridViewIcon,
} from "@mui/icons-material";
import { ViewType } from "@/types";

const ViewButton: FC<{
  currentView: ViewType;
  view: ViewType;
  onClick: () => void;
}> = ({ currentView, view, onClick }) => {
  const theme = useSelector((state: RootState) => state.settings.theme);

  const selectedViewBackgroundColor = useMemo(
    () => (theme === "light" ? "#DBDDDF" : "#565E66"),
    [theme]
  );

  return (
    <Button
      sx={{
        padding: {
          sm: "4px 5px",
        },
        minWidth: "0px",
        bgcolor:
          currentView === view
            ? selectedViewBackgroundColor
            : "background.paper",
        color: "text.secondary",
        borderRadius: "8px",
        ":hover": {
          bgcolor:
            currentView === view
              ? selectedViewBackgroundColor
              : "background.paper",
        },
      }}
      onMouseDown={(e: React.MouseEvent) => {
        e.stopPropagation();
      }}
      onClick={onClick}
    >
      {view === "grid" ? (
        <GridViewIcon
          sx={{
            fontSize: {
              xs: "14px",
              sm: "18px",
            },
          }}
        />
      ) : (
        <ListViewIcon sx={{ fontSize: { xs: "14px", sm: "18px" } }} />
      )}
    </Button>
  );
};

export default function LayoutButton() {
  const currentView = useSelector((state: RootState) => state.settings.view);
  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        backgroundColor: "background.paper",
        padding: {
          xs: "3px",
          sm: "5px",
        },
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: "border.primary",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        gap: "5px",
      }}
    >
      <ViewButton
        currentView={currentView}
        view="grid"
        onClick={() => {
          dispatch(updateSettings({ view: "grid" }));
        }}
      />
      <ViewButton
        currentView={currentView}
        view="list"
        onClick={() => {
          dispatch(updateSettings({ view: "list" }));
        }}
      />
    </Box>
  );
}

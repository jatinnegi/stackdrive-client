import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/reducers";
import { useDispatch } from "react-redux";
import { updateMyDrive } from "@/redux/actions";
import { Box, Button } from "@mui/material";
import {
  Sort as ListViewIcon,
  Apps as GridViewIcon,
} from "@mui/icons-material";

export default function LayoutButton() {
  const myDriveView = useSelector((state: RootState) => state.myDrive.view);
  const theme = useSelector((state: RootState) => state.settings.theme);

  const dispatch = useDispatch();

  const selectedViewBackgroundColor = useMemo(
    () => (theme === "light" ? "#DBDDDF" : "#565E66"),
    [theme]
  );
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
      {["grid", "list"].map((view: string) => (
        <Button
          key={view}
          sx={{
            padding: {
              sm: "4px 5px",
            },
            minWidth: "0px",
            backgroundColor:
              myDriveView === view
                ? selectedViewBackgroundColor
                : "background.paper",
            color: "text.secondary",
            borderRadius: "8px",
          }}
          onMouseDown={(e: React.MouseEvent) => {
            e.stopPropagation();
          }}
          onClick={(_: React.MouseEvent) => {
            if (view === "grid") dispatch(updateMyDrive({ view: "grid" }));
            else dispatch(updateMyDrive({ view: "list" }));
          }}
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
      ))}
    </Box>
  );
}

import { FC, PropsWithChildren } from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetSelectedIds } from "@/redux/actions";
import { RootState } from "@/redux/reducers";
import { Box, IconButton, Typography, Tooltip } from "@mui/material";
import {
  Delete as DeleteIcon,
  Close as CloseIcon,
  PersonAdd as PersonAddIcon,
  FileDownloadOutlined as DownloadIcon,
  DriveFileMoveOutlined as MoveIcon,
  InsertLinkOutlined as CopyLinkIcon,
} from "@mui/icons-material";

const IconButtonWrapper: FC<
  { title: string; onClick?: (e: React.MouseEvent) => void } & PropsWithChildren
> = ({ title, onClick, children }) => (
  <Tooltip title={title} placement="top">
    <IconButton
      onClick={onClick ? onClick : () => {}}
      sx={{
        color: "text.secondary",
        padding: "5px",
      }}
    >
      {children}
    </IconButton>
  </Tooltip>
);

export default function SelectedControls() {
  const { selected } = useSelector((state: RootState) => state.resources);
  const dispatch = useDispatch();

  return (
    <Box
      component="div"
      onClick={(e: React.MouseEvent) => {
        e.stopPropagation();
      }}
      display="flex"
      margin={{ xs: "10px 0px", md: "18px 22px" }}
      sx={{
        bgcolor: "selected.secondary",
        padding: "5px",
        borderRadius: "6px",
        color: "text.secondary",
        margin: {
          xs: "10px 0px",
          md: "18px 22px",
        },
      }}
      gap={{ xs: "5px", md: "10px" }}
    >
      <Box display="flex" alignItems="center">
        <IconButtonWrapper
          title="Cancel"
          onClick={() => {
            dispatch(resetSelectedIds());
          }}
        >
          <CloseIcon
            sx={{
              fontSize: {
                xs: "14px",
                md: "16px",
              },
            }}
          />
        </IconButtonWrapper>
        <Typography
          sx={{
            fontSize: {
              xs: "12px",
              md: "14px",
            },
            margin: {
              xs: "0px 8px 0px 2px",
              md: "0px 12px 0px 5px",
            },
            fontWeight: 500,
            userSelect: "none",
          }}
        >
          {selected.length} selected
        </Typography>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        gap={{
          xs: "5px",
          md: "10px",
        }}
      >
        <IconButtonWrapper title="Share">
          <PersonAddIcon
            sx={{
              fontSize: {
                xs: "15px",
                md: "18px",
              },
            }}
          />
        </IconButtonWrapper>
        <IconButtonWrapper title="Download">
          <DownloadIcon
            sx={{
              fontSize: {
                xs: "15px",
                md: "18px",
              },
            }}
          />
        </IconButtonWrapper>
        <IconButtonWrapper title="Move">
          <MoveIcon
            sx={{
              fontSize: {
                xs: "15px",
                md: "18px",
              },
            }}
          />
        </IconButtonWrapper>
        <IconButtonWrapper title="Delete">
          <DeleteIcon
            sx={{
              fontSize: {
                xs: "15px",
                md: "18px",
              },
            }}
          />
        </IconButtonWrapper>
        <IconButtonWrapper title="Copy link">
          <CopyLinkIcon
            sx={{
              fontSize: {
                xs: "15px",
                md: "18px",
              },
            }}
          />
        </IconButtonWrapper>
      </Box>
    </Box>
  );
}

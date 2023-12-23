import { FC, useEffect, useState } from "react";
import { useResize } from "@/hooks";
import { Box, Typography, IconButton } from "@mui/material";
import { MoreVert as MoreVertIcon } from "@mui/icons-material";
import { ResourceProps } from "@/types";
import { getFileImage } from "@/utils/helper";
import ContextMenu from "@/components/ContextMenu";

const ResourceCard: FC<ResourceProps> = ({ id, name, type, imgSrc }) => {
  const [contextMenuOpen, setContextMenuOpen] = useState<boolean>(false);
  const [contextMenuPosition, setContextMenuPosition] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });

  const { width, height } = useResize();

  useEffect(() => {
    setContextMenuOpen(false);
    setContextMenuPosition({ x: 0, y: 0 });
  }, [width, height]);

  function handleContextMenu(e: React.MouseEvent) {
    e.preventDefault();
    setContextMenuOpen(true);
    setContextMenuPosition({ x: e.clientX, y: e.clientY });
  }

  const handleMenuItemClick = (action: string) => {
    console.log(`Clicked on ${action}`);
    setContextMenuOpen(false);
  };

  const handleCloseContextMenu = () => {
    setContextMenuOpen(false);
  };

  return (
    <Box
      component="div"
      sx={{ overflow: "hidden" }}
      onContextMenu={handleContextMenu}
    >
      <Box
        component="div"
        className="resource_card"
        sx={{
          backgroundColor: id === 2 ? "selected.primary" : "background.paper",
          borderRadius: "6px",
          padding: "15px 15px",
          cursor: "pointer",
        }}
      >
        <Box
          component="div"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            <img
              src={getFileImage(type)}
              alt="file-icon"
              style={{ height: "25px", width: "25px" }}
            />
            <Typography
              fontSize={{
                xs: "12px",
                sm: "13px",
              }}
              sx={{
                fontWeight: 400,
                marginLeft: "10px",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                margin: "0px 10px",
              }}
            >
              {name}
            </Typography>
          </Box>
          <IconButton onClick={handleContextMenu}>
            <MoreVertIcon fontSize="small" />
          </IconButton>
        </Box>
        {imgSrc && (
          <Box
            sx={{
              width: "100%",
              height: "120px",
              marginTop: "15px",
              background: `url('${imgSrc}') no-repeat top center/cover`,
            }}
          />
        )}
      </Box>
      <ContextMenu
        open={contextMenuOpen}
        onClose={handleCloseContextMenu}
        onMenuItemClick={handleMenuItemClick}
        anchorX={contextMenuPosition.x}
        anchorY={contextMenuPosition.y}
      />
    </Box>
  );
};

export default ResourceCard;

import { FC, PropsWithChildren, useEffect, useState, memo } from "react";
import { useResize } from "@/hooks";
import { ResourceProps, ResourcesProps } from "@/types";
import { getFileImage } from "@/utils/helper";
import { SupportedTypes } from "@/utils/supportedFileTypes";
import { Box, IconButton, Typography } from "@mui/material";
import { MoreVert as MoreVertIcon } from "@mui/icons-material";
import ContextMenu from "@/components/ContextMenu";

interface Props {
  resources: ResourcesProps;
}

interface RowProps {
  id: string;
  name: string;
  type: SupportedTypes;
  owner: string;
  lastModified: string;
  size: string;
}

const RowCell: FC<PropsWithChildren> = ({ children }) => (
  <Box
    component="span"
    sx={{
      display: "flex",
      alignItems: "center",
      gap: "7px",
      padding: "10px 10px 10px 0px",
      overflow: "hidden",
      borderBottomWidth: "1px",
      borderBottomColor: "border.primary",
      borderBottomStyle: "solid",
    }}
  >
    {children}
  </Box>
);

export const ListView: FC<Props> = memo(({ resources }) => {
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

  const folders: RowProps[] = resources.folders.map(
    (folder: ResourceProps) => ({
      id: `folder-${folder.id}`,
      name: folder.name,
      type: folder.type,
      owner: "Jaydon Frankie",
      lastModified: "Dec 26, 2023",
      size: "4 KB",
    })
  );
  const files: RowProps[] = resources.files.map((file: ResourceProps) => ({
    id: `file-${file.id}`,
    name: file.name,
    type: file.type,
    owner: "Jaydon Frankie",
    lastModified: "Dec 26, 2023",
    size: "4 KB",
  }));

  const rows: RowProps[] = [...folders, ...files];
  const rowFontSize = "13px";

  return (
    <>
      <ContextMenu
        open={contextMenuOpen}
        onClose={handleCloseContextMenu}
        onMenuItemClick={handleMenuItemClick}
        anchorX={contextMenuPosition.x}
        anchorY={contextMenuPosition.y}
      />
      <Box
        component="div"
        sx={{
          width: "100%",
          overflow: "scroll hidden",
          cursor: "default",
          userSelect: "none",
          paddingBottom: "10px",
          "&::-webkit-scrollbar": {
            width: "0px",
            height: "4px",
          },
          "&::-webkit-scrollbar-track": {
            boxShadow: `inset 0 0 6px rgba(0, 0, 0, 0)`,
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "darkgrey",
            borderRadius: "10px",
            outline: `1px solid slategrey`,
          },
        }}
      >
        <Box
          component="div"
          sx={{
            position: "relative",
            width: "100%",
            "div:last-child": {
              span: { border: "none" },
            },
          }}
        >
          <Box
            component="div"
            sx={{
              width: "100%",
              display: "grid",
              gridTemplateColumns:
                "minmax(250px, 5fr) minmax(150px, 2fr) minmax(150px, 2fr) minmax(150px, 2fr) minmax(80px, 1fr)",
              padding: "12px 0px",
              borderBottomWidth: "1px",
              borderBottomColor: "border.primary",
              borderBottomStyle: "solid",
              bgcolor: "background.default",
            }}
          >
            <Box component="span">
              <Typography fontSize={rowFontSize} fontWeight={600}>
                Name
              </Typography>
            </Box>
            <Box component="span">
              <Typography fontSize={rowFontSize} fontWeight={600}>
                Owner
              </Typography>
            </Box>
            <Box component="span">
              <Typography fontSize={rowFontSize} fontWeight={600}>
                Last Modified
              </Typography>
            </Box>
            <Box component="span">
              <Typography fontSize={rowFontSize} fontWeight={600}>
                Size
              </Typography>
            </Box>
            <Box component="span" />
          </Box>
          {rows.map((row: RowProps) => (
            <Box
              key={row.id}
              component="div"
              sx={{
                width: "100%",
                display: "grid",
                gridTemplateColumns:
                  "minmax(250px, 5fr) minmax(150px, 2fr) minmax(150px, 2fr) minmax(150px, 2fr) minmax(80px, 1fr)",
              }}
            >
              <RowCell>
                <img
                  src={getFileImage(row.type)}
                  alt={row.name}
                  style={{ height: "60%" }}
                />
                <Typography
                  sx={{
                    fontSize: rowFontSize,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {row.name}
                </Typography>
              </RowCell>
              <RowCell>
                <Typography
                  sx={{
                    fontSize: rowFontSize,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {row.owner}
                </Typography>
              </RowCell>
              <RowCell>
                <Typography
                  sx={{
                    fontSize: rowFontSize,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {row.lastModified}
                </Typography>
              </RowCell>
              <RowCell>
                <Typography
                  sx={{
                    fontSize: rowFontSize,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {row.size}
                </Typography>
              </RowCell>
              <RowCell>
                <IconButton sx={{ border: "none" }} onClick={handleContextMenu}>
                  <MoreVertIcon fontSize="small" />
                </IconButton>
              </RowCell>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
});

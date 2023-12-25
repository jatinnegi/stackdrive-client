import { FC } from "react";
import { ResourceProps, ResourcesProps } from "@/types";
import { getFileImage } from "@/utils/helper";
import { SupportedTypes } from "@/utils/supportedFileTypes";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import { MoreVert as MoreVertIcon } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";

interface RowProps {
  id: string;
  name: string;
  type: SupportedTypes;
  owner: string;
  lastModified: string;
  size: string;
}

interface Props {
  resources: ResourcesProps;
}

export const ListView: FC<Props> = ({ resources }) => {
  const padding = "14px 30px 14px 0px";

  const folders: RowProps[] = resources.folders.map(
    (folder: ResourceProps) => ({
      id: `folder-${folder.id}`,
      name: folder.name,
      type: folder.type,
      lastModified: "Nov 14, 2023",
      owner: "Jayden",
      size: "-",
    })
  );

  const files: RowProps[] = resources.files.map((file: ResourceProps) => ({
    id: `file-${file.id}`,
    name: file.name,
    type: file.type,
    lastModified: "Nov 14, 2023",
    owner: "Jayden",
    size: "2 KB",
  }));

  const rows: RowProps[] = [...folders, ...files];

  return (
    <TableContainer
      component={Box}
      sx={{ backgroundColor: "background.default", cursor: "default" }}
    >
      <Table
        sx={{
          minWidth: 650,
          th: {
            border: "none",
            padding,
            overflow: "hidden",
          },
          td: { border: "none", padding },
          tbody: {
            tr: {
              borderTopWidth: "1px",
              borderTopStyle: "solid",
              borderTopColor: "border.primary",
            },
          },
        }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell width="50%" sx={{ minWidth: "180px" }}>
              Name
            </TableCell>
            <TableCell width="16%" sx={{ minWidth: "130px" }}>
              Owner
            </TableCell>
            <TableCell width="16%" sx={{ minWidth: "130px" }}>
              Last Modified
            </TableCell>
            <TableCell width="16%" sx={{ minWidth: "130px" }}>
              File Size
            </TableCell>
            <TableCell width="1%" sx={{ minWidth: "50px" }} />
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: RowProps) => (
            <TableRow key={row.id} sx={{ fontSize: "13px" }}>
              <TableCell
                sx={{
                  overflow: "hidden",
                  height: "100%",
                }}
              >
                <Box
                  component="div"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    height: "100%",
                    width: "100%",
                    maxWidth: "200px",
                  }}
                >
                  <img
                    src={getFileImage(row.type)}
                    alt={row.name}
                    style={{ height: "25px" }}
                  />
                  <Typography
                    sx={{
                      display: "inline",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      fontSize: "13px",
                    }}
                  >
                    {row.name}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell>{row.owner}</TableCell>
              <TableCell>{row.lastModified}</TableCell>
              <TableCell>{row.size}</TableCell>
              <TableCell>
                <IconButton>
                  <MoreVertIcon fontSize="small" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

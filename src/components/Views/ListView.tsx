import React, { FC, PropsWithChildren, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/reducers";
import { handleContextMenu } from "@/redux/actions";
import { SortBy } from "@/redux/slices/resources";
import { ResourceProps } from "@/types";
import { getFileImage } from "@/utils/helper";
import { Box, IconButton, Typography } from "@mui/material";
import {
  MoreVert as MoreVertIcon,
  ArrowUpwardRounded as ArrowUpwordIcon,
  ArrowDownwardRounded as ArrowDownwardIcon,
} from "@mui/icons-material";
import ResourceWrapper from "@/components/ResourceWrapper";
import { dummyUsers } from "@/data";

interface Props {
  resources: ResourceProps[];
  sortBy: SortBy | null;
  isOrderAsc: boolean;
  handleSortUpdate: (sort: SortBy) => void;
}

const HeaderCell: FC<
  PropsWithChildren & { onClick: () => void; activeSort: boolean }
> = ({ activeSort, onClick, children }) => (
  <Box
    component="span"
    sx={{
      padding: "12px 0px",
      borderBottomWidth: "1px",
      borderBottomColor: "border.primary",
      borderBottomStyle: "solid",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      cursor: "pointer",
      color: activeSort ? "text.primary" : "text.secondary",
    }}
    onClick={onClick}
  >
    {children}
  </Box>
);

const RowCell: FC<PropsWithChildren> = ({ children }) => (
  <Box
    component="span"
    sx={{
      display: "flex",
      alignItems: "center",
      gap: "7px",
      padding: "5px 5px 5px 0px",
      overflow: "hidden",
      borderBottomWidth: "1px",
      borderBottomColor: "border.primary",
      borderBottomStyle: "solid",
    }}
  >
    {children}
  </Box>
);

const rowFontSize = "13px";

export const ListView: FC<Props> = memo(
  ({ resources, sortBy, isOrderAsc, handleSortUpdate }) => {
    const dispatch = useDispatch();
    const { selected } = useSelector((state: RootState) => state.resources);

    return (
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
              bgcolor: "background.default",
            }}
            onMouseDown={(e: React.MouseEvent) => {
              e.stopPropagation();
            }}
          >
            <HeaderCell
              activeSort={sortBy === "name"}
              onClick={() => {
                handleSortUpdate("name");
              }}
            >
              <Typography fontSize={rowFontSize} fontWeight={600}>
                Name
              </Typography>
              {sortBy === "name" && (
                <IconButton sx={{ padding: "5px" }}>
                  {isOrderAsc ? (
                    <ArrowUpwordIcon sx={{ fontSize: "16px" }} />
                  ) : (
                    <ArrowDownwardIcon sx={{ fontSize: "16px" }} />
                  )}
                </IconButton>
              )}
            </HeaderCell>
            <HeaderCell
              activeSort={sortBy === "owner"}
              onClick={() => {
                handleSortUpdate("owner");
              }}
            >
              <Typography fontSize={rowFontSize} fontWeight={600}>
                Owner
              </Typography>
              {sortBy === "owner" && (
                <IconButton sx={{ padding: "5px" }}>
                  {isOrderAsc ? (
                    <ArrowUpwordIcon sx={{ fontSize: "16px" }} />
                  ) : (
                    <ArrowDownwardIcon sx={{ fontSize: "16px" }} />
                  )}
                </IconButton>
              )}
            </HeaderCell>
            <HeaderCell
              activeSort={sortBy === "lastModified"}
              onClick={() => {
                handleSortUpdate("lastModified");
              }}
            >
              <Typography fontSize={rowFontSize} fontWeight={600}>
                Last Modified
              </Typography>
              {sortBy === "lastModified" && (
                <IconButton sx={{ padding: "5px" }}>
                  {isOrderAsc ? (
                    <ArrowUpwordIcon sx={{ fontSize: "16px" }} />
                  ) : (
                    <ArrowDownwardIcon sx={{ fontSize: "16px" }} />
                  )}
                </IconButton>
              )}
            </HeaderCell>
            <HeaderCell
              activeSort={sortBy === "size"}
              onClick={() => {
                handleSortUpdate("size");
              }}
            >
              <Typography fontSize={rowFontSize} fontWeight={600}>
                Size
              </Typography>
              {sortBy === "size" && (
                <IconButton sx={{ padding: "5px" }}>
                  {isOrderAsc ? (
                    <ArrowUpwordIcon sx={{ fontSize: "16px" }} />
                  ) : (
                    <ArrowDownwardIcon sx={{ fontSize: "16px" }} />
                  )}
                </IconButton>
              )}
            </HeaderCell>
            <Box
              component="span"
              sx={{
                padding: "12px 0px",
                borderBottomWidth: "1px",
                borderBottomColor: "border.primary",
                borderBottomStyle: "solid",
              }}
            />
          </Box>
          {resources.map((row: ResourceProps) => (
            <ResourceWrapper
              id={row.id}
              key={row.id}
              sx={{
                backgroundColor:
                  selected.indexOf(row.id) === -1
                    ? "background.default"
                    : "selected.primary",
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
                <img
                  src={dummyUsers[0].img}
                  alt={dummyUsers[0].name}
                  style={{ height: "26px", width: "26px", borderRadius: "50%" }}
                />
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
                <IconButton
                  sx={{ border: "none", cursor: "default" }}
                  onClick={(e: React.MouseEvent) => {
                    e.stopPropagation();
                    dispatch(
                      handleContextMenu({
                        resourceContextMenu: true,
                        anchorX: e.clientX,
                        anchorY: e.clientY,
                      })
                    );
                  }}
                >
                  <MoreVertIcon fontSize="small" />
                </IconButton>
              </RowCell>
            </ResourceWrapper>
          ))}
        </Box>
      </Box>
    );
  }
);

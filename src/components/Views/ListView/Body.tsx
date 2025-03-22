import {
  FC,
  ForwardedRef,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/reducers";
import { handleContextMenu } from "@/redux/actions";
import { dummyUsers, ResourceProps } from "@/data";
import { getFileImage } from "@/utils/helper";
import { Box, Typography, IconButton } from "@mui/material";
import { MoreVert as MoreVertIcon } from "@mui/icons-material";
import ResourceWrapper from "@/components/ResourceWrapper";

const FONT_SIZE = 13;

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
      backgroundColor: "inherit",
    }}
  >
    {children}
  </Box>
);

interface Props {
  bodyRef: ForwardedRef<HTMLDivElement>;
  bodyHeight: number;
  folders: ResourceProps[];
  files: ResourceProps[];
  handleScroll: () => void;
}

const Body: FC<Props> = ({
  bodyRef,
  bodyHeight,
  files,
  folders,
  handleScroll,
}) => {
  const { selected } = useSelector((state: RootState) => state.resources);
  const dispatch = useDispatch();

  return (
    <Box
      component="div"
      ref={bodyRef}
      onScroll={handleScroll}
      sx={{
        width: "100%",
        height: bodyHeight,
        overflow: "scroll",
        cursor: "default",
        userSelect: "none",
        paddingBottom: "10px",
        // "&::-webkit-scrollbar": {
        //   width: "0px",
        //   height: "4px",
        // },
        // "&::-webkit-scrollbar-track": {
        //   boxShadow: `inset 0 0 6px rgba(0, 0, 0, 0)`,
        // },
        // "&::-webkit-scrollbar-thumb": {
        //   backgroundColor: "darkgrey",
        //   borderRadius: "10px",
        //   outline: `1px solid slategrey`,
        // },
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
        {folders.map((row: ResourceProps) => (
          <ResourceWrapper
            key={row.id}
            type={row.type}
            id={row.id}
            name={row.name}
            sx={{
              backgroundColor:
                selected.indexOf(row.id) === -1
                  ? "background.primary"
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
                style={{
                  height: "60%",
                  userSelect: "none",
                  pointerEvents: "none",
                }}
              />
              <Typography
                sx={{
                  fontSize: FONT_SIZE,
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
                style={{
                  height: "26px",
                  width: "26px",
                  borderRadius: "50%",
                  userSelect: "none",
                  pointerEvents: "none",
                }}
              />
              <Typography
                sx={{
                  fontSize: FONT_SIZE,
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
                  fontSize: FONT_SIZE,
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
                  fontSize: FONT_SIZE,
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
        {files.map((row: ResourceProps) => (
          <ResourceWrapper
            key={row.id}
            type={row.type}
            id={row.id}
            name={row.name}
            sx={{
              backgroundColor:
                selected.indexOf(row.id) === -1
                  ? "background.primary"
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
                style={{
                  height: "60%",
                  userSelect: "none",
                  pointerEvents: "none",
                }}
              />
              <Typography
                sx={{
                  fontSize: FONT_SIZE,
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
                style={{
                  height: "26px",
                  width: "26px",
                  borderRadius: "50%",
                  userSelect: "none",
                  pointerEvents: "none",
                }}
              />
              <Typography
                sx={{
                  fontSize: FONT_SIZE,
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
                  fontSize: FONT_SIZE,
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
                  fontSize: FONT_SIZE,
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
};

export default Body;

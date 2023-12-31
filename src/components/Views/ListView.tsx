import { FC, PropsWithChildren, memo } from "react";
import { useDispatch } from "react-redux";
import { handleContextMenu } from "@/redux/actions";
import { ResourceProps } from "@/types";
import { getFileImage } from "@/utils/helper";
import { Box, IconButton, Typography } from "@mui/material";
import { MoreVert as MoreVertIcon } from "@mui/icons-material";
import ResourceWrapper from "@/components/ResourceWrapper";

interface Props {
  resources: ResourceProps[];
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

const rowFontSize = "13px";

export const ListView: FC<Props> = memo(({ resources }) => {
  const dispatch = useDispatch();

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
        >
          <Box
            component="span"
            sx={{
              padding: "12px 0px",
              borderBottomWidth: "1px",
              borderBottomColor: "border.primary",
              borderBottomStyle: "solid",
            }}
          >
            <Typography fontSize={rowFontSize} fontWeight={600}>
              Name
            </Typography>
          </Box>
          <Box
            component="span"
            sx={{
              padding: "12px 0px",
              borderBottomWidth: "1px",
              borderBottomColor: "border.primary",
              borderBottomStyle: "solid",
            }}
          >
            <Typography fontSize={rowFontSize} fontWeight={600}>
              Owner
            </Typography>
          </Box>
          <Box
            component="span"
            sx={{
              padding: "12px 0px",
              borderBottomWidth: "1px",
              borderBottomColor: "border.primary",
              borderBottomStyle: "solid",
            }}
          >
            <Typography fontSize={rowFontSize} fontWeight={600}>
              Last Modified
            </Typography>
          </Box>
          <Box
            component="span"
            sx={{
              padding: "12px 0px",
              borderBottomWidth: "1px",
              borderBottomColor: "border.primary",
              borderBottomStyle: "solid",
            }}
          >
            <Typography fontSize={rowFontSize} fontWeight={600}>
              Size
            </Typography>
          </Box>
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
});

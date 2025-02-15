import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/reducers";
import { handleContextMenu } from "@/redux/actions";
import { Box, Typography, IconButton } from "@mui/material";
import { MoreVert as MoreVertIcon } from "@mui/icons-material";
import { ResourceProps } from "@/types";
import { getFileImage } from "@/utils/helper";
import ResourceWrapper from "@/components/ResourceWrapper";

const ResourceCard: FC<ResourceProps> = ({ id, name, type, imgSrc }) => {
  const dispatch = useDispatch();
  const { selected } = useSelector((state: RootState) => state.resources);

  return (
    <ResourceWrapper
      id={id}
      name={name}
      type={type}
      sx={{
        backgroundColor:
          selected.indexOf(id) === -1 ? "background.paper" : "selected.primary",
        overflow: "hidden",
        borderRadius: "6px",
        cursor: "default",
        userSelect: "none",
      }}
    >
      <Box component="div" className="resource_card">
        <Box
          component="div"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 15px",
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
                fontWeight: 500,
                maxWidth: "170px",
                marginLeft: "10px",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                margin: "0px 10px",
                width: "100%",
              }}
            >
              {name}
            </Typography>
          </Box>
          <IconButton
            sx={{ cursor: "default" }}
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
        </Box>
        {imgSrc && (
          <Box
            className="preview-file-image"
            sx={{ padding: "5px 15px 15px 15px" }}
          >
            <Box
              sx={{
                width: "100%",
                height: "120px",
                background: `url('${imgSrc}') no-repeat top center/cover`,
              }}
            />
          </Box>
        )}
      </Box>
    </ResourceWrapper>
  );
};

export default ResourceCard;

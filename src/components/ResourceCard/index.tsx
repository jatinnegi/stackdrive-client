import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { ResourceProps } from "@/types";
import { getFileImage } from "@/utils/helper";

const ResourceCard: FC<ResourceProps> = ({ id, name, type, imgSrc }) => {
  return (
    <Box
      component="div"
      className="suggested_card"
      sx={{
        // backgroundColor: id === 3 ? "selected.primary" : "background.paper",
        backgroundColor: "background.paper",
        borderRadius: "6px",
        padding: "15px 15px",
        overflow: "hidden",
        cursor: "pointer",
      }}
    >
      <Box
        component="div"
        sx={{
          display: "flex",
          alignItems: "flex-end",
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
            width: "100%",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          {name}
        </Typography>
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
  );
};

export default ResourceCard;

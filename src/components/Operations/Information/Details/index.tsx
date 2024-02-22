import { FC, PropsWithChildren } from "react";
import { ResourceProps } from "@/types";
import { Box, Typography, Button, Tooltip, BoxProps } from "@mui/material";
import { FolderSpecial as FolderSpecialIcon } from "@mui/icons-material";
import { dummyUsers } from "@/data";
import Loader from "./Loader";

interface Props {
  resource: ResourceProps | null;
  loading: boolean;
}

const ItemWrapper: FC<PropsWithChildren & BoxProps> = ({
  children,
  ...props
}) => {
  return (
    <Box
      component="div"
      sx={{
        my: 2,
        display: "flex",
        flexDirection: "column",
        gap: "4px",
        alignItems: "flex-start",
        ...props.sx,
      }}
    >
      {children}
    </Box>
  );
};

const user = dummyUsers[0];

const Details: FC<Props> = ({ resource, loading }) => {
  if (loading) return <Loader />;

  if (!resource) return <Typography>Sorry, no detail found</Typography>;

  return (
    <Box component="div">
      <Typography
        sx={{
          fontWeight: 600,
        }}
      >
        {resource.type === "folder" ? "Folder" : "File"} details
      </Typography>
      <ItemWrapper>
        <Typography sx={{ fontSize: 14 }}>Type</Typography>
        <Typography
          sx={{
            fontSize: 14,
            color: "text.secondary",
            textTransform: "capitalize",
          }}
        >
          {resource.type}
        </Typography>
      </ItemWrapper>
      <ItemWrapper>
        <Typography sx={{ fontSize: 14 }}>Location</Typography>
        <Tooltip placement="bottom-start" title="My Drive">
          <Button
            sx={{
              display: "flex",
              textTransform: "capitalize",
              fontSize: 14,
              gap: "7px",
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "border.primary",
              color: "text.secondary",
              padding: "8px 12px",
            }}
          >
            <FolderSpecialIcon sx={{ fontSize: 20 }} />
            <Typography
              sx={{
                fontSize: "inherit",
                fontWeight: 600,
                maxWidth: "100px",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
              }}
            >
              My Drive
            </Typography>
          </Button>
        </Tooltip>
      </ItemWrapper>
      <ItemWrapper
        sx={{
          gap: "10px",
          cursor: "default",
          overflow: "hidden",
        }}
      >
        <Typography sx={{ fontSize: 14 }}>Owner</Typography>
        <Box
          component="div"
          sx={{ display: "flex", alignItems: "center", width: "100%" }}
        >
          <img
            src={user.img}
            alt={user.name}
            style={{
              width: "15%",
              borderRadius: "50%",
            }}
          />
          <Box
            component="div"
            sx={{ marginLeft: "12px", width: "calc(80% - 12px)" }}
          >
            <Typography
              sx={{
                fontSize: "15px",
                lineHeight: 1.2,
              }}
            >
              {user.name}
            </Typography>
            <Box component="div" sx={{ display: "flex" }}>
              <Tooltip placement="bottom-start" title={user.email}>
                <Typography
                  sx={{
                    fontSize: "13px",
                    color: "text.secondary",
                    fontWeight: 600,
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                  }}
                >
                  {user.email}
                </Typography>
              </Tooltip>
            </Box>
          </Box>
        </Box>
      </ItemWrapper>
      <ItemWrapper>
        <Typography sx={{ fontSize: 14 }}>Size</Typography>
        <Typography sx={{ fontSize: 14, color: "text.secondary" }}>
          2.4 GB
        </Typography>
      </ItemWrapper>
      <ItemWrapper>
        <Typography sx={{ fontSize: 14 }}>Modified</Typography>
        <Typography sx={{ fontSize: 14, color: "text.secondary" }}>
          Nov 14, 2023
        </Typography>
      </ItemWrapper>
      <ItemWrapper>
        <Typography sx={{ fontSize: 14 }}>Opened</Typography>
        <Typography sx={{ fontSize: 14, color: "text.secondary" }}>
          Jan 28, 2024
        </Typography>
      </ItemWrapper>
      <ItemWrapper>
        <Typography sx={{ fontSize: 14 }}>Created</Typography>
        <Typography sx={{ fontSize: 14, color: "text.secondary" }}>
          Jun 7, 2023
        </Typography>
      </ItemWrapper>
    </Box>
  );
};

export default Details;

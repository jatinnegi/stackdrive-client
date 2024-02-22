import { FC, PropsWithChildren } from "react";
import { Box, Skeleton } from "@mui/material";

const ItemWrapper: FC<PropsWithChildren> = ({ children }) => (
  <Box sx={{ mb: 3, display: "flex", alignItems: "center", gap: "10px" }}>
    {children}
  </Box>
);

const Loader = () => {
  return (
    <Box component="div">
      <ItemWrapper>
        <Skeleton variant="circular" height={60} width={60} />
        <Box
          component="div"
          sx={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Skeleton variant="rounded" width="100%" height={17} />
          <Skeleton variant="rounded" width="100%" height={12} />
        </Box>
      </ItemWrapper>
      <ItemWrapper>
        <Skeleton variant="circular" height={60} width={60} />
        <Box
          component="div"
          sx={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Skeleton variant="rounded" width="100%" height={17} />
          <Skeleton variant="rounded" width="100%" height={12} />
        </Box>
      </ItemWrapper>
      <ItemWrapper>
        <Skeleton variant="circular" height={60} width={60} />
        <Box
          component="div"
          sx={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Skeleton variant="rounded" width="100%" height={17} />
          <Skeleton variant="rounded" width="100%" height={12} />
        </Box>
      </ItemWrapper>
      <ItemWrapper>
        <Skeleton variant="circular" height={60} width={60} />
        <Box
          component="div"
          sx={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Skeleton variant="rounded" width="100%" height={17} />
          <Skeleton variant="rounded" width="100%" height={12} />
        </Box>
      </ItemWrapper>
      <ItemWrapper>
        <Skeleton variant="circular" height={60} width={60} />
        <Box
          component="div"
          sx={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Skeleton variant="rounded" width="100%" height={17} />
          <Skeleton variant="rounded" width="100%" height={12} />
        </Box>
      </ItemWrapper>
      <ItemWrapper>
        <Skeleton variant="circular" height={60} width={60} />
        <Box
          component="div"
          sx={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Skeleton variant="rounded" width="100%" height={17} />
          <Skeleton variant="rounded" width="100%" height={12} />
        </Box>
      </ItemWrapper>
    </Box>
  );
};

export default Loader;

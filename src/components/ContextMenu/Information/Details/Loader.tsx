import { FC, PropsWithChildren } from "react";
import { Box, Skeleton } from "@mui/material";

const ItemWrapper: FC<PropsWithChildren> = ({ children }) => (
  <Box sx={{ my: 3, display: "flex", flexDirection: "column", gap: "5px" }}>
    {children}
  </Box>
);

const Loader = () => {
  return (
    <Box component="div">
      <Skeleton variant="rounded" width="100px" height={20} />
      <ItemWrapper>
        <Skeleton variant="rounded" width="120px" height={20} />
        <Skeleton variant="rounded" width="180px" height={30} />
      </ItemWrapper>
      <ItemWrapper>
        <Box
          component="div"
          sx={{ display: "flex", gap: "8px", ailgnItems: "center" }}
        >
          <Skeleton variant="circular" width={60} height={60} />
          <Box
            component="div"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "4px",
              flex: 1,
            }}
          >
            <Skeleton variant="rounded" height={20} width="150px" />
            <Skeleton variant="rounded" height={20} width="220px" />
          </Box>
        </Box>
      </ItemWrapper>
      <ItemWrapper>
        <Skeleton variant="rounded" height={20} width="50px" />
        <Skeleton variant="rounded" height={20} width="150px" />
      </ItemWrapper>
      <ItemWrapper>
        <Skeleton variant="rounded" height={20} width="50px" />
        <Skeleton variant="rounded" height={20} width="150px" />
      </ItemWrapper>
      <ItemWrapper>
        <Skeleton variant="rounded" height={20} width="50px" />
        <Skeleton variant="rounded" height={20} width="150px" />
      </ItemWrapper>
      <ItemWrapper>
        <Skeleton variant="rounded" height={20} width="50px" />
        <Skeleton variant="rounded" height={20} width="150px" />
      </ItemWrapper>
    </Box>
  );
};

export default Loader;

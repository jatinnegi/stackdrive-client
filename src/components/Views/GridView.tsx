import { FC, PropsWithChildren, useEffect, useRef } from "react";
import { useResize } from "@/hooks";
import { Box } from "@mui/material";
import { ScrollingCarousel } from "@/components/ScrollingCarousel/ScrollingCarousel";

export const GridView: FC<PropsWithChildren> = ({ children }) => {
  const { width } = useResize();

  return (
    <>
      {width >= 1200 ? (
        <DefaultGridView>{children}</DefaultGridView>
      ) : (
        <MobileGridView>{children}</MobileGridView>
      )}
    </>
  );
};

export const DefaultGridView: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box
      component="div"
      sx={{
        display: "grid",
        gap: "10px",
        margin: "10px 0px",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
      }}
    >
      {children}
    </Box>
  );
};

export const MobileGridView: FC<PropsWithChildren> = ({ children }) => {
  const parentRef = useRef<HTMLDivElement | null>(null);
  const childRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!parentRef.current || !childRef.current) return;
    const height = childRef.current.offsetHeight;
    parentRef.current.style.height = `${height}px`;
  }, []);

  return (
    <Box ref={parentRef}>
      <Box
        ref={childRef}
        sx={{ position: "absolute", left: "0px", width: "100%" }}
      >
        <ScrollingCarousel selector="div.resource_card" itemMinWidth="280px">
          {children}
        </ScrollingCarousel>
      </Box>
    </Box>
  );
};

import { useEffect, useRef, useState } from "react";
import { useResize } from "@/hooks";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/reducers";
import { Box } from "@mui/material";
import Header from "./Header";
import Main from "./Main";

export default function Sidebar() {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const [headerHeight, setHeaderHeight] = useState<number>(0);
  const { layout } = useSelector((state: RootState) => state.settings);
  const { width } = useResize();

  useEffect(() => {
    if (!headerRef.current) {
      return;
    }
    setHeaderHeight(headerRef.current.clientHeight);
  }, []);

  const isMobile: boolean = width < 1200;
  const fullDisplay: boolean = isMobile || layout === "full";
  const mainHeight: string = `calc(100svh - ${headerHeight}px)`;

  return (
    <Box
      display={{ xs: "none", lg: "block" }}
      position="fixed"
      top="0px"
      left="0px"
      zIndex={20}
      width={fullDisplay ? "260px" : "85px"}
      onMouseDown={(e: React.MouseEvent) => {
        e.stopPropagation();
      }}
      sx={{
        backgroundColor: "background.default",
        borderRightColor: "border.primary",
        borderRightStyle: "dashed",
        borderRightWidth: "1px",
        backdropFilter: "blur(20px)",
        px: "5px",
      }}
    >
      <Header ref={headerRef} fullDisplay={fullDisplay} />
      <Main height={mainHeight} layout={layout} fullDisplay={fullDisplay} />
    </Box>
  );
}

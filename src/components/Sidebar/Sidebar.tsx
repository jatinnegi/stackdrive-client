import { useEffect, useRef, useState } from "react";
import { useResize } from "@/hooks";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/reducers";
import { Box } from "@mui/material";
import constants from "@/constants";
import Header from "./Header";
import Main from "./Main";
import Toggle from "./Toggle";

export default function Sidebar() {
  const [activeHover, setActiveHover] = useState<boolean>(false);
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
  const fullDisplay: boolean = activeHover || isMobile || layout === "full";
  const mainHeight: string = `calc(100svh - ${headerHeight}px)`;

  return (
    <>
      <Box
        display={{ xs: "none", lg: "block" }}
        position="fixed"
        top="0px"
        left="0px"
        zIndex={20}
        width={
          fullDisplay ? constants.sidebar.full : constants.sidebar.collapse
        }
        onMouseDown={(e: React.MouseEvent) => {
          e.stopPropagation();
        }}
        sx={{
          bgcolor: "filterBackgroundColor.primary",
          backdropFilter: "blur(10px)",
          borderRightColor: "border.primary",
          borderRightStyle: "dashed",
          borderRightWidth: "1px",
          px: "5px",
          transition: "width 200ms ease-in",
        }}
        onMouseEnter={() => {
          setActiveHover(true);
        }}
        onMouseLeave={() => {
          setActiveHover(false);
        }}
      >
        <Header ref={headerRef} fullDisplay={fullDisplay} />
        <Main
          height={mainHeight}
          layout={layout}
          fullDisplay={fullDisplay}
          hoverState={activeHover}
        />
      </Box>
      <Toggle
        hoverState={activeHover}
        setHoverState={(newState: boolean) => {
          setActiveHover(newState);
        }}
      />
    </>
  );
}

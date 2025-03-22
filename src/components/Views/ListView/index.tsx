import { FC, useEffect, useRef, useState } from "react";
import { SortBy } from "@/redux/slices/resources";
import { ResourceProps } from "@/types";
import Header from "./HeaderNew";
import Body from "./Body";
import { Box } from "@mui/material";
import { useResize } from "@/hooks";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/reducers";

interface Props {
  folders: ResourceProps[];
  files: ResourceProps[];
  sortBy: SortBy | null;
  isOrderAsc: boolean;
  handleSortUpdate: (sort: SortBy) => void;
}

export const ListView: FC<Props> = ({
  folders,
  files,
  sortBy,
  isOrderAsc,
  handleSortUpdate,
}) => {
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [bodyHeight, setBodyHeight] = useState<number>(0);

  const headerRef = useRef<HTMLDivElement | null>(null);
  const bodyRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (bodyRef.current) {
      const windowHeight = window.innerHeight;
      const rect = bodyRef.current.getBoundingClientRect();
      const y = rect.y;
      setBodyHeight(windowHeight - y - 30);
    }
  }, []);

  const handleScroll = () => {
    if (bodyRef.current && headerRef.current) {
      headerRef.current.scrollLeft = bodyRef.current.scrollLeft;
    }
  };

  const { width: viewportWidth } = useResize();

  const { layout } = useSelector((state: RootState) => state.settings);

  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }
    setContainerWidth(containerRef.current.clientWidth);
  }, [layout, viewportWidth]);

  return (
    <Box ref={containerRef} component="div">
      <Box component="div" sx={{ width: containerWidth }}>
        <Header
          headerRef={headerRef}
          sortBy={sortBy}
          isOrderAsc={isOrderAsc}
          handleSortUpdate={handleSortUpdate}
        />
        <Body
          bodyRef={bodyRef}
          bodyHeight={bodyHeight}
          handleScroll={handleScroll}
          folders={folders}
          files={files}
        />
      </Box>
    </Box>
  );
};

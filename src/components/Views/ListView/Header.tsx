import React, {
  FC,
  PropsWithChildren,
  ForwardedRef,
  useRef,
  useEffect,
  useState,
} from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/reducers";
import { SortBy } from "@/redux/slices/resources";
import { useResize } from "@/hooks";
import { Box, Typography, IconButton } from "@mui/material";
import {
  ArrowUpwardRounded as ArrowUpwardIcon,
  ArrowDownwardRounded as ArrowDownwardIcon,
} from "@mui/icons-material";
import constants from "@/constants";

const FONT_SIZE = 13;
const FONT_WEIGHT = 600;

const ICON_FONT_SIZE = "16px";

const HeaderCell: FC<
  PropsWithChildren & {
    activeSort: boolean;
    onClick: () => void;
  }
> = ({ children, activeSort, onClick }) => (
  <Box
    component="span"
    sx={{
      display: "flex",
      gap: "7px",
      alignItems: "center",
      cursor: "pointer",
      color: activeSort ? "text.primary" : "text.secondary",
    }}
    onClick={onClick}
  >
    {children}
  </Box>
);

interface Props {
  headerRef: ForwardedRef<HTMLDivElement>;
  sortBy: SortBy | null;
  isOrderAsc: boolean;
  handleSortUpdate: (sort: SortBy) => void;
}

const Header: FC<Props> = ({
  headerRef,
  sortBy,
  isOrderAsc,
  handleSortUpdate,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [headerWidth, setHeaderWidth] = useState<number>(0);
  const { width: viewportWidth } = useResize();

  const { layout } = useSelector((state: RootState) => state.settings);

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }
    setHeaderWidth(containerRef.current.clientWidth);
  }, [layout, viewportWidth]);

  return (
    <Box
      ref={containerRef}
      component="div"
      sx={{
        userSelect: "none",
        bgcolor: "background.default",
        height: "25px",
        width: "100%",
      }}
    >
      <Box
        component="div"
        ref={headerRef}
        onMouseDown={(e: React.MouseEvent) => {
          e.stopPropagation();
        }}
        sx={{
          position: "fixed",
          overflow: "hidden",
          width: headerWidth,
          bgcolor: "background.default",
          top: {
            xs: 94 + constants.dashboardAppbar,
            sm: 90 + constants.dashboardAppbar,
            md: 105 + constants.dashboardAppbar,
            lg: 104 + constants.dashboardAppbar,
          },
          height: "45px",
          display: "grid",
          gridTemplateColumns:
            "minmax(250px, 5fr) minmax(150px, 2fr) minmax(150px, 2fr) minmax(150px, 2fr) minmax(80px, 1fr)",
          borderBottomWidth: "1px",
          borderBottomColor: "border.primary",
          borderBottomStyle: "solid",
          zIndex: 1,
        }}
      >
        <HeaderCell
          activeSort={sortBy === "name"}
          onClick={() => {
            handleSortUpdate("name");
          }}
        >
          <Typography fontSize={FONT_SIZE} fontWeight={FONT_WEIGHT}>
            Name
          </Typography>
          {sortBy === "name" && (
            <IconButton sx={{ padding: "5px" }}>
              {isOrderAsc ? (
                <ArrowUpwardIcon sx={{ fontSize: ICON_FONT_SIZE }} />
              ) : (
                <ArrowDownwardIcon sx={{ fontSize: ICON_FONT_SIZE }} />
              )}
            </IconButton>
          )}
        </HeaderCell>
        <HeaderCell
          activeSort={sortBy === "owner"}
          onClick={() => {
            handleSortUpdate("owner");
          }}
        >
          <Typography fontSize={FONT_SIZE} fontWeight={FONT_WEIGHT}>
            Owner
          </Typography>
          {sortBy === "owner" && (
            <IconButton sx={{ padding: "5px" }}>
              {isOrderAsc ? (
                <ArrowUpwardIcon sx={{ fontSize: ICON_FONT_SIZE }} />
              ) : (
                <ArrowDownwardIcon sx={{ fontSize: ICON_FONT_SIZE }} />
              )}
            </IconButton>
          )}
        </HeaderCell>
        <HeaderCell
          activeSort={sortBy === "lastModified"}
          onClick={() => {
            handleSortUpdate("lastModified");
          }}
        >
          <Typography fontSize={FONT_SIZE} fontWeight={FONT_WEIGHT}>
            Last Modified
          </Typography>
          {sortBy === "lastModified" && (
            <IconButton sx={{ padding: "5px" }}>
              {isOrderAsc ? (
                <ArrowUpwardIcon sx={{ fontSize: ICON_FONT_SIZE }} />
              ) : (
                <ArrowDownwardIcon sx={{ fontSize: ICON_FONT_SIZE }} />
              )}
            </IconButton>
          )}
        </HeaderCell>
        <HeaderCell
          activeSort={sortBy === "size"}
          onClick={() => {
            handleSortUpdate("size");
          }}
        >
          <Typography fontSize={FONT_SIZE} fontWeight={FONT_WEIGHT}>
            Size
          </Typography>
          {sortBy === "size" && (
            <IconButton sx={{ padding: "5px" }}>
              {isOrderAsc ? (
                <ArrowUpwardIcon sx={{ fontSize: ICON_FONT_SIZE }} />
              ) : (
                <ArrowDownwardIcon sx={{ fontSize: ICON_FONT_SIZE }} />
              )}
            </IconButton>
          )}
        </HeaderCell>
        <Box component="span" />
      </Box>
    </Box>
  );
};

export default Header;

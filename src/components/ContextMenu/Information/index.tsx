import React, { FC, useEffect, useMemo, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/reducers";
import { updateMultipleSelectedIdsBySelectionBox } from "@/redux/actions";
import { CoordinateProps, ResourceProps } from "@/types";
import { getTargetElementsInsideCoordinates } from "@/utils/helper";
import { darkTheme, lightTheme } from "@/theme";
import { Box } from "@mui/material";
import Header from "./Header";
import Main from "./Main";
import Share from "../Share";

interface Props {
  open: boolean;
  handleClose: () => void;
}

export type InformationType = "details" | "access";

const Information: FC<Props> = ({ open, handleClose }) => {
  const { data, selected } = useSelector((state: RootState) => state.resources);
  const { theme } = useSelector((state: RootState) => state.settings);
  const dispatch = useDispatch();

  const headerRef = useRef<HTMLDivElement | null>(null);

  const [current, setCurrent] = useState<InformationType>("details");
  const [displayShare, setDisplayShare] = useState<boolean>(false);

  useEffect(() => {
    if (open) {
      setCurrent("details");
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [open]);

  useEffect(() => {
    function handleKeyUp(e: KeyboardEvent) {
      if (e.key === "Escape" && open && !displayShare) {
        handleClose();
      }
    }
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [displayShare]);

  const boxShadow = useMemo(
    () =>
      theme === "light"
        ? `${lightTheme.palette.boxShadow?.primary} -40px 40px 80px -8px`
        : `${darkTheme.palette.boxShadow?.primary} -40px 40px 80px -8px`,
    [theme]
  );

  const handleMouseDown = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    const coordinates: CoordinateProps = {
      startX: e.pageX,
      startY: e.pageY,
      endX: e.pageX,
      endY: e.pageY,
    };
    const targetElements = getTargetElementsInsideCoordinates(
      data,
      coordinates
    );

    handleClose();

    const ids = targetElements.map((item: ResourceProps) => item.id);
    if (ids.length === 0) return;
    dispatch(updateMultipleSelectedIdsBySelectionBox({ ids }));
  };

  const resource = data.find(
    (resource: ResourceProps) => resource.id === selected[0]
  );

  if (!resource) return <></>;

  return (
    <>
      <Box
        component="div"
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100svw",
          height: "100svh",
          zIndex: 35,
          pointerEvents: open ? "all" : "none",
        }}
        onMouseDown={handleMouseDown}
      >
        <Box
          sx={{
            zIndex: 40,
            position: "fixed",
            top: 0,
            right: open ? "0px" : "-100%",
            width: "90svw",
            maxWidth: "380px",
            bgcolor: "filterBackgroundColor.secondary",
            backdropFilter: "blur(25px)",
            transition: "right 350ms linear",
            boxShadow,
          }}
          onMouseDown={(e: React.MouseEvent) => {
            e.stopPropagation();
          }}
        >
          <Header
            ref={headerRef}
            type={resource.type}
            name={resource.name}
            current={current}
            updateCurrent={(newValue: InformationType) => {
              if (current === newValue) return;
              setCurrent(newValue);
            }}
          />
          <Main
            headerHeight={
              headerRef.current ? headerRef.current.clientHeight : 0
            }
            current={current}
            handleManageAccess={() => {
              setDisplayShare(true);
            }}
          />
        </Box>
      </Box>
      <Share
        open={displayShare}
        updateWindowScroll={false}
        handleClose={() => {
          setDisplayShare(false);
        }}
      />
    </>
  );
};

export default Information;

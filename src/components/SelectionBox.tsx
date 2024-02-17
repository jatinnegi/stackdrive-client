import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { CoordinateProps, ResourceProps } from "@/types";
import { RootState } from "@/redux/reducers";
import {
  resetSelectedIds,
  updateMultipleSelectedIdsBySelectionBox,
} from "@/redux/actions";
import { Box } from "@mui/material";
import _ from "lodash";
import { WHITE_LISTED_URLS } from "@/utils/helper";

const initialCoordinates: CoordinateProps = {
  startX: 0,
  startY: 0,
  endX: 0,
  endY: 0,
};

export default function SelectionBox() {
  const { pathname } = useLocation();
  const [isSelecting, setIsSelecting] = useState<boolean>(false);
  const [start, setStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [coordinates, setCoordinates] =
    useState<CoordinateProps>(initialCoordinates);
  const {
    contextMenu: { open: contextMenuOpen },
    resources: { data: targetElements, selected },
  } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!WHITE_LISTED_URLS.has(pathname)) {
      return;
    }

    function handleMouseDown(e: MouseEvent) {
      // Simple return on a right click event
      if (e.button === 2) return;

      if (!contextMenuOpen) dispatch(resetSelectedIds());
      setIsSelecting(true);
      setStart({ x: e.pageX, y: e.pageY });
      setCoordinates({
        startX: e.pageX,
        startY: e.pageY,
        endX: e.pageX,
        endY: e.pageY,
      });
    }

    function handleMouseMove(e: MouseEvent) {
      if (!isSelecting) return;

      const updatedCoordinates: CoordinateProps = coordinates;

      updatedCoordinates.startX = Math.min(
        start.x,
        Math.max(e.pageX, Math.min(e.pageX, updatedCoordinates.startX))
      );
      updatedCoordinates.endX = Math.max(
        start.x,
        Math.max(e.pageX, Math.min(e.pageX, updatedCoordinates.endX))
      );
      updatedCoordinates.startY = Math.min(
        start.y,
        Math.max(e.pageY, Math.min(e.pageY, updatedCoordinates.startY))
      );
      updatedCoordinates.endY = Math.max(
        start.y,
        Math.min(e.pageY, Math.max(e.pageY, updatedCoordinates.endY))
      );

      setCoordinates({ ...updatedCoordinates });

      const itemsInSelectionBox = targetElements.filter(
        ({ id: targetElementId }: ResourceProps) => {
          const targetElement = document.getElementById(
            targetElementId.toString()
          );

          if (!targetElement) return false;

          const targetElementRect = targetElement.getBoundingClientRect();

          const targetElementLeft = window.scrollX + targetElementRect.left;
          const targetElementTop = window.scrollY + targetElementRect.top;
          const targetElementRight = window.scrollX + targetElementRect.right;
          const targetElementBottom = window.scrollY + targetElementRect.bottom;

          return (
            targetElementLeft < coordinates.endX &&
            targetElementRight > coordinates.startX &&
            targetElementTop < coordinates.endY &&
            targetElementBottom > coordinates.startY
          );
        }
      );

      const ids = itemsInSelectionBox.map((item: ResourceProps) => item.id);

      if (!_.isEqual(ids, selected))
        dispatch(updateMultipleSelectedIdsBySelectionBox({ ids }));
    }

    function handleMouseUp() {
      setIsSelecting(false);
      setStart({ x: 0, y: 0 });
      setCoordinates(initialCoordinates);
    }

    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isSelecting, coordinates, start, contextMenuOpen, selected, pathname]);

  return (
    <Box
      component="div"
      sx={{
        position: "absolute",
        top: `${coordinates.startY}px`,
        left: `${coordinates.startX}px`,
        height: `${Math.abs(coordinates.startY - coordinates.endY)}px`,
        width: `${Math.abs(coordinates.startX - coordinates.endX)}px`,
        bgcolor: "selectionBox.primary",
        zIndex: 2,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "selectionBox.primary",
      }}
    />
  );
}

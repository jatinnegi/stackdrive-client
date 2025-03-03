import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { CoordinateProps, ResourceProps } from "@/types";
import { RootState } from "@/redux/reducers";
import {
  resetSelectedIds,
  updateAnimations,
  updateMultipleSelectedIdsBySelectionBox,
} from "@/redux/actions";
import { isPathMatch } from "@/utils/helper";
import { Box } from "@mui/material";
import _ from "lodash";
import constants from "@/constants";

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

  const contextMenuOpen = useSelector(
    (state: RootState) => state.contextMenu.open
  );
  const { data: targetElements, selected } = useSelector(
    (state: RootState) => state.resources
  );

  const {
    resourceWrappersDrag,
    resourceWrappersStackAnimate,
    resourceWrappersStack,
    resourceWrapperMirrorElSelected,
  } = useSelector((state: RootState) => state.animations);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isPathMatch(pathname)) {
      return;
    }

    function handleMouseDown(e: MouseEvent) {
      // Simple return on a right click event
      if (e.button === 2) return;

      if (!contextMenuOpen && !resourceWrappersDrag) {
        dispatch(resetSelectedIds());
      }

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
      let stackAnimationEnabled = resourceWrappersStack;

      if (!isSelecting) {
        return;
      }

      if (resourceWrappersDrag) {
        const x = start.x - e.pageX;
        const y = start.y - e.pageY;

        const clientX = e.clientX;
        const clientY = e.clientY;

        const scrollX = window.scrollX;
        const scrollY = window.scrollY;

        const pageX = clientX + scrollX;
        const pageY = clientY + scrollY;

        if ((Math.abs(x) > 0 || Math.abs(y) > 0) && !stackAnimationEnabled) {
          dispatch(
            updateAnimations({
              resourceWrappersStack: true,
              resourceWrappersStackAnimate: true,
              resourceWrappersStackOffsetX: pageX,
              resourceWrappersStackOffsetY: pageY,
            })
          );
          stackAnimationEnabled = true;
        }

        dispatch(
          updateAnimations({
            resourceWrappersOffsetX: x,
            resourceWrappersOffsetY: y,
            resourceWrappersResetX: pageX,
            resourceWrappersResetY: pageY,
          })
        );

        return;
      }

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

          if (!targetElement) {
            return false;
          }

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

      if (resourceWrappersDrag) {
        dispatch(
          updateAnimations({
            resourceWrappersStackAnimateReset: true,
          })
        );
      }

      setTimeout(() => {
        dispatch(
          updateAnimations({
            resourceWrappersDrag: false,
            resourceWrappersStack: false,
            resourceWrappersStackAnimate: false,
            resourceWrappersStackAnimateReset: false,
            resourceWrappersOffsetX: -1,
            resourceWrappersOffsetY: -1,
            resourceWrappersStackOffsetX: 0,
            resourceWrappersStackOffsetY: 0,
            resourceWrappersResetX: null,
            resourceWrappersResetY: null,
            resourceWrapperMirrorElSelected: null,
          })
        );
      }, constants.stackAnimationTime + 300);
    }

    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [
    isSelecting,
    coordinates,
    start,
    contextMenuOpen,
    selected,
    pathname,
    resourceWrappersDrag,
    resourceWrappersStack,
    resourceWrappersStackAnimate,
    resourceWrapperMirrorElSelected,
  ]);

  return (
    <Box
      component="div"
      sx={{
        display: resourceWrappersDrag ? "none" : "block",
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

import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { CoordinateProps } from "@/types";

const initialCoordinates: CoordinateProps = {
  startX: 0,
  startY: 0,
  endX: 0,
  endY: 0,
};

export default function SelectionBox() {
  const [isSelecting, setIsSelecting] = useState<boolean>(false);
  const [start, setStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [coordinates, setCoordinates] =
    useState<CoordinateProps>(initialCoordinates);

  useEffect(() => {
    function handleMouseDown(e: MouseEvent) {
      setIsSelecting(true);
      setStart({ x: e.clientX, y: e.clientY });
      setCoordinates({
        startX: e.clientX,
        startY: e.clientY,
        endX: e.clientX,
        endY: e.clientY,
      });
    }

    function handleMouseMove(e: MouseEvent) {
      if (!isSelecting) return;

      const updatedCoordinates: CoordinateProps = coordinates;

      updatedCoordinates.startX = Math.min(
        start.x,
        Math.max(e.clientX, Math.min(e.clientX, updatedCoordinates.startX))
      );
      updatedCoordinates.endX = Math.max(
        start.x,
        Math.max(e.clientX, Math.min(e.clientX, updatedCoordinates.endX))
      );
      updatedCoordinates.startY = Math.min(
        start.y,
        Math.max(e.clientY, Math.min(e.clientY, updatedCoordinates.startY))
      );
      updatedCoordinates.endY = Math.max(
        start.y,
        Math.min(e.clientY, Math.max(e.clientY, updatedCoordinates.endY))
      );

      setCoordinates({ ...updatedCoordinates });
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
  }, [isSelecting, coordinates, start]);

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
        zIndex: 50,
      }}
    />
  );
}

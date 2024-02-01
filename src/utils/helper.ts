import supportedFileTypes, {
  SupportedTypes,
  Supported,
} from "./supportedFileTypes";
import { CoordinateProps, ResourceProps } from "@/types";
import FileImage from "../../public/files/ic_file.svg";

export const isActiveLink = (href: string): boolean => {
  const pathname = window.location.pathname;
  return pathname === href;
};

export const capitalize = (text: string) => {
  return `${text.charAt(0).toUpperCase()}${text.slice(1)}`;
};

export const getFileImage = (type: SupportedTypes) => {
  const file = supportedFileTypes.find((file: Supported) => file.type === type);

  if (file) return file.img;

  return FileImage;
};

export const getTargetElementsInsideCoordinates = (
  elements: ResourceProps[],
  coordinates: CoordinateProps
) => {
  const targetElements = elements.filter(
    ({ id: targetElementId }: ResourceProps) => {
      const targetElement = document.getElementById(targetElementId.toString());

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

  return targetElements;
};

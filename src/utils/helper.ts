import { Dispatch } from "redux";
import { v4 } from "uuid";
import { addMessage, removeMessage } from "@/redux/actions";
import supportedFileTypes, {
  SupportedTypes,
  Supported,
} from "./supportedFileTypes";
import { CoordinateProps, ResourceProps } from "@/types";
import FileImage from "../../public/files/ic_file.svg";
import { SortBy } from "@/redux/slices/resources";
import { matchPath } from "react-router-dom";

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

export const sortResources = (
  resources: ResourceProps[],
  sortBy: SortBy,
  asc: boolean
): ResourceProps[] => {
  const ascCompare = (a: ResourceProps, b: ResourceProps) => {
    if (a[sortBy] < b[sortBy]) return -1;
    if (a[sortBy] > b[sortBy]) return 1;

    return 0;
  };

  const descCompare = (a: ResourceProps, b: ResourceProps) => {
    if (a[sortBy] > b[sortBy]) return -1;
    if (a[sortBy] < b[sortBy]) return 1;

    return 0;
  };

  const sortedResources: ResourceProps[] = asc
    ? resources.sort(ascCompare)
    : resources.sort(descCompare);

  const folders: ResourceProps[] = [];
  const files: ResourceProps[] = [];

  sortedResources.forEach((resource: ResourceProps) => {
    if (resource.type === "folder") folders.push(resource);
    else files.push(resource);
  });

  return [...folders, ...files];
};

export const isPathMatch = (path: string) => {
  const WHITE_LISTED_URLS = ["/dashboard", "/dashboard/folders/*"];

  for (let i = 0; i < WHITE_LISTED_URLS.length; i++) {
    const url = WHITE_LISTED_URLS[i];

    if (matchPath(url, path)) {
      return true;
    } else {
      continue;
    }
  }

  return false;
};

export const addToastMessage = (
  dispatch: Dispatch,
  message: string,
  duration = 5000
) => {
  const toastId = v4();

  dispatch(addMessage({ id: toastId, type: "success", value: message }));

  setTimeout(() => {
    dispatch(removeMessage({ id: toastId }));
  }, duration);
};

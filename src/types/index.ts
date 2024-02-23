import { SupportedTypes } from "@/utils/supportedFileTypes";

export interface NavigationProps {
  id: string;
  name: string;
}

export interface ResourceProps {
  parentId: string | null;
  id: string;
  name: string;
  type: SupportedTypes;
  imgSrc: string | null;
  owner: string;
  lastModified: string;
  size: string;
  starred: boolean;
}

export interface CoordinateProps {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
}

export type { SupportedTypes };

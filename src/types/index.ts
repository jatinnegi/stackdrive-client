import { SupportedTypes } from "@/utils/supportedFileTypes";

export interface ResourceProps {
  id: string;
  name: string;
  type: SupportedTypes;
  imgSrc: string | null;
  owner: string;
  lastModified: string;
  size: string;
}

export interface CoordinateProps {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
}

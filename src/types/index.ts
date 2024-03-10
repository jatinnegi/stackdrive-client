import { SupportedTypes } from "@/utils/supportedFileTypes";

export type ThemeType = "light" | "dark";
export type LayoutType = "full" | "collapse";
export type ViewType = "grid" | "list";

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

export interface CountryType {
  code: string;
  label: string;
  phone: string;
  suggested?: boolean;
}

export type { SupportedTypes };

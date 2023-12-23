import { SupportedTypes } from "@/utils/supportedFileTypes";

export interface ResourceProps {
  id: number;
  name: string;
  type: SupportedTypes;
  imgSrc: string | null;
}

export interface ResourcesProps {
  files: ResourceProps[];
  folders: ResourceProps[];
}

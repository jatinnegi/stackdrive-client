import { SupportedTypes } from "@/utils/supportedFileTypes";

export interface FolderProps {
  id: number;
  name: string;
}

export interface FileProps {
  id: number;
  name: string;
  type: SupportedTypes;
  imgSrc: string;
}

export interface ResourceProps {
  files: FileProps[];
  folders: FolderProps[];
}

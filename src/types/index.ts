import { SupportedTypes } from "@/utils/supportedFileTypes";

export interface SuggestedCardProps {
  id: number;
  type: SupportedTypes;
  title: string;
  imgSrc: string;
}

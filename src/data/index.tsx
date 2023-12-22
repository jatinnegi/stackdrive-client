import WordPreview from "../../public/preview/word_preview.webp";
import ExcelPreview from "../../public/preview/excel_preview.webp";
import PdfPreview from "../../public/preview/pdf_preview.webp";
import PngPreview from "../../public/preview/png_preview.webp";
import { FolderProps, FileProps, ResourceProps } from "@/types";

export type { FolderProps, FileProps, ResourceProps };

export const folders: FolderProps[] = [
  {
    id: 1,
    name: "folder_example",
  },
  {
    id: 2,
    name: "course_images",
  },
  {
    id: 3,
    name: "23-04-2023",
  },
];

export const files: FileProps[] = [
  {
    id: 1,
    name: "Untitled document",
    type: "word",
    imgSrc: WordPreview,
  },
  {
    id: 2,
    name: "404 page.xlsx",
    type: "excel",
    imgSrc: ExcelPreview,
  },
  {
    id: 3,
    name: "jumpstart.png",
    type: "photo",
    imgSrc: PngPreview,
  },
  {
    id: 4,
    name: "Getting Started",
    type: "PDF",
    imgSrc: PdfPreview,
  },
];

export const resources: ResourceProps = {
  files,
  folders,
};

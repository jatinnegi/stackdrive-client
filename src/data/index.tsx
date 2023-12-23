import WordPreview from "../../public/preview/word_preview.webp";
import ExcelPreview from "../../public/preview/excel_preview.webp";
import PdfPreview from "../../public/preview/pdf_preview.webp";
import PngPreview from "../../public/preview/png_preview.webp";
import { ResourceProps, ResourcesProps } from "@/types";

export type { ResourceProps, ResourcesProps };

export const folders: ResourceProps[] = [
  {
    id: 1,
    name: "folder_example",
    type: "folder",
    imgSrc: null,
  },
  {
    id: 2,
    name: "course_images",
    type: "folder",
    imgSrc: null,
  },
  {
    id: 3,
    name: "23-04-2023",
    type: "folder",
    imgSrc: null,
  },
];

export const files: ResourceProps[] = [
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

export const resources: ResourcesProps = {
  files,
  folders,
};

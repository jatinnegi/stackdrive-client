import WordPreview from "../../public/preview/word_preview.webp";
import ExcelPreview from "../../public/preview/excel_preview.webp";
import PdfPreview from "../../public/preview/pdf_preview.webp";
import PngPreview from "../../public/preview/png_preview.webp";
import { ResourceProps } from "@/types";

export type { ResourceProps };

export const initialResourcesData: ResourceProps[] = [
  {
    id: "1",
    name: "folder_example",
    type: "folder",
    imgSrc: null,
    owner: "Jaydon Frankie",
    lastModified: "December 23, 2023",
    size: "4 KB",
  },
  {
    id: "2",
    name: "course_images",
    type: "folder",
    imgSrc: null,
    owner: "Jaydon Frankie",
    lastModified: "December 23, 2023",
    size: "2 KB",
  },
  {
    id: "3",
    name: "23-04-2023",
    type: "folder",
    imgSrc: null,
    owner: "Jaydon Frankie",
    lastModified: "December 23, 2023",
    size: "8 KB",
  },
  {
    id: "4",
    name: "Untitled document.docx",
    type: "word",
    imgSrc: WordPreview,
    owner: "Jaydon Frankie",
    lastModified: "December 23, 2023",
    size: "4 KB",
  },
  {
    id: "5",
    name: "404 page.xlsx",
    type: "excel",
    imgSrc: ExcelPreview,
    owner: "Jaydon Frankie",
    lastModified: "December 23, 2023",
    size: "4 KB",
  },
  {
    id: "6",
    name: "jumpstart.png",
    type: "photo",
    imgSrc: PngPreview,
    owner: "Jaydon Frankie",
    lastModified: "December 23, 2023",
    size: "4 KB",
  },
  {
    id: "7",
    name: "Getting Started",
    type: "PDF",
    imgSrc: PdfPreview,
    owner: "Jaydon Frankie",
    lastModified: "December 23, 2023",
    size: "4 KB",
  },
];

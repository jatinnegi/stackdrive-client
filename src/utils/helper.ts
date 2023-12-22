import { useLocation } from "react-router-dom";
import { SupportedTypes } from "./supportedFileTypes";
import ExcelImage from "../../public/files/ic_excel.svg";
import WordImage from "../../public/files/ic_word.svg";
import PdfImage from "../../public/files/ic_pdf.svg";
import PhotoImage from "../../public/files/ic_img.svg";
import FileImage from "../../public/files/ic_file.svg";

export const isActiveLink = (href: string): boolean => {
  const location = useLocation();
  const { pathname } = location;

  return pathname === href;
};

export const capitalize = (text: string) => {
  return `${text.charAt(0).toUpperCase()}${text.slice(1)}`;
};

export const getFileImage = (type: SupportedTypes) => {
  if (type === "word") return WordImage;
  if (type === "excel") return ExcelImage;
  if (type === "pdf") return PdfImage;
  if (type === "photo") return PhotoImage;
  return FileImage;
};

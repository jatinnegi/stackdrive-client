import supportedFileTypes, {
  SupportedTypes,
  Supported,
} from "./supportedFileTypes";
import FileImage from "../../public/files/ic_file.svg";

export const isActiveLink = (href: string): boolean => {
  const pathname = window.location.pathname;
  return pathname === href;
};

export const capitalize = (text: string) => {
  return `${text.charAt(0).toUpperCase()}${text.slice(1)}`;
};

export const getFileImage = (type: SupportedTypes) => {
  const file = supportedFileTypes.find((file: Supported) => file.type === type);

  if (file) return file.img;

  return FileImage;
};

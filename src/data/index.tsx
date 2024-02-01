import WordPreview from "../../public/preview/word_preview.webp";
import ExcelPreview from "../../public/preview/excel_preview.webp";
import PdfPreview from "../../public/preview/pdf_preview.webp";
import PngPreview from "../../public/preview/png_preview.webp";
import { ResourceProps } from "@/types";

export type { ResourceProps };

export interface UserProps {
  id: number;
  name: string;
  email: string;
  img: string;
}

export const dummyUsers: UserProps[] = [
  {
    id: 1,
    name: "Avery Langef",
    email: "avery43@hotmail.com",
    img: "https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_1.jpg",
  },
  {
    id: 2,
    name: "Ashlynn Ohara",
    email: "ashlynn_ohara62@hotmail.com",
    img: "https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_2.jpg",
  },
  {
    id: 3,
    name: "Milo Farrell",
    email: "milo.farrell@hotmail.com",
    img: "https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_3.jpg",
  },
  {
    id: 4,
    name: "Dasia Jenkins",
    email: "dasia_jenkins@hotmail.com",
    img: "https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_4.jpg",
  },
  {
    id: 5,
    name: "Vito Hudson",
    email: "vito.hudson@hotmail.com",
    img: "https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_5.jpg",
  },
  {
    id: 6,
    name: "Dwight Block",
    email: "dwight.block85@yahoo.com",
    img: "https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_6.jpg",
  },
  {
    id: 7,
    name: "Tyrel Greenholt",
    email: "tyrel_greenholt@gmail.com",
    img: "https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_7.jpg",
  },
  {
    id: 8,
    name: "Joana Simonis",
    email: "joana.simonis84@gmail.com",
    img: "https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_8.jpg",
  },
  {
    id: 9,
    name: "Mireya Schmitt",
    email: "mireya13@hotmail.com",
    img: "https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_9.jpg",
  },
  {
    id: 10,
    name: "Benny Morse",
    email: "benny89@yahoo.com",
    img: "https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_10.jpg",
  },
];

export const initialResourcesData: ResourceProps[] = [
  {
    id: "1",
    name: "folder_example",
    type: "folder",
    imgSrc: null,
    owner: "Jaydon Frankie",
    lastModified: "December 23, 2023",
    size: "4 KB",
    starred: false,
  },
  {
    id: "2",
    name: "course_images",
    type: "folder",
    imgSrc: null,
    owner: "Jaydon Frankie",
    lastModified: "December 23, 2023",
    size: "2 KB",
    starred: true,
  },
  {
    id: "3",
    name: "23-04-2023",
    type: "folder",
    imgSrc: null,
    owner: "Jaydon Frankie",
    lastModified: "December 23, 2023",
    size: "8 KB",
    starred: false,
  },
  {
    id: "4",
    name: "Untitled document.docx",
    type: "word",
    imgSrc: WordPreview,
    owner: "Jaydon Frankie",
    lastModified: "December 23, 2023",
    size: "4 KB",
    starred: false,
  },
  {
    id: "5",
    name: "404 page.xlsx",
    type: "excel",
    imgSrc: ExcelPreview,
    owner: "Jaydon Frankie",
    lastModified: "December 23, 2023",
    size: "4 KB",
    starred: false,
  },
  {
    id: "6",
    name: "jumpstart.png",
    type: "photo",
    imgSrc: PngPreview,
    owner: "Jaydon Frankie",
    lastModified: "December 23, 2023",
    size: "4 KB",
    starred: false,
  },
  {
    id: "7",
    name: "Getting Started.pdf",
    type: "PDF",
    imgSrc: PdfPreview,
    owner: "Jaydon Frankie",
    lastModified: "December 23, 2023",
    size: "4 KB",
    starred: false,
  },
];

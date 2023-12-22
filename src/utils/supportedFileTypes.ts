import FolderImage from "../../public/files/ic_folder.svg";
import AudioImage from "../../public/files/ic_audio.svg";
import ExcelImage from "../../public/files/ic_excel.svg";
import PhotoImage from "../../public/files/ic_img.svg";
import PDFImage from "../../public/files/ic_pdf.svg";
import TextImage from "../../public/files/ic_txt.svg";
import VideoImage from "../../public/files/ic_video.svg";
import WordImage from "../../public/files/ic_word.svg";
import ZipImage from "../../public/files/ic_zip.svg";

export type SupportedTypes =
  | "folder"
  | "audio"
  | "excel"
  | "photo"
  | "PDF"
  | "text"
  | "video"
  | "word"
  | "zip"
  | "file";

interface Supported {
  id: number;
  type: SupportedTypes;
  img: string;
}

const supportedFileTypes: Supported[] = [
  {
    id: 1,
    type: "folder",
    img: FolderImage,
  },
  {
    id: 2,
    type: "audio",
    img: AudioImage,
  },
  {
    id: 3,
    type: "excel",
    img: ExcelImage,
  },
  {
    id: 4,
    type: "PDF",
    img: PDFImage,
  },
  {
    id: 5,
    type: "photo",
    img: PhotoImage,
  },
  {
    id: 6,
    type: "text",
    img: TextImage,
  },
  {
    id: 7,
    type: "video",
    img: VideoImage,
  },
  {
    id: 8,
    type: "word",
    img: WordImage,
  },
  {
    id: 9,
    type: "zip",
    img: ZipImage,
  },
];

export default supportedFileTypes;

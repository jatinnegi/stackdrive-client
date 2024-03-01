import { FC } from "react";
import { Box, Typography, LinearProgress } from "@mui/material";
import Workspace from "@/illustrations/Workspace";
import FolderImage from "../../../../public/files/ic_folder.svg";
import AudioImage from "../../../../public/files/ic_audio.svg";
import ExcelImage from "../../../../public/files/ic_excel.svg";
import PhotoImage from "../../../../public/files/ic_img.svg";
import PDFImage from "../../../../public/files/ic_pdf.svg";

interface Props {
  number: number;
  boxShadow: string;
}

interface UploadedFile {
  id: number;
  name: string;
  size: string;
  progress: number;
  img: string;
}

const uploadedFiles: UploadedFile[] = [
  {
    id: 1,
    name: "My Documents",
    size: "4.8 MB",
    progress: 100,
    img: FolderImage,
  },
  {
    id: 2,
    name: "Sample Music.mp3",
    size: "2.8 MB",
    progress: 70,
    img: AudioImage,
  },
  {
    id: 3,
    name: "Inventory_march.csv",
    size: "458 KB",
    progress: 80,
    img: ExcelImage,
  },
  {
    id: 4,
    name: "Profile Image.png",
    size: "5.4 MB",
    progress: 30,
    img: PhotoImage,
  },
  {
    id: 5,
    name: "Updated Resume.pdf",
    size: "1.3 MB",
    progress: 15,
    img: PDFImage,
  },
];

const UploadFeature: FC<Props> = ({ number, boxShadow }) => {
  return (
    <>
      <Box
        component="div"
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          display: { md: "none", lg: "flex" },
          width: "49%",
          height: "80%",
          px: 2,
          bgcolor: "background.default",
          borderRadius: "8px",
          borderWidth: "1px",
          borderColor: "border.primary",
          borderStyle: "solid",
          boxShadow,
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          opacity: number === 2 ? 1 : 0,
          transition: "opacity 150ms linear",
        }}
      >
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box component="div" sx={{ height: "200px", width: "220px" }}>
            <Workspace />
          </Box>
          <Box component="div">
            <Typography
              sx={{ fontWeight: 600, fontSize: "14px", textAlign: "center" }}
            >
              Drop or select file/folders
            </Typography>
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: "11px",
                color: "text.secondary",
                textAlign: "center",
                mt: 1,
              }}
            >
              Drop files here or click to browse through your machine
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        component="div"
        sx={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: {
            md: "100%",
            lg: "49%",
          },
          height: "80%",
          bgcolor: "background.default",
          borderRadius: "8px",
          borderWidth: "1px",
          borderColor: "border.primary",
          borderStyle: "solid",
          boxShadow,
          opacity: number === 2 ? 1 : 0,
          transition: "opacity 150ms linear",
          p: 2,
        }}
      >
        <Box
          component="div"
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {uploadedFiles.map((file: UploadedFile) => (
            <Box
              key={file.id}
              component="div"
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "flex-start",
                gap: "15px",
              }}
            >
              <img
                src={file.img}
                alt="folder"
                style={{ height: "30px", width: "30px" }}
              />
              <Box component="div" sx={{ flex: 1 }}>
                <Typography sx={{ fontSize: "10px" }}>{file.name}</Typography>
                <Typography sx={{ fontSize: "8px", color: "text.secondary" }}>
                  {file.size}
                </Typography>
                <Box
                  component="div"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    width: "100%",
                  }}
                >
                  <LinearProgress
                    variant="determinate"
                    value={file.progress}
                    sx={{ flex: 1, borderRadius: "8px" }}
                  />
                  <Typography sx={{ fontSize: "9px", fontWeight: 600 }}>
                    {file.progress}%
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default UploadFeature;

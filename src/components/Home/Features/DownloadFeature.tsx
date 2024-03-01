import { FC } from "react";
import { Box, Typography, LinearProgress } from "@mui/material";
import {
  WifiRounded as WifiIcon,
  ReplayRounded as ReplayIcon,
  FolderRounded as FolderIcon,
  CloseRounded as CloseIcon,
  MoreVertRounded as MoreIcon,
} from "@mui/icons-material";
import FileImage from "../../../../public/files/ic_file.svg";
import ZipImage from "../../../../public/files/ic_zip.svg";
import YellowFolder from "../../../../public/assets/yellow-folder.svg";

interface DownloadProps {
  id: number;
  name: string;
  cancel: boolean;
}

const downloads: DownloadProps[] = [
  {
    id: 1,
    name: "Silo.S01E07.720p.Subtitle.zip",
    cancel: false,
  },
  {
    id: 2,
    name: "Silo.S01E07.720p.Subtitle.zip",
    cancel: true,
  },
  {
    id: 3,
    name: "Silo.S01E06.720p.Subtitle.zip",
    cancel: false,
  },
];

interface Props {
  number: number;
  boxShadow: string;
}

const DownloadFeature: FC<Props> = ({ number, boxShadow }) => {
  return (
    <>
      <Box
        component="div"
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: {
            md: "100%",
            lg: "49%",
          },
          height: "80%",
          p: 2,
          bgcolor: "background.default",
          borderRadius: "8px",
          borderWidth: "1px",
          borderColor: "border.primary",
          borderStyle: "solid",
          boxShadow,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "10px",
          opacity: number === 5 ? 1 : 0,
          transition: "opacity 150ms linear",
        }}
      >
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "20px",
            width: "100%",
            height: "100%",
          }}
        >
          <Box
            component="div"
            sx={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <Box
              component="div"
              sx={{
                height: 50,
                width: 50,
                svg: { fill: "#028CEA" },
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                height="100%"
                width="100%"
              >
                <path
                  fillRule="evenodd"
                  d="M10.5 3.75a6 6 0 0 0-5.98 6.496A5.25 5.25 0 0 0 6.75 20.25H18a4.5 4.5 0 0 0 2.206-8.423 3.75 3.75 0 0 0-4.133-4.303A6.001 6.001 0 0 0 10.5 3.75Zm2.25 6a.75.75 0 0 0-1.5 0v4.94l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V9.75Z"
                  clipRule="evenodd"
                />
              </svg>
            </Box>
            <Typography>Download Zone</Typography>
          </Box>
          <Box
            component="div"
            sx={{
              width: "100%",
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box
              component="div"
              sx={{
                width: "100%",
                bgcolor: "background.paper",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "border.primary",
                p: 1,
                borderRadius: "8px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <Box
                component="div"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <img
                  src={ZipImage}
                  alt="download"
                  style={{ height: 22, width: 22 }}
                />
                <Typography
                  sx={{
                    fontSize: "10px",
                    flex: 1,
                  }}
                >
                  Silo.S01E08.720p.Subtitle.zip
                </Typography>
                <Box
                  component="div"
                  sx={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <Typography sx={{ fontSize: "8px", fontWeight: 700 }}>
                    32%
                  </Typography>
                  <FolderIcon
                    sx={{ height: 12, width: 12, color: "text.secondary" }}
                  />
                  <CloseIcon
                    sx={{ height: 12, width: 12, color: "text.secondary" }}
                  />
                </Box>
              </Box>
              <LinearProgress
                variant="determinate"
                value={32}
                sx={{ borderRadius: "10px" }}
              />
              <Box
                component="div"
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Box
                  component="div"
                  sx={{
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: "border.primary",
                    borderRadius: "20px",
                    fontSize: "8px",
                    padding: "0px 15px",
                    display: "flex",
                    alignItems: "center",
                    lineHeight: "0px",
                  }}
                >
                  530 MB
                </Box>
                <Box
                  component="div"
                  sx={{
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: "border.primary",
                    borderRadius: "20px",
                    fontSize: "8px",
                    padding: "0px 15px",
                    display: "flex",
                    alignItems: "center",
                    lineHeight: "0px",
                  }}
                >
                  00:00:32
                </Box>
                <Box
                  component="div"
                  sx={{
                    borderRadius: "20px",
                    bgcolor: "#028CEA",
                    fontSize: "8px",
                    padding: "7px",
                    lineHeight: "0px",
                    display: "flex",
                    alignItems: "center",
                    color: "#FFF",
                  }}
                >
                  <WifiIcon sx={{ mr: 0.5, height: 10, width: 10 }} />
                  12.8 Mb/s
                </Box>
              </Box>
            </Box>
            {downloads.map((download: DownloadProps) => (
              <Box
                key={download.id}
                component="div"
                sx={{
                  width: "100%",
                  bgcolor: "background.paper",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: "border.primary",
                  p: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  borderRadius: "8px",
                }}
              >
                <img
                  src={download.cancel ? FileImage : ZipImage}
                  alt="download"
                  style={{ height: 22, width: 22 }}
                />
                <Typography
                  sx={{
                    fontSize: "10px",
                    flex: 1,
                    textDecoration: download.cancel ? "line-through" : "none",
                  }}
                >
                  {download.name}
                </Typography>
                <Box
                  component="div"
                  sx={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  {download.cancel ? (
                    <ReplayIcon
                      sx={{ height: 12, width: 12, color: "text.secondary" }}
                    />
                  ) : (
                    <FolderIcon
                      sx={{ height: 12, width: 12, color: "text.secondary" }}
                    />
                  )}
                  <CloseIcon
                    sx={{ height: 12, width: 12, color: "text.secondary" }}
                  />
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Box
        component="div"
        sx={{
          position: "absolute",
          display: {
            md: "none",
            lg: "block",
          },
          bottom: 0,
          right: 0,
          height: "80%",
          width: "49%",
          opacity: number === 5 ? 1 : 0,
          transition: "opacity 150ms linear",
        }}
      >
        <Box
          component="div"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            height: "250px",
            width: "250px",
            zIndex: 1,
            bgcolor: "background.paper",
            borderRadius: "4px",
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "border.primary",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            flexDirection: "column",
            p: 3,
          }}
        >
          <img
            src={YellowFolder}
            alt="yellow-folder"
            style={{ flex: 1, width: "120px", height: "120px" }}
          />
          <Box component="div" sx={{ display: "flex", width: "100%" }}>
            <Typography sx={{ fontSize: "10px", flex: 1 }}>
              My Documents
            </Typography>
            <MoreIcon sx={{ height: 12, width: 12, color: "text.secondary" }} />
          </Box>
        </Box>
        <Box
          component="div"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%) rotate(8deg)",
            zIndex: 0,
            height: "250px",
            width: "250px",
            bgcolor: "background.paper",
            borderRadius: "4px",
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "border.primary",
            boxShadow,
          }}
        />
        <Box
          component="div"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%) rotate(-8deg)",
            zIndex: 0,
            height: "250px",
            width: "250px",
            bgcolor: "background.paper",
            borderRadius: "4px",
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "border.primary",
            boxShadow,
          }}
        />
      </Box>
    </>
  );
};

export default DownloadFeature;

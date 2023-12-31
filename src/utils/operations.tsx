import {
  CreateNewFolder as CreateNewFolderIcon,
  UploadFile as UploadFileIcon,
  DriveFolderUpload as DriveFolderUploadIcon,
  Download as DownloadIcon,
  Create as RenameIcon,
  GroupAdd as ShareIcon,
  Info as InfoIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";

export interface OperationProps {
  id: number;
  text: string;
  icon: JSX.Element;
}

export const createOperations: OperationProps[] = [
  {
    id: 1,
    text: "New Folder",
    icon: <CreateNewFolderIcon fontSize="small" />,
  },
  {
    id: 2,
    text: "Upload File",
    icon: <UploadFileIcon fontSize="small" />,
  },
  {
    id: 3,
    text: "Upload Folder",
    icon: <DriveFolderUploadIcon fontSize="small" />,
  },
];

export const mainOperations: OperationProps[] = [
  {
    id: 1,
    text: "Download",
    icon: <DownloadIcon fontSize="small" />,
  },
  {
    id: 2,
    text: "Rename",
    icon: <RenameIcon fontSize="small" />,
  },
  {
    id: 3,
    text: "Share",
    icon: <ShareIcon fontSize="small" />,
  },
  {
    id: 4,
    text: "Information",
    icon: <InfoIcon fontSize="small" />,
  },
  {
    id: 5,
    text: "Delete",
    icon: <DeleteIcon fontSize="small" />,
  },
];

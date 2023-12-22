import {
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

const operations: OperationProps[] = [
  {
    id: 1,
    text: "Download",
    icon: <DownloadIcon />,
  },
  {
    id: 2,
    text: "Rename",
    icon: <RenameIcon />,
  },
  {
    id: 3,
    text: "Share",
    icon: <ShareIcon />,
  },
  {
    id: 4,
    text: "Information",
    icon: <InfoIcon />,
  },
  {
    id: 5,
    text: "Delete Icon",
    icon: <DeleteIcon />,
  },
];

export default operations;

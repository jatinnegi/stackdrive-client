import { FolderIcon, UsersIcon, SpamIcon, TrashIcon } from "@/icons";
import {
  AccessTime as AccessTimeIcon,
  StarBorder as StarBorderIcon,
  CloudQueue as CloudQueueIcon,
} from "@mui/icons-material";

export interface LinkProps {
  id: number;
  name: string;
  href: string;
  icon: JSX.Element;
}

const dashboardLinks: LinkProps[] = [
  {
    id: 1,
    name: "My Drive",
    href: "/dashboard",
    icon: <FolderIcon />,
  },
  {
    id: 2,
    name: "Shared with me",
    href: "/dashboard/shared-with-me",
    icon: <UsersIcon />,
  },
  {
    id: 3,
    name: "Recent",
    href: "/dashboard/recent",
    icon: <AccessTimeIcon sx={{ height: "100%", width: "100%" }} />,
  },
  {
    id: 4,
    name: "Starred",
    href: "/dashboard/starred",
    icon: <StarBorderIcon sx={{ height: "100%", width: "100%" }} />,
  },
  {
    id: 5,
    name: "Spam",
    href: "/dashboard/spam",
    icon: <SpamIcon />,
  },
  {
    id: 6,
    name: "Trash",
    href: "/dashboard/trash",
    icon: <TrashIcon />,
  },
  {
    id: 7,
    name: "Storage",
    href: "/dashboard/storage",
    icon: <CloudQueueIcon sx={{ height: "100%", width: "100%" }} />,
  },
];

export default dashboardLinks;

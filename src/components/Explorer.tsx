import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { GridView, ListView } from "@/components/Views";
import { ResourceProps } from "@/data";
import { RootState } from "@/redux/reducers";
import ResourceCard from "@/components/ResourceCard";
import SectionHeading from "@/components/SectionHeading";

export default function Explorer() {
  const {
    myDrive: { view },
    resources: { data: resources },
  } = useSelector((state: RootState) => state);

  if (view === "list") return <ListView resources={resources} />;

  const folders: ResourceProps[] = [];
  const files: ResourceProps[] = [];

  resources.forEach((resource: ResourceProps) => {
    if (resource.type === "folder") folders.push(resource);
    else files.push(resource);
  });

  return (
    <>
      <Box component="div">
        <SectionHeading>Folders</SectionHeading>
        <GridView>
          {folders.map((folder: ResourceProps) => (
            <ResourceCard
              key={folder.id}
              id={folder.id}
              name={folder.name}
              imgSrc={folder.imgSrc}
              type={folder.type}
              lastModified={folder.lastModified}
              owner={folder.owner}
              size={folder.size}
            />
          ))}
        </GridView>
      </Box>
      <Box component="div">
        <SectionHeading>Files</SectionHeading>
        <GridView>
          {files.map((file: ResourceProps) => (
            <ResourceCard
              key={file.id}
              id={file.id}
              name={file.name}
              imgSrc={file.imgSrc}
              type={file.type}
              lastModified={file.lastModified}
              owner={file.owner}
              size={file.size}
            />
          ))}
        </GridView>
      </Box>
    </>
  );
}

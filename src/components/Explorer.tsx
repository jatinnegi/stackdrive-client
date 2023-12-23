import { Box } from "@mui/material";
import { ResourceProps, resources } from "@/data";
import { GridView } from "@/components/Views";
import ResourceCard from "@/components/ResourceCard";
import SectionHeading from "@/components/SectionHeading";

export default function Explorer() {
  return (
    <>
      <Box component="div">
        <SectionHeading>Files</SectionHeading>
        <GridView>
          {resources.files.map((file: ResourceProps) => (
            <ResourceCard
              key={file.id}
              id={file.id}
              name={file.name}
              imgSrc={file.imgSrc}
              type={file.type}
            />
          ))}
        </GridView>
      </Box>
      <Box component="div">
        <SectionHeading>Folders</SectionHeading>
        <GridView>
          {resources.folders.map((folder: ResourceProps) => (
            <ResourceCard
              key={folder.id}
              id={folder.id}
              name={folder.name}
              imgSrc={folder.imgSrc}
              type={folder.type}
            />
          ))}
        </GridView>
      </Box>
    </>
  );
}

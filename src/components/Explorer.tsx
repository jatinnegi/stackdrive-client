import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { GridView, ListView } from "@/components/Views";
import { ResourceProps, resources } from "@/data";
import { RootState } from "@/redux/reducers";
import ResourceCard from "@/components/ResourceCard";
import SectionHeading from "@/components/SectionHeading";

export default function Explorer() {
  const { view } = useSelector((state: RootState) => state.myDrive);

  if (view === "list") return <ListView resources={resources} />;

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

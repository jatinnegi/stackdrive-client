import { Box } from "@mui/material";
import { FileProps, resources } from "@/data";
import { GridView } from "@/components/Views";
import { FileCard } from "@/components/ResourceCard";
import SectionHeading from "@/components/SectionHeading";

export default function Explorer() {
  return (
    <Box component="div" margin={{ xs: "15px 0px", md: "15px 22px" }}>
      <SectionHeading>Files</SectionHeading>
      <GridView>
        {resources.files.map((file: FileProps) => (
          <FileCard
            key={file.id}
            id={file.id}
            name={file.name}
            imgSrc={file.imgSrc}
            type={file.type}
          />
        ))}
      </GridView>
    </Box>
  );
}

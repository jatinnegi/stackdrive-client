import { useEffect, useRef } from "react";
import { Box } from "@mui/material";
import { ResourceProps } from "@/types";
import ResourceCard from "@/components/ResourceCard";
import { GridView } from "@/components/Views";
import SectionHeading from "@/components/SectionHeading";
import ExcelPreview from "../../public/preview/excel_preview.webp";
import WordPreview from "../../public/preview/word_preview.webp";

const SuggestedData: ResourceProps[] = [
  {
    id: "1",
    name: "404 not found.xlsx",
    type: "excel",
    imgSrc: ExcelPreview,
    lastModified: "December 31, 2023",
    owner: "Jaydon Frankie",
    size: "4 KB",
  },
  {
    id: "2",
    name: "My Document.docx",
    type: "word",
    imgSrc: WordPreview,
    lastModified: "December 31, 2023",
    owner: "Jaydon Frankie",
    size: "4 KB",
  },
  {
    id: "3",
    name: "order data.xlsx",
    type: "excel",
    imgSrc: ExcelPreview,
    lastModified: "December 31, 2023",
    owner: "Jaydon Frankie",
    size: "4 KB",
  },
  {
    id: "4",
    name: "Untitled.docx",
    type: "word",
    imgSrc: WordPreview,
    lastModified: "December 31, 2023",
    owner: "Jaydon Frankie",
    size: "4 KB",
  },
];

export default function Suggested() {
  const parentRef = useRef<HTMLDivElement | null>(null);
  const childRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!parentRef.current || !childRef.current) return;
    const height = childRef.current.offsetHeight;
    parentRef.current.style.height = `${height}px`;
  }, []);

  return (
    <Box component="div">
      <SectionHeading>Suggested</SectionHeading>
      <GridView>
        {SuggestedData.map((data: ResourceProps) => (
          <ResourceCard
            key={data.id}
            id={data.id}
            name={data.name}
            type={data.type}
            imgSrc={data.imgSrc}
            lastModified={data.lastModified}
            owner={data.owner}
            size={data.size}
          />
        ))}
      </GridView>
    </Box>
  );
}

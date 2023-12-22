import { useEffect, useRef } from "react";
import { Box } from "@mui/material";
import { FileProps } from "@/types";
import { FileCard } from "@/components/ResourceCard";
import { GridView } from "@/components/Views";
import SectionHeading from "@/components/SectionHeading";
import ExcelPreview from "../../public/preview/excel_preview.webp";
import WordPreview from "../../public/preview/word_preview.webp";

const SuggestedData: FileProps[] = [
  {
    id: 1,
    name: "404 not found.xlsx",
    type: "excel",
    imgSrc: ExcelPreview,
  },
  {
    id: 2,
    name: "My Document.docx",
    type: "word",
    imgSrc: WordPreview,
  },
  {
    id: 3,
    name: "order data.xlsx",
    type: "excel",
    imgSrc: ExcelPreview,
  },
  {
    id: 4,
    name: "Untitled.docx",
    type: "word",
    imgSrc: WordPreview,
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
    <Box component="div" margin={{ xs: "25px 0px", md: "30px 22px" }}>
      <SectionHeading>Suggested</SectionHeading>
      <GridView>
        {SuggestedData.map((data: FileProps) => (
          <FileCard
            key={data.id}
            id={data.id}
            name={data.name}
            type={data.type}
            imgSrc={data.imgSrc}
          />
        ))}
      </GridView>
    </Box>
  );
}

import { useEffect, useRef } from "react";
import { SuggestedCardProps } from "@/types";
import { Box, Typography } from "@mui/material";
import SuggestedCard from "@/components/SuggestedCard";
import { ScrollingCarousel } from "@/components/ScrollingCarousel/ScrollingCarousel";
import ExcelPreview from "../../public/preview/excel_preview.webp";
import WordPreview from "../../public/preview/word_preview.webp";

const SuggestedData: SuggestedCardProps[] = [
  {
    id: 1,
    title: "404 not found.xlsx",
    type: "excel",
    imgSrc: ExcelPreview,
  },
  {
    id: 2,
    title: "My Document.docx",
    type: "word",
    imgSrc: WordPreview,
  },
  {
    id: 3,
    title: "order data.xlsx",
    type: "excel",
    imgSrc: ExcelPreview,
  },
  {
    id: 4,
    title: "Untitled.docx",
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
      <Typography
        fontSize={{ xs: "14px", md: "16px" }}
        sx={{ color: "text.secondary" }}
      >
        Suggested
      </Typography>
      <Box
        component="div"
        gridTemplateColumns={{
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        sx={{
          display: {
            xs: "none",
            lg: "grid",
          },
          gap: "10px",
          margin: "10px 0px",
        }}
      >
        {SuggestedData.map((data: SuggestedCardProps) => (
          <SuggestedCard
            key={data.id}
            id={data.id}
            title={data.title}
            type={data.type}
            imgSrc={data.imgSrc}
          />
        ))}
      </Box>
      <Box
        ref={parentRef}
        sx={{
          display: { xs: "block", lg: "none" },
        }}
      >
        <Box
          ref={childRef}
          sx={{ position: "absolute", left: "0px", width: "100%" }}
        >
          <ScrollingCarousel selector="div.suggested_card" itemMinWidth="250px">
            {SuggestedData.map((data: SuggestedCardProps) => (
              <SuggestedCard
                key={data.id}
                id={data.id}
                title={data.title}
                type={data.type}
                imgSrc={data.imgSrc}
              />
            ))}
          </ScrollingCarousel>
        </Box>
      </Box>
    </Box>
  );
}

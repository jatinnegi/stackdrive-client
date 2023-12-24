import { useState } from "react";
import { ArrowDropDown } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import TypeFilter from "./TypeFilter";
import PeopleFilter from "./PeopleFilter";
import ModifiedFilter from "./ModifiedFilter";

interface FilterProps {
  id: number;
  text: string;
}

const filters: FilterProps[] = [
  {
    id: 1,
    text: "type",
  },
  {
    id: 2,
    text: "People",
  },
  {
    id: 3,
    text: "Modified",
  },
];

export default function Filters() {
  const [typeFilterEl, setTypeFilterEl] = useState<HTMLElement | null>(null);
  const [peopleFilterEl, setPeopleFilterEl] = useState<HTMLElement | null>(
    null
  );
  const [modifiedFilterEl, setModifiedFilterEl] = useState<HTMLElement | null>(
    null
  );

  const typeFilterOpen = Boolean(typeFilterEl);
  const peopleFilterOpen = Boolean(peopleFilterEl);
  const modifiedFilterOpen = Boolean(modifiedFilterEl);

  function handleClick(
    e: React.MouseEvent<HTMLButtonElement>,
    filterId: number
  ) {
    if (filterId === 1) setTypeFilterEl(e.currentTarget);
    else if (filterId === 2) setPeopleFilterEl(e.currentTarget);
    else if (filterId === 3) setModifiedFilterEl(e.currentTarget);
    else;
  }

  return (
    <>
      <Box
        component="div"
        display="flex"
        margin={{ xs: "10px 0px", md: "18px 22px" }}
        sx={{
          margin: {
            xs: "10px 0px",
            md: "18px 22px",
          },
        }}
        gap={{ xs: "5px", md: "10px" }}
      >
        {filters.map((filter: FilterProps) => (
          <Button
            key={filter.id}
            sx={{
              color: "text.secondary",
              border: 1,
              borderColor: "border.secondary",
              borderStyle: "solid",
              padding: {
                xs: "6px 5px",
                sm: "6px 10px",
                md: "6px 15px",
              },
              minWidth: { xs: "0px", sm: "initial" },
            }}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
              handleClick(e, filter.id)
            }
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "10px",
                  sm: "12px",
                  md: "14px",
                },
                textTransform: "capitalize",
                fontWeight: 600,
              }}
            >
              {filter.text}
            </Typography>
            <ArrowDropDown
              sx={{
                marginLeft: "1px",
                fontSize: "18px",
              }}
            />
          </Button>
        ))}
      </Box>
      <TypeFilter
        anchorEl={typeFilterEl}
        open={typeFilterOpen}
        handleClose={() => {
          setTypeFilterEl(null);
        }}
      />
      <PeopleFilter
        anchorEl={peopleFilterEl}
        open={peopleFilterOpen}
        handleClose={() => {
          setPeopleFilterEl(null);
        }}
      />
      <ModifiedFilter
        open={modifiedFilterOpen}
        handleClose={() => {
          setModifiedFilterEl(null);
        }}
      />
    </>
  );
}

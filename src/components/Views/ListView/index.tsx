import { FC, useRef } from "react";
import { SortBy } from "@/redux/slices/resources";
import { ResourceProps } from "@/types";
import Header from "./Header";
import Body from "./Body";

interface Props {
  folders: ResourceProps[];
  files: ResourceProps[];
  sortBy: SortBy | null;
  isOrderAsc: boolean;
  handleSortUpdate: (sort: SortBy) => void;
}

export const ListView: FC<Props> = ({
  folders,
  files,
  sortBy,
  isOrderAsc,
  handleSortUpdate,
}) => {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const bodyRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (bodyRef.current && headerRef.current) {
      headerRef.current.scrollLeft = bodyRef.current.scrollLeft;
    }
  };

  return (
    <>
      <Header
        headerRef={headerRef}
        sortBy={sortBy}
        isOrderAsc={isOrderAsc}
        handleSortUpdate={handleSortUpdate}
      />
      <Body
        bodyRef={bodyRef}
        handleScroll={handleScroll}
        folders={folders}
        files={files}
      />
    </>
  );
};

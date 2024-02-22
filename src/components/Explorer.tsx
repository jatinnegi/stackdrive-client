import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GridView, ListView } from "@/components/Views";
import { ResourceProps } from "@/data";
import { RootState } from "@/redux/reducers";
import { SortBy, updateSort } from "@/redux/slices/resources";
import { Box } from "@mui/material";
import Sort from "@/components/Sort";
import ResourceCard from "@/components/ResourceCard";
import SectionHeading from "@/components/SectionHeading";

interface Props {
  resources: ResourceProps[];
}

const Explorer: FC<Props> = ({ resources }) => {
  const {
    myDrive: { view },
    resources: { sortBy, isOrderAsc },
  } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  const folders: ResourceProps[] = [];
  const files: ResourceProps[] = [];

  const handleSortUpdate = (sort: SortBy) => {
    dispatch(updateSort({ sortBy: sort }));
  };

  resources.forEach((resource: ResourceProps) => {
    if (resource.type === "folder") folders.push(resource);
    else files.push(resource);
  });

  if (view === "list")
    return (
      <ListView
        resources={resources}
        sortBy={sortBy}
        isOrderAsc={isOrderAsc}
        handleSortUpdate={handleSortUpdate}
      />
    );

  return (
    <Box component="div">
      <Box component="div">
        <Box component="div" sx={{ display: "flex", alignItems: "center" }}>
          <Box component="div" sx={{ flex: 1 }}>
            <SectionHeading>Folders</SectionHeading>
          </Box>
          <Sort
            sortBy={sortBy}
            isOrderAsc={isOrderAsc}
            handleSortUpdate={handleSortUpdate}
          />
        </Box>
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
              starred={folder.starred}
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
              starred={file.starred}
            />
          ))}
        </GridView>
      </Box>
    </Box>
  );
};

export default Explorer;

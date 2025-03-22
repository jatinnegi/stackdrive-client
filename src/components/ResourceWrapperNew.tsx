import { FC, PropsWithChildren } from "react";
import { ResourceProps, SupportedTypes } from "@/types";
import { Box, BoxProps } from "@mui/material";

type Props = {
  id: string;
  name: string;
  type: SupportedTypes;
} & PropsWithChildren &
  BoxProps;

const ResourceWrapperNew: FC<Props> = ({
  id,
  name,
  type,
  children,
  ...props
}) => {
  return (
    <Box component="div" {...props}>
      {children}
    </Box>
  );
};

export default ResourceWrapperNew;

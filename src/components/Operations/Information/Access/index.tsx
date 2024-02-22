import { FC, PropsWithChildren } from "react";
import { Box, Typography, Tooltip } from "@mui/material";
import { UserProps } from "@/data";
import Loader from "./Loader";

interface Props {
  users: UserProps[];
  loading: boolean;
}

const ItemWrapper: FC<PropsWithChildren & { isLast: boolean }> = ({
  children,
  isLast,
}) => {
  return (
    <Box
      component="div"
      sx={{
        mb: isLast ? 0 : 3,
        display: "flex",
        alignItems: "center",
        width: "100%",
        cursor: "default",
        overflow: "hidden",
      }}
    >
      {children}
    </Box>
  );
};

const Access: FC<Props> = ({ users, loading }) => {
  if (loading) return <Loader />;

  return (
    <Box component="div">
      {users.map((user: UserProps, index: number) => (
        <ItemWrapper key={user.id} isLast={index === users.length - 1}>
          <Box component="div" sx={{ height: "50px", width: "50px" }}>
            <img
              src={user.img}
              alt={user.name}
              style={{
                height: "100%",
                width: "100%",
                borderRadius: "50%",
              }}
            />
          </Box>
          <Box
            component="div"
            sx={{ marginLeft: "12px", width: "calc(80% - 12px)" }}
          >
            <Typography
              sx={{
                fontSize: "15px",
                lineHeight: 1.2,
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                overflow: "hidden",
              }}
            >
              {user.name}
            </Typography>
            <Box component="div" sx={{ display: "flex" }}>
              <Tooltip placement="bottom-start" title={user.email}>
                <Typography
                  sx={{
                    fontSize: "13px",
                    color: "text.secondary",
                    fontWeight: 600,
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                  }}
                >
                  {user.email}
                </Typography>
              </Tooltip>
            </Box>
          </Box>
        </ItemWrapper>
      ))}
    </Box>
  );
};

export default Access;

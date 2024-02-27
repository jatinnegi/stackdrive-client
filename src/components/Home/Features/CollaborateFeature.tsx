import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { UserProps, dummyUsers } from "@/data";

const users: UserProps[] = dummyUsers.slice(0, 6);

interface Props {
  number: number;
  boxShadow: string;
}

const CollaborateFeature: FC<Props> = ({ number, boxShadow }) => {
  return (
    <Box
      component="div"
      sx={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "80%",
        height: "80%",
        bgcolor: "background.default",
        borderRadius: "8px",
        borderWidth: "1px",
        borderColor: "border.primary",
        borderStyle: "dashed",
        boxShadow,
        p: 3,
        opacity: number === 2 ? 1 : 0,
        transition: "opacity 150ms linear",
      }}
    >
      <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>
        Share "folder_example"
      </Typography>
      <Box
        component="div"
        sx={{
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "border.primary",
          borderRadius: "8px",
          height: "50px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          my: 2,
          px: 2,
        }}
      >
        <Typography sx={{ fontSize: "12px", color: "text.secondary" }}>
          Enter user email
        </Typography>
      </Box>
      <Box
        component="div"
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "10px",
        }}
      >
        {users.map((user: UserProps) => (
          <Box
            key={user.id}
            component="div"
            sx={{
              display: "flex",
              gap: "6px",
              borderRadius: "4px",
              bgcolor: "background.paper",
              p: 1,
            }}
          >
            <Box
              component="div"
              sx={{
                height: "20px",
                width: "20px",
                background: `url("${user.img}") no-repeat center center/cover`,
                borderRadius: "50%",
              }}
            />
            <Box component="div">
              <Typography sx={{ fontSize: "8px", fontWeight: 600 }}>
                {user.email}
              </Typography>
              <Typography sx={{ fontSize: "8px" }}>{user.name}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CollaborateFeature;

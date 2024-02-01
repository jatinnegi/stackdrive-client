import { FC } from "react";
import { MenuItem, Box, Typography, Tooltip } from "@mui/material";
import { UserProps } from "@/data";

interface Props {
  user: UserProps;
  onClick: () => void;
}

const UserRow: FC<Props> = ({ user, onClick }) => {
  return (
    <MenuItem
      component="div"
      sx={{ display: "flex", alignItems: "center", width: "100%" }}
      onClick={onClick}
    >
      <img
        src={user.img}
        alt={user.name}
        style={{
          width: "15%",
          maxWidth: "50px",
          borderRadius: "50%",
        }}
      />
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
          <Tooltip placement="top-start" title={user.email}>
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
    </MenuItem>
  );
};

export default UserRow;

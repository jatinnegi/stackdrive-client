import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { UserProps, dummyUsers } from "@/data";
import { ExpandMoreRounded as ExpandIcon } from "@mui/icons-material";

const you: UserProps = dummyUsers[6];
const users: UserProps[] = dummyUsers.slice(0, 3);

interface Props {
  number: number;
  boxShadow: string;
}

const ShareFeature: FC<Props> = ({ number, boxShadow }) => {
  return (
    <Box
      component="div"
      sx={{
        position: "absolute",
        bottom: 0,
        right: 0,
        width: {
          md: "100%",
          lg: "80%",
        },
        height: "80%",
        bgcolor: "background.default",
        borderRadius: "8px",
        borderWidth: "1px",
        borderColor: "border.primary",
        borderStyle: "solid",
        boxShadow,
        display: "flex",
        flexDirection: "column",
        p: 3,
        opacity: number === 3 ? 1 : 0,
        transition: "opacity 150ms linear",
      }}
    >
      <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>
        Share "Team Folder"
      </Typography>
      <Box
        component="div"
        sx={{
          width: "100%",
          display: "flex",
          gap: "10px",
          my: 1,
        }}
      >
        <Box
          component="div"
          sx={{
            height: "38px",
            flex: 1,
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "border.primary",
            borderRadius: "6px",
            display: "flex",
            alignItems: "center",
            gap: "5px",
            p: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: "10px",
              color: "text.secondary",
              fontWeight: 700,
              flex: 1,
            }}
          >
            Enter Email
          </Typography>
          <Box
            component="div"
            sx={{ fontSize: "10px", color: "text.secondary" }}
          >
            Can Edit
          </Box>
          <ExpandIcon sx={{ width: 12, height: 12, color: "text.secondary" }} />
        </Box>
        <Box
          component="div"
          sx={{
            borderRadius: "6px",
            bgcolor: "#028CEA",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "10px",
            width: "70px",
            color: "#FFF",
          }}
        >
          Send Invite
        </Box>
      </Box>
      <Box
        component="div"
        sx={{
          width: "100%",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "7px",
          mt: 1,
        }}
      >
        <Box
          component="div"
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Box
            component="div"
            sx={{
              width: "100%",
              display: "flex",
              gap: "10px",
              alignItems: "center",
              flex: 1,
            }}
          >
            <img
              src={you.img}
              alt={you.name}
              style={{ height: "28px", width: "28px", borderRadius: "50%" }}
            />
            <Typography sx={{ flex: 1, fontSize: "12px" }}>
              {you.name}{" "}
              <Box component="span" sx={{ color: "text.secondary", ml: 0.5 }}>
                (You)
              </Box>
            </Typography>
            <Typography sx={{ fontSize: "10px", color: "text.secondary" }}>
              Owner
            </Typography>
          </Box>
          {users.map((user: UserProps, index: number) => (
            <Box
              key={user.id}
              component="div"
              sx={{
                width: "100%",
                display: "flex",
                gap: "10px",
                alignItems: "center",
                flex: 1,
              }}
            >
              <img
                src={user.img}
                alt={user.name}
                style={{ height: "28px", width: "28px", borderRadius: "50%" }}
              />
              <Typography sx={{ flex: 1, fontSize: "12px" }}>
                {user.name}{" "}
              </Typography>
              <Typography sx={{ fontSize: "10px", color: "text.secondary" }}>
                {index === 0 ? "Can View" : "Can Edit"}
              </Typography>
              <ExpandIcon
                sx={{ height: 12, width: 12, color: "text.secondary" }}
              />
            </Box>
          ))}
        </Box>
        <Box
          component="div"
          sx={{
            width: "100%",
            display: "flex",
            gap: "10px",
            my: 1,
          }}
        >
          <Box
            component="div"
            sx={{
              height: "38px",
              flex: 1,
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "border.primary",
              borderRadius: "6px",
              display: "flex",
              alignItems: "center",
              gap: "5px",
              p: 2,
            }}
          >
            <Typography
              sx={{
                fontSize: "10px",
                color: "text.secondary",
                fontWeight: 700,
                flex: 1,
              }}
            >
              Anyone with link can view
            </Typography>
            <ExpandIcon
              sx={{ width: 12, height: 12, color: "text.secondary" }}
            />
          </Box>
          <Box
            component="div"
            sx={{
              borderRadius: "6px",
              bgcolor: "background.paper",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "10px",
              width: "70px",
              color: "text.secondary",
            }}
          >
            Copy Link
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ShareFeature;

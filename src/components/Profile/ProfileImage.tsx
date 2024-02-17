import { FC, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import { AddAPhoto as AddPhotoIcon } from "@mui/icons-material";
import CardBody from "./CardBody";

const ProfileImage: FC = () => {
  const [profileHover, setProfileHover] = useState<boolean>(false);
  const ref = useRef<HTMLInputElement | null>(null);

  return (
    <>
      <CardBody sx={{ width: "100%" }}>
        <Box
          component="div"
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Box
            component="span"
            sx={{
              bgcolor: "rgba(34, 197, 94, 0.16)",
              color: "rgb(119, 237, 139)",
              fontSize: "12px",
              fontWeight: 700,
              padding: "3px 8px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Basic Plan
          </Box>
        </Box>
        <Box
          component="div"
          sx={{
            position: "relative",
            borderWidth: "1px",
            borderStyle: "dashed",
            borderColor: "border.primary",
            borderRadius: "50%",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: 1,
          }}
          onMouseEnter={() => {
            setProfileHover(true);
          }}
          onMouseLeave={() => {
            setProfileHover(false);
          }}
          onClick={() => {
            if (ref.current) {
              ref.current.click();
            }
          }}
        >
          <Box
            component="div"
            sx={{
              position: "relative",
              height: "120px",
              width: "120px",
              background:
                'url("https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_1.jpg") no-repeat center center/cover',
              borderRadius: "50%",
            }}
          />
          <Box
            component="div"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "backdrop.primary",
              height: "89%",
              width: "89%",
              borderRadius: "inherit",
              opacity: profileHover ? 1 : 0,
              transition: "opacity 90ms linear",
              color: "#FFFFFF",
            }}
          >
            <AddPhotoIcon />
            <Typography
              sx={{
                fontSize: "12px",
              }}
            >
              Update Photo
            </Typography>
          </Box>
        </Box>
        <Typography
          sx={{
            my: 1,
            fontSize: "10px",
            color: "text.secondary",
          }}
        >
          Allowed *.jpeg, *.jpg, *.png, *.gif
        </Typography>
      </CardBody>
      <input ref={ref} type="file" style={{ display: "none" }} />
    </>
  );
};

export default ProfileImage;

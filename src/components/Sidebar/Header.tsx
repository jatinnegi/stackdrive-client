import { FC, ForwardedRef, forwardRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeNavigation } from "@/redux/actions";
import { Box, Typography } from "@mui/material";
import StackDriveLogo from "../../../public/stackdrive-logo.png";

interface Props {
  ref: ForwardedRef<HTMLDivElement | null>;
  fullDisplay: boolean;
}

const Header: FC<Props> = forwardRef(
  ({ fullDisplay }, ref: ForwardedRef<HTMLDivElement | null>) => {
    const dispatch = useDispatch();

    return (
      <Box
        ref={ref}
        sx={{
          color: "text.primary",
          py: 3,
          ":hover": {
            a: {
              textDecoration: "none",
            },
          },
        }}
      >
        <Link
          to="/dashboard"
          onClick={() => {
            dispatch(removeNavigation({ id: null }));
          }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: fullDisplay ? "flex-start" : "center",
            cursor: "pointer",
            color: "inherit",
            width: "90%",
            margin: "0px auto",
            userSelect: "none",
            textDecoration: "none",
          }}
        >
          <img
            src={StackDriveLogo}
            alt="stackdrive"
            style={{ height: "26px", width: "26px" }}
          />
          <Typography
            sx={{
              display: fullDisplay ? "block" : "none",
              marginLeft: "15px",
              fontSize: "15px",
              fontWeight: 500,
              textDecoration: "none",
            }}
          >
            StackDrive
          </Typography>
        </Link>
      </Box>
    );
  }
);

export default Header;

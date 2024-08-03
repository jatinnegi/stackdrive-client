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
            justifyContent: "flex-start",
            cursor: "pointer",
            color: "inherit",
            width: "100%",
            margin: "0px auto",
            userSelect: "none",
            textDecoration: "none",
            padding: "0px 10px",
          }}
        >
          <img
            src={StackDriveLogo}
            alt="stackdrive"
            style={{ height: "26px", width: "26px" }}
          />
          <Typography
            sx={{
              flex: 1,
              opacity: fullDisplay ? 1 : 0,
              transition: "opacity 105ms ease-in",
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

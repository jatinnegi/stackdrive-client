import { FC } from "react";
import { Box, Backdrop, Typography, Button } from "@mui/material";
import DateCalendar from "../DateCalendar";

interface Props {
  open: boolean;
  handleClose: () => void;
}

const ModifiedFilter: FC<Props> = ({ open, handleClose }) => {
  return (
    <Backdrop
      open={open}
      sx={{ zIndex: 30, backgroundColor: "backdrop.primary" }}
      onClick={handleClose}
    >
      <Box
        component="div"
        sx={{
          backgroundColor: "background.paper",
          borderRadius: "10px",
          width: "95%",
          maxWidth: "750px",
          height: "90vh",
          maxHeight: "480px",
          display: "flex",
          flexDirection: "column",
          boxShadow: "rgba(0, 0, 0, 0.24) -40px 40px 80px -8px",
        }}
        onClick={(e: React.MouseEvent<HTMLDivElement>) => {
          e.stopPropagation();
        }}
      >
        <Typography
          sx={{
            padding: {
              xs: "25px 15px 0px 15px",
              md: "30px 20px 0px 20px",
            },
          }}
        >
          Selected Date Range
        </Typography>
        <Box
          component="div"
          sx={{
            flex: 1,
            margin: "15px 0px",
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
            },
            gap: "20px",
            padding: {
              xs: "0px 15px",
              md: "0px 20px",
            },
            overflowX: {
              xs: "scroll",
              md: "hidden",
            },
            overflowY: "scroll",
          }}
        >
          <Box
            component="div"
            sx={{
              borderColor: "border.primary",
              borderStyle: "dashed",
              borderWidth: "1px",
              borderRadius: "8px",
            }}
          >
            <DateCalendar />
          </Box>
          <Box
            component="div"
            sx={{
              borderColor: "border.primary",
              borderStyle: "dashed",
              borderWidth: "1px",
              borderRadius: "8px",
            }}
          >
            <DateCalendar />
          </Box>
        </Box>
        <Box
          component="div"
          sx={{
            padding: {
              xs: "0px 15px 20px 15px",
              md: "0px 35px 20px 20px",
            },
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Button
            sx={{
              color: "text.primary",
              textTransform: "capitalize",
              borderRadius: "5px",
              padding: "5px 10px",
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "text.primary",
            }}
          >
            Cancel
          </Button>
          <Button
            sx={{
              marginLeft: "10px",
              textTransform: "capitalize",
              borderRadius: "5px",
              padding: "5px 10px",
              backgroundColor: "button.primary.background",
              color: "button.primary.text",
              fontWeight: 700,
              "&:hover": {
                backgroundColor: "button.primary.hover",
              },
            }}
          >
            Apply
          </Button>
        </Box>
      </Box>
    </Backdrop>
  );
};

export default ModifiedFilter;

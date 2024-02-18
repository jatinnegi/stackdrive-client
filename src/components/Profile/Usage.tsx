import { FC, useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/reducers";
import { getFileImage } from "@/utils/helper";
import { SupportedTypes } from "@/types";
import { Box, Button, Typography } from "@mui/material";
import { lightTheme, darkTheme } from "@/theme";
import SemiCircleProgress from "@/components/SemiCircleProgress";
import CardBody from "./CardBody";

interface UsageRowProps {
  id: number;
  fileType: SupportedTypes;
  numberOfFiles: number;
  size: string;
}

const usageRows: UsageRowProps[] = [
  {
    id: 1,
    fileType: "images",
    numberOfFiles: 233,
    size: "4.47GB",
  },
  {
    id: 2,
    fileType: "media",
    numberOfFiles: 233,
    size: "11.18GB",
  },
  {
    id: 3,
    fileType: "documents",
    numberOfFiles: 233,
    size: "4.47GB",
  },
  {
    id: 4,
    fileType: "other",
    numberOfFiles: 73,
    size: "2.24GB",
  },
];

const Usage: FC = () => {
  const { theme } = useSelector((state: RootState) => state.settings);

  const linearGradient = useMemo(() => {
    if (theme === "dark")
      return {
        start: darkTheme.palette.background.paper,
        end: darkTheme.palette.background.default,
      };

    return {
      start: lightTheme.palette.background.paper,
      end: lightTheme.palette.background.paper,
    };
  }, [theme]);

  return (
    <CardBody
      sx={{
        backgroundImage: `linear-gradient(to bottom, ${linearGradient.start} 0%, ${linearGradient.end} 65%)`,
        padding: "0px 15px 15px 15px",
        boxShadow: "none",
      }}
    >
      <Box component="div" sx={{ width: "90%" }}>
        <SemiCircleProgress
          percentage={64}
          strokeWidth={10}
          strokeLinecap="round"
          hasBackground
          secondaryText="Used of 22.35GB / 50GB"
          bgStrokeColor={theme === "dark" ? "#333D49" : "#D7D8D9"}
          primaryTextColor={theme === "dark" ? "#FFFFFF" : "#333333"}
          secondaryTextColor={theme === "dark" ? "#919EAB" : "#6F6F6F"}
        />
      </Box>
      <Box
        component="div"
        sx={{
          position: "relative",
          top: "-35px",
          width: "100%",
        }}
      >
        <Box
          sx={{
            maxHeight: "100px",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            gap: "25px",
            maskImage:
              "linear-gradient(to bottom, black 45%, transparent 100%)",
          }}
        >
          {usageRows.map((row: UsageRowProps) => (
            <Box
              key={row.id}
              component="div"
              sx={{ display: "flex", gap: "10px" }}
            >
              <img src={getFileImage(row.fileType)} alt={row.fileType} />
              <Box
                component="div"
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "13px",
                    color: "text.primary",
                    fontWeight: 600,
                    textTransform: "capitalize",
                  }}
                >
                  {row.fileType}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "text.secondary",
                    fontWeight: 500,
                  }}
                >
                  {row.numberOfFiles === 1
                    ? "1 file"
                    : `${row.numberOfFiles} files`}
                </Typography>
              </Box>
              <Typography
                sx={{
                  color: "text.primary",
                  fontSize: "13px",
                  fontWeight: 700,
                }}
              >
                {row.size}
              </Typography>
            </Box>
          ))}
        </Box>
        <Button
          variant="contained"
          disableElevation
          sx={{
            position: "relative",
            width: "100%",
            top: "20px",
            fontSize: "14px",
            textTransform: "capitalize",
            bgcolor: "button.action.background",
            color: "button.action.text",
            fontWeight: 700,
            ":hover": {
              bgcolor: "button.action.hover",
            },
          }}
        >
          View Full Report
        </Button>
      </Box>
    </CardBody>
  );
};

export default Usage;

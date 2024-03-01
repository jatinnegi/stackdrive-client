import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/reducers";
import { SupportedTypes } from "@/types";
import { getFileImage } from "@/utils/helper";
import { Box, Typography } from "@mui/material";
import { ExpandMoreRounded as MoreIcon } from "@mui/icons-material";
import SemiCircleProgress from "@/components/SemiCircleProgress";

interface Props {
  number: number;
  boxShadow: string;
}

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

const AnalyticsFeature: FC<Props> = ({ number, boxShadow }) => {
  const theme = useSelector((state: RootState) => state.settings.theme);

  return (
    <>
      <Box
        component="div"
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          display: { md: "none", lg: "flex" },
          width: "29%",
          height: "80%",
          px: 1,
          bgcolor: "background.default",
          borderRadius: "8px",
          borderWidth: "1px",
          borderColor: "border.primary",
          borderStyle: "solid",
          boxShadow,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          opacity: number === 4 ? 1 : 0,
          transition: "opacity 150ms linear",
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
          sx={{
            maxHeight: "100px",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            maskImage:
              "linear-gradient(to bottom, black 45%, transparent 100%)",
            width: "100%",
          }}
        >
          {usageRows.map((row: UsageRowProps) => (
            <Box
              key={row.id}
              component="div"
              sx={{ display: "flex", gap: "10px" }}
            >
              <img
                src={getFileImage(row.fileType)}
                alt={row.fileType}
                style={{ height: 20, width: 20 }}
              />
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
                    fontSize: "10px",
                    color: "text.primary",
                    fontWeight: 600,
                    textTransform: "capitalize",
                  }}
                >
                  {row.fileType}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "8px",
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
                  fontSize: "8px",
                  fontWeight: 700,
                }}
              >
                {row.size}
              </Typography>
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            width: "100%",
            fontSize: "10px",
            bgcolor: "button.action.background",
            color: "button.action.text",
            fontWeight: 700,
            borderRadius: "4px",
            padding: "8px 0px",
            textAlign: "center",
            marginTop: "10px",
          }}
        >
          View Full Report
        </Box>
      </Box>
      <Box
        component="div"
        sx={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: {
            md: "100%",
            lg: "69%",
          },
          height: "80%",
          bgcolor: "background.default",
          borderRadius: "8px",
          borderWidth: "1px",
          borderColor: "border.primary",
          borderStyle: "solid",
          boxShadow,
          opacity: number === 4 ? 1 : 0,
          transition: "opacity 150ms linear",
          p: 2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          component="div"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ fontSize: "12px" }}>Data Activity</Typography>
          <Box
            component="div"
            sx={{
              bgcolor: "background.paper",
              display: "flex",
              alignItems: "center",
              fontSize: "8px",
              py: 0.5,
              px: 1,
              borderRadius: "4px",
            }}
          >
            Week
            <MoreIcon sx={{ height: 10, width: 10 }} />
          </Box>
        </Box>
        <Box
          component="div"
          sx={{
            my: 2,
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <Box
            component="div"
            sx={{ display: "flex", gap: "4px", alignItems: "center" }}
          >
            <Box
              component="div"
              sx={{
                height: 8,
                width: 8,
                bgcolor: "#2065D1",
                borderRadius: "100%",
              }}
            />
            <Typography sx={{ fontSize: "9px" }}>Images</Typography>
          </Box>
          <Box
            component="div"
            sx={{ display: "flex", gap: "4px", alignItems: "center" }}
          >
            <Box
              component="div"
              sx={{
                height: 8,
                width: 8,
                bgcolor: "#FF5630",
                borderRadius: "100%",
              }}
            />
            <Typography sx={{ fontSize: "9px" }}>Media</Typography>
          </Box>
          <Box
            component="div"
            sx={{ display: "flex", gap: "4px", alignItems: "center" }}
          >
            <Box
              component="div"
              sx={{
                height: 8,
                width: 8,
                bgcolor: "#FFAB00",
                borderRadius: "100%",
              }}
            />
            <Typography sx={{ fontSize: "9px" }}>Documents</Typography>
          </Box>
          <Box
            component="div"
            sx={{ display: "flex", gap: "4px", alignItems: "center" }}
          >
            <Box
              component="div"
              sx={{
                height: 8,
                width: 8,
                bgcolor: "#637381",
                borderRadius: "100%",
              }}
            />
            <Typography sx={{ fontSize: "8px" }}>Other</Typography>
          </Box>
        </Box>
        <Box
          component="div"
          sx={{
            position: "relative",
            width: "100%",
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box
            component="div"
            sx={{
              position: "absolute",
              bottom: 8,
              left: "12%",
              width: "20px",
              height: "40%",
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            <Box
              component="div"
              sx={{ width: "100%", height: "15%", bgcolor: "#637381" }}
            />
            <Box
              component="div"
              sx={{ width: "100%", height: "20%", bgcolor: "#FFAB00" }}
            />
            <Box
              component="div"
              sx={{ width: "100%", height: "20%", bgcolor: "#FF5630" }}
            />
            <Box
              component="div"
              sx={{ width: "100%", height: "45%", bgcolor: "#2065D1" }}
            />
          </Box>
          <Box
            component="div"
            sx={{
              position: "absolute",
              bottom: 8,
              left: "25%",
              width: "20px",
              height: "66%",
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            <Box
              component="div"
              sx={{ width: "100%", height: "10%", bgcolor: "#637381" }}
            />
            <Box
              component="div"
              sx={{ width: "100%", height: "15%", bgcolor: "#FFAB00" }}
            />
            <Box
              component="div"
              sx={{ width: "100%", height: "40%", bgcolor: "#FF5630" }}
            />
            <Box
              component="div"
              sx={{ width: "100%", height: "35%", bgcolor: "#2065D1" }}
            />
          </Box>
          <Box
            component="div"
            sx={{
              position: "absolute",
              bottom: 8,
              left: "39%",
              width: "20px",
              height: "58%",
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            <Box
              component="div"
              sx={{ width: "100%", height: "8%", bgcolor: "#637381" }}
            />
            <Box
              component="div"
              sx={{ width: "100%", height: "12%", bgcolor: "#FFAB00" }}
            />
            <Box
              component="div"
              sx={{ width: "100%", height: "15%", bgcolor: "#FF5630" }}
            />
            <Box
              component="div"
              sx={{ width: "100%", height: "65%", bgcolor: "#2065D1" }}
            />
          </Box>
          <Box
            component="div"
            sx={{
              position: "absolute",
              bottom: 8,
              left: "53%",
              width: "20px",
              height: "88%",
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            <Box
              component="div"
              sx={{ width: "100%", height: "10%", bgcolor: "#637381" }}
            />
            <Box
              component="div"
              sx={{ width: "100%", height: "25%", bgcolor: "#FFAB00" }}
            />
            <Box
              component="div"
              sx={{ width: "100%", height: "25%", bgcolor: "#FF5630" }}
            />
            <Box
              component="div"
              sx={{ width: "100%", height: "40%", bgcolor: "#2065D1" }}
            />
          </Box>
          <Box
            component="div"
            sx={{
              position: "absolute",
              bottom: 8,
              left: "66%",
              width: "20px",
              height: "65%",
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            <Box
              component="div"
              sx={{ width: "100%", height: "6%", bgcolor: "#637381" }}
            />
            <Box
              component="div"
              sx={{ width: "100%", height: "22%", bgcolor: "#FFAB00" }}
            />
            <Box
              component="div"
              sx={{ width: "100%", height: "31%", bgcolor: "#FF5630" }}
            />
            <Box
              component="div"
              sx={{ width: "100%", height: "41%", bgcolor: "#2065D1" }}
            />
          </Box>
          <Box
            component="div"
            sx={{
              position: "absolute",
              bottom: 8,
              left: "78.5%",
              width: "20px",
              height: "82%",
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            <Box
              component="div"
              sx={{ width: "100%", height: "18%", bgcolor: "#637381" }}
            />
            <Box
              component="div"
              sx={{ width: "100%", height: "22%", bgcolor: "#FFAB00" }}
            />
            <Box
              component="div"
              sx={{ width: "100%", height: "27%", bgcolor: "#FF5630" }}
            />
            <Box
              component="div"
              sx={{ width: "100%", height: "33%", bgcolor: "#2065D1" }}
            />
          </Box>
          <Box
            component="div"
            sx={{
              position: "absolute",
              bottom: 8,
              left: "91.5%",
              width: "20px",
              height: "82%",
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            <Box
              component="div"
              sx={{ width: "100%", height: "45%", bgcolor: "#637381" }}
            />
            <Box
              component="div"
              sx={{ width: "100%", height: "21%", bgcolor: "#FFAB00" }}
            />
            <Box
              component="div"
              sx={{ width: "100%", height: "24%", bgcolor: "#FF5630" }}
            />
            <Box
              component="div"
              sx={{ width: "100%", height: "10%", bgcolor: "#2065D1" }}
            />
          </Box>
          {[120, 90, 60, 30, 0].map((bytes: number) => (
            <Box
              key={bytes}
              component="div"
              sx={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <Typography
                sx={{
                  color: "text.secondary",
                  fontSize: "10px",
                  fontWeight: 600,
                }}
              >
                {bytes}
              </Typography>
              <Box
                component="div"
                sx={{
                  height: "0.5px",
                  width: "100%",
                  borderWidth: "1px",
                  borderColor: "border.primary",
                  borderStyle: "dashed",
                }}
              />
            </Box>
          ))}
        </Box>
        <Box
          component="div"
          sx={{
            height: "15px",
            width: "92%",
            px: 2,
            marginLeft: "auto",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
            (day: string) => (
              <Typography
                key={day}
                sx={{
                  color: "text.secondary",
                  fontSize: "9px",
                }}
              >
                {day}
              </Typography>
            )
          )}
        </Box>
      </Box>
    </>
  );
};

export default AnalyticsFeature;

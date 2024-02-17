import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";
import CardBody from "./CardBody";

const Usage: FC = () => {
  return (
    <CardBody>
      <Typography>Usage</Typography>
      <Box component="div" sx={{ my: 2 }}>
        <PieChart
          width={400}
          height={200}
          series={[
            {
              data: [
                { id: 0, value: 10, label: "Photos/Images" },
                { id: 1, value: 15, label: "Documents/PDFs" },
                { id: 2, value: 20, label: "Free Space" },
              ],
              highlightScope: { faded: "global", highlighted: "item" },
              innerRadius: 80,
              outerRadius: 100,
              paddingAngle: 1,
              cornerRadius: 0,
              cx: 195,
            },
          ]}
          slotProps={{
            legend: {
              hidden: true,
            },
          }}
        />
      </Box>
    </CardBody>
  );
};

export default Usage;

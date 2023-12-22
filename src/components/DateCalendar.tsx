import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar as MuiDateCalendar } from "@mui/x-date-pickers/DateCalendar";

export default function DateCalendar() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MuiDateCalendar sx={{ backgroundColor: "inherit" }} />
    </LocalizationProvider>
  );
}

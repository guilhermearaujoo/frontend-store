import { DatePicker } from "@mui/x-date-pickers/";
import { Dayjs } from "dayjs";

interface DateFilterProps {
  startTime: Dayjs | null;
  endTime: Dayjs | null;
  setStartTime: React.Dispatch<React.SetStateAction<Dayjs | null>>;
  setEndTime: React.Dispatch<React.SetStateAction<Dayjs | null>>;
}

export default function DateFilter({
  setStartTime,
  setEndTime,
  startTime,
  endTime,
}: DateFilterProps) {
  return (
    <div>
      <DatePicker
        value={startTime}
        onChange={(newValue) => setStartTime(newValue)}
      />
      <DatePicker
        value={endTime}
        onChange={(newValue) => setEndTime(newValue)}
      />
    </div>
  );
}

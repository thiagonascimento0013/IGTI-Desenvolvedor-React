import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { ICalendar } from "./backend";

interface ICalendarsViewProps {
  calendars: ICalendar[];
  toggleCalendar: (i: number) => void;
  calendarsSelected: boolean[];
}

export function CalendarsView(props: ICalendarsViewProps) {
  const { calendars, calendarsSelected, toggleCalendar } = props;
  return (
    <Box marginTop="64px">
      <h3>Agendas</h3>
      {calendars.map((calendar, i) => (
        <div key={calendar.id}>
          <FormControlLabel
            control={
              <Checkbox
                style={{ color: calendar.color }}
                checked={calendarsSelected[i]}
                onChange={() => toggleCalendar(i)}
              />
            }
            label={calendar.name}
          />
        </div>
      ))}
    </Box>
  );
}

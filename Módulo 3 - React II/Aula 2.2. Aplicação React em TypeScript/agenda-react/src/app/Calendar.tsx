import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import Icon from "@mui/material//Icon";
import { ICalendar, IEvent } from "./backend";

const DAYS_OF_WEEK = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SÁB"];

interface ICalendarProps {
  weeks: ICalendarCell[][];
}

export function Calendar(props: ICalendarProps) {
  const { weeks } = props;
  return (
    <TableContainer style={{ flex: "1" }} component={"div"}>
      <Table aria-label="a dense table">
        <TableHead>
          <TableRow>
            {DAYS_OF_WEEK.map((day) => (
              <TableCell align="center" key={day}>
                {day}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {weeks.map((week, i) => (
            <TableRow key={i}>
              {week.map((cell) => (
                <TableCell align="center" key={cell.date}>
                  <div>{cell.dayOfMonth}</div>
                  {cell.events.map((event) => {
                    const color = event.calendar.color;
                    return (
                      <button key={event.id}>
                        {event.time && (
                          <>
                            <Icon style={{ color }} fontSize="inherit">
                              watch_later
                            </Icon>
                            <Box component="span" margin="0 4px">
                              {event.time}
                            </Box>
                          </>
                        )}
                        {event.time ? (
                          <span>{event.desc}</span>
                        ) : (
                          <span
                            style={{
                              border: "none",
                              cursor: "pointer",
                              borderRadius: 5,
                              backgroundColor: color,
                            }}
                          >
                            {event.desc}
                          </span>
                        )}
                      </button>
                    );
                  })}
                  ;
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export type IEventWithCalendar = IEvent & { calendar: ICalendar };

export interface ICalendarCell {
  date: string;
  dayOfMonth: number;
  events: IEventWithCalendar[];
}

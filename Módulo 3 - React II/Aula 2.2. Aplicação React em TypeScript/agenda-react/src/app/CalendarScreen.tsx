import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import {
  getCalendarEndpoint,
  getEventsEndpoint,
  ICalendar,
  IEvent,
} from "./backend";
import { useEffect, useState } from "react";
import { CalendarsView } from "./CalendarsView";
import { CalendarHeader } from "./CalendarHeader";
import { Calendar } from "./Calendar";
import { EventFormDialog, IEditingEvent } from "./EventFormDialog";

export default function CalendarScreen() {
  const [events, setEvents] = useState<IEvent[]>([]);
  const [calendars, setCalendars] = useState<ICalendar[]>([]);
  const [calendarsSelected, setCalendarsSelected] = useState<boolean[]>([]);
  const [editingEvent, setEditingEvent] = useState<IEditingEvent | null>(null);

  const weeks = generateCalendar(
    getToday(),
    events,
    calendars,
    calendarsSelected
  );
  const firstDate = weeks[0][0].date;
  const lastDate = weeks[weeks.length - 1][6].date;

  useEffect(() => {
    Promise.all([
      getCalendarEndpoint(),
      getEventsEndpoint(firstDate, lastDate),
    ]).then(([calendars, events]) => {
      setCalendars(calendars);
      setCalendarsSelected(calendars.map(() => true));
      setEvents(events);
    });
  }, [firstDate, lastDate]);

  function toggleCalendar(i: number) {
    const newValue = [...calendarsSelected];
    newValue[i] = !newValue[i];
    setCalendarsSelected(newValue);
  }

  function openNewEvent() {
    setEditingEvent({
      date: getToday(),
      desc: "",
      calendarId: calendars[0].id,
    });
  }

  return (
    <Box display="flex" height="100%" alignItems="stretch">
      <Box
        borderRight="1px solid rgb(224, 224, 224)"
        width="16em"
        padding="8px 16px"
      >
        <h2>Agenda React</h2>
        <Button variant="contained" onClick={openNewEvent}>
          Novo Evento
        </Button>

        <CalendarsView
          calendars={calendars}
          toggleCalendar={toggleCalendar}
          calendarsSelected={calendarsSelected}
        />
      </Box>
      <Box flex="1" display="flex" flexDirection="column">
        <CalendarHeader month={""} />

        <Calendar weeks={weeks} />

        <EventFormDialog
          event={editingEvent}
          onClose={() => setEditingEvent(null)}
          calendars={calendars}
        />
      </Box>
    </Box>
  );
}

type IEventWithCalendar = IEvent & { calendar: ICalendar };

interface ICalendarCell {
  date: string;
  dayOfMonth: number;
  events: IEventWithCalendar[];
}

function generateCalendar(
  date: string,
  allEvents: IEvent[],
  calendars: ICalendar[],
  calendarsSelected: boolean[]
): ICalendarCell[][] {
  const weeks: ICalendarCell[][] = [];
  const jsDate = new Date(date + "T12:00:00");
  const currentMonth = jsDate.getMonth();

  const currentDay = new Date(jsDate.valueOf());
  currentDay.setDate(1);
  const dayOfWeek = currentDay.getDay();
  currentDay.setDate(1 - dayOfWeek);

  do {
    const week: ICalendarCell[] = [];
    for (let i = 0; i < 7; i++) {
      const monthStr = (currentDay.getMonth() + 1).toString().padStart(2, "0");
      const dayStr = currentDay.getDate().toString().padStart(2, "0");
      const isoDate = `${currentDay.getFullYear()}-${monthStr}-${dayStr}`;

      const events: IEventWithCalendar[] = [];
      for (const event of allEvents) {
        if (event.date === isoDate) {
          const calIndex = calendars.findIndex(
            (cal) => cal.id === event.calendarId
          );
          if (calendarsSelected[calIndex]) {
            events.push({ ...event, calendar: calendars[calIndex] });
          }
        }
      }
      week.push({
        dayOfMonth: currentDay.getDate(),
        date: isoDate,
        events,
      });
      currentDay.setDate(currentDay.getDate() + 1);
    }
    weeks.push(week);
  } while (currentDay.getMonth() === currentMonth);

  return weeks;
}

function getToday() {
  return "2022-06-29";
}

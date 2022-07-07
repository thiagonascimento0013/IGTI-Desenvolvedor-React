import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { ICalendar } from "./backend";
import { useState } from "react";

export interface IEditingEvent {
  id?: number;
  date: string;
  time?: string;
  desc: string;
  calendarId: number;
}

interface IEventFormDialogProps {
  event: IEditingEvent | null;
  calendars: ICalendar[];
  onClose: () => void;
}

export function EventFormDialog(props: IEventFormDialogProps) {
  const [event, setEvent] = useState<IEditingEvent | null>(props.event);
  return (
    <div>
      <Dialog open={!!event} onClose={props.onClose}>
        <DialogTitle>Criar Evento</DialogTitle>
        <DialogContent>
          {event && (
            <>
              <TextField
                type="date"
                margin="normal"
                label="Data"
                fullWidth
                variant="standard"
                value={event.date}
              />
              <TextField
                autoFocus
                margin="normal"
                label="Descrição"
                fullWidth
                variant="standard"
                value={event.desc}
                onChange={(evt) =>
                  setEvent({ ...event, desc: evt.target.value })
                }
              />
              <TextField
                type="time"
                margin="normal"
                label="Hora"
                fullWidth
                variant="standard"
                value={event.time}
              />
              <FormControl margin="normal" fullWidth>
                <InputLabel id="select-calendar">Agenda</InputLabel>
                <Select labelId="select-calendar" value={event.calendarId}>
                  {props.calendars.map((calendar) => (
                    <MenuItem key={calendar.id} value={calendar.id}>
                      {calendar.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onClose}>Cancelar</Button>
          <Button onClick={props.onClose}>Salvar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

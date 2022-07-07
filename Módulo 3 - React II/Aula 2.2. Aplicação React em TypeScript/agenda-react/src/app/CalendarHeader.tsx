import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material//Icon";
import Avatar from "@mui/material/Avatar";

interface ICalendarHeaderProps {
  month: string;
}

export function CalendarHeader(props: ICalendarHeaderProps) {
  const { month } = props;
  return (
    <Box display="flex" alignItems="center" padding="8px 16px">
      <Box>
        <IconButton>
          <Icon area-label="Mês anterior">chevron_left</Icon>
        </IconButton>
        <IconButton>
          <Icon area-label="Próximo mês">chevron_right</Icon>
        </IconButton>
      </Box>
      <Box flex="1" marginLeft="16px" component="h3">
        Junho de 2022
      </Box>
      <IconButton area-label="Usuário">
        <Avatar>
          <Icon>person</Icon>
        </Avatar>
      </IconButton>
    </Box>
  );
}

import {
  eachDayOfInterval,
  format,
  isSameDay,
  isSameMonth,
  lastDayOfMonth,
  lastDayOfWeek,
  startOfMonth,
  startOfWeek,
} from 'date-fns';

import {
  CalendarContainer,
  Day,
  DayNumberInActive,
  DayNumberRegular,
  DayNumberToday,

  // DayWeekend,
} from './StyledMonth';

import { GetDatefromURL } from '../../../heplers/getDatefromURL';
import { useNavigate } from 'react-router-dom';

const MonthCalendar = () => {
  const activeDate = GetDatefromURL();
  console.log(' activeDate : ', activeDate);

  const navigate = useNavigate();
  const nagigatetoGoosedDay = (day) => {
    navigate(`/calendar/day/${format(day, 'dd-MMMM-yyyy')}`);
  };
  const firstDay = startOfMonth(activeDate);
  const lastDay = lastDayOfMonth(activeDate);
  const startDate = startOfWeek(firstDay, { weekStartsOn: 1 });
  const endDate = lastDayOfWeek(lastDay, { weekStartsOn: 1 });

  const totalDays = eachDayOfInterval({ start: startDate, end: endDate });

  return (
    <CalendarContainer>
      {totalDays.map((oneDayofMonth) => (
        <Day
          key={oneDayofMonth}
          onClick={() => nagigatetoGoosedDay(oneDayofMonth)}
        >
          {isSameDay(oneDayofMonth, new Date()) ? (
            <DayNumberToday>{format(oneDayofMonth, 'd')}</DayNumberToday>
          ) : !isSameMonth(oneDayofMonth, activeDate) ? (
            <DayNumberInActive>{format(oneDayofMonth, 'd')}</DayNumberInActive>
          ) : (
            <DayNumberRegular>{format(oneDayofMonth, 'd')}</DayNumberRegular>
          )}

          {<>task</>}
        </Day>
      ))}
    </CalendarContainer>
  );
};

export default MonthCalendar;

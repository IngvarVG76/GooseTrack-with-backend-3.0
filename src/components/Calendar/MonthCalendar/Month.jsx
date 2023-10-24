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
  Text,
  TextWrapper,
  Wrapper,

  // DayWeekend,
} from './StyledMonth';

import { GetDatefromURL } from '../../../heplers/getDatefromURL';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTasks } from '../../../redux/tasks/tasksSelectors';

const MonthCalendar = () => {
  const tasks = useSelector(selectTasks);

  const activeDate = GetDatefromURL();

  const navigate = useNavigate();
  const nagigatetoGoosedDay = (day) => {
    navigate(`/calendar/day/${format(day, 'yyyy-MM-dd')}`);
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
          <Wrapper>
            {tasks.map(({ date, title, priority, _id }) => {
              if (format(oneDayofMonth, 'y-M-d') === date) {
                return (
                  <TextWrapper $priority={priority} key={_id}>
                    <Text $priority={priority}>{title}</Text>
                  </TextWrapper>
                );
              }
            })}
          </Wrapper>
        </Day>
      ))}
    </CalendarContainer>
  );
};

export default MonthCalendar;

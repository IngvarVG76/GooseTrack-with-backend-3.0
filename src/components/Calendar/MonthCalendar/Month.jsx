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

  // DayWeekend,
} from './StyledMonth';

import { GetDatefromURL } from '../../../heplers/getDatefromURL';
import { useNavigate } from 'react-router-dom';

const DATA = [
  {
    _id: '6534152d06f09ae1d3f46212',
    title: 'Купить карамель',
    start: '12:12',
    end: '15:15',
    priority: 'LOW',
    date: '2023-9-30',
    category: 'TODO',
  },
  {
    _id: '653449baf53eba97ab374401',
    title: 'Купить ингридиенты на венегрет',
    start: '12:12',
    end: '15:15',
    priority: 'HIGH',
    date: '2023-10-10',
    category: 'INPROGRESS',
  },
  {
    _id: '653449bdf53eba97ab374404',
    title: 'Купить дифлофос',
    start: '12:12',
    end: '15:15',
    priority: 'MEDIUM',
    date: '2023-10-20',
    category: 'DONE',
  },
  {
    _id: '653449bdf53eba97ab374404',
    title: 'Замок',
    start: '12:12',
    end: '15:15',
    priority: 'MEDIUM',
    date: '2023-10-20',
    category: 'DONE',
  },
];

const unique = DATA.filter(
  (item, index, arr) => arr.findIndex((e) => e.date === item.date) === index,
);

const MonthCalendar = () => {
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

          {unique.map(({ date, title, priority, _id }) => {
            if (format(oneDayofMonth, 'y-M-d') === date) {
              return (
                <TextWrapper $priority={priority} key={_id}>
                  <Text $priority={priority}>{title}</Text>
                </TextWrapper>
              );
            }
          })}
        </Day>
      ))}
    </CalendarContainer>
  );
};

export default MonthCalendar;

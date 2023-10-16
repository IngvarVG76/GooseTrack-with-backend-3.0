import {
  addDays,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
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
import { useParams } from 'react-router-dom';

const MonthCalendar = () => {
  const params = useParams();
  const activeDate = new Date(params.currentDate);
  const generateDatesForCurrentWeek = (date, activeDate) => {
    let currentDate = date;
    const week = [];

    // one day  of week  calendar
    for (let day = 0; day < 7; day++) {
      week.push(
        <Day>
          {isSameDay(currentDate, activeDate) ? (
            <DayNumberToday>{format(currentDate, 'd')}</DayNumberToday>
          ) : !isSameMonth(currentDate, activeDate) ? (
            <DayNumberInActive>{format(currentDate, 'd')}</DayNumberInActive>
          ) : (
            <DayNumberRegular>{format(currentDate, 'd')}</DayNumberRegular>
          )}

          {
            <div>
              <p>Test task</p>
            </div>
          }
        </Day>,
      );
      currentDate = addDays(currentDate, 1);
    }
    return <>{week}</>;
  };
  const startOfTheSelectedMonth = startOfMonth(activeDate);

  const endOfTheSelectedMonth = endOfMonth(activeDate);
  const startDate = startOfWeek(startOfTheSelectedMonth, { weekStartsOn: 1 });
  const endDate = endOfWeek(endOfTheSelectedMonth);

  let currentDate = startDate;

  const allWeeks = [];

  while (currentDate <= endDate) {
    allWeeks.push(generateDatesForCurrentWeek(currentDate, activeDate));
    currentDate = addDays(currentDate, 7);
  }

  return (
    <>
      <CalendarContainer>{allWeeks}</CalendarContainer>;
    </>
  );
};

export default MonthCalendar;

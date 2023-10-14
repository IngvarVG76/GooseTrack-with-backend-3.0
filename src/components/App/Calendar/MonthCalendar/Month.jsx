import {
  addDays,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  isWeekend,
  startOfMonth,
  startOfWeek,
} from 'date-fns';
import WeekNames from './WeekNames';
import {
  CalendarContainer,
  Day,
  DayInActive,
  DayToday,
  DayWeekend,
} from './StyledMonth';

const MonthCalendar = ({ activeDate }) => {
  const generateDatesForCurrentWeek = (date, activeDate) => {
    let currentDate = date;
    const week = [];

    // one day  of month calendar
    for (let day = 0; day < 7; day++) {
      week.push(
        <>
          {isSameDay(currentDate, activeDate) ? (
            <DayToday>
              <span> {format(currentDate, 'd')}</span>{' '}
            </DayToday>
          ) : isWeekend(currentDate, activeDate) ? (
            <DayWeekend>
              <span> {format(currentDate, 'd')}</span>
            </DayWeekend>
          ) : !isSameMonth(currentDate, activeDate) ? (
            <DayInActive>
              <span> {format(currentDate, 'd')}</span>
            </DayInActive>
          ) : (
            <Day>
              <span> {format(currentDate, 'd')}</span>
            </Day>
          )}
        </>,
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

  // const daysOfMonth = eachDayOfInterval({
  //   start: startOfTheSelectedMonth,
  //   end: endOfTheSelectedMonth,
  // });

  return (
    <>
      <WeekNames activeDate={activeDate} />
      <CalendarContainer>{allWeeks}</CalendarContainer>;
    </>
  );
};

export default MonthCalendar;

import Header from './Header/Header';
import CalendarTools from './CalendarTools/CalendarTools';
import MonthCalendar from './MonthCalendar/Month';
import WeekCalendar from './WeekCalendar/Day';
import { useState } from 'react';
import { CalendarWrapper } from './StyledCalendar';

const Calendar = () => {
  const [activeDate, setActiveDate] = useState(new Date());
  const [isMonth, setIsMonth] = useState(true);
  return (
    < CalendarWrapper>
      <Header />
      <CalendarTools
        isMonth={isMonth}
        setIsMonth={setIsMonth}
        setActiveDate={setActiveDate}
        activeDate={activeDate}
      />

      {isMonth ? (
        <MonthCalendar activeDate={activeDate} />
      ) : (
        <WeekCalendar activeDate={activeDate} />
      )}
    </ CalendarWrapper>
  );
};

export default Calendar;

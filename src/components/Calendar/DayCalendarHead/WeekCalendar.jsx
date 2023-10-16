import {
  format,
  eachDayOfInterval,
  startOfWeek,
  endOfWeek,
  isSameDay,
} from 'date-fns';

import { useEffect, useState } from 'react';
import {
  DayHigherWrapper,
  DayWrapper,
  WeekNames,
  WeekNumber,
} from './WeekCalendar.styled';

const WeekCalendar = ({ activeDate }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  // console.log('activeDate : ', activeDate);

  const startDate = startOfWeek(activeDate, { weekStartsOn: 1 });
  // const startDate = startOfWeek(activeDate, { weekStartsOn: 1 });
  // const startDate = startOfISOWeek(activeDate);

  const endDate = endOfWeek(activeDate, { weekStartsOn: 1 });

  console.log('startDate : ', startDate);
  console.log(' endDate : ', endDate);

  const daysOfWeek = eachDayOfInterval({
    start: startDate,
    end: endDate,
  });

  return (
    <DayHigherWrapper>
      {daysOfWeek.map((day, index) => {
        const dayOfWeek = format(day, windowWidth < 768 ? 'EEEEE' : 'E');
        return (
          <DayWrapper key={index}>
            <WeekNames>{dayOfWeek}</WeekNames>
            <WeekNumber $active={isSameDay(day, activeDate)}>
              {format(day, 'd')}
            </WeekNumber>
          </DayWrapper>
        );
      })}
    </DayHigherWrapper>
  );
};

export default WeekCalendar;

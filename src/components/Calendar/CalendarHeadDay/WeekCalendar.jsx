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
import { useNavigate } from 'react-router-dom';
import { GetDatefromURL } from '../../../heplers/getDatefromURL';

const WeekCalendar = () => {
  const navigate = useNavigate();
  const activeDate = GetDatefromURL();
  const changeDate = (date) => {
    navigate(`/calendar/day/${format(date, 'dd-MMMM-yyyy')}`);
  };

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

  const startDate = startOfWeek(activeDate, { weekStartsOn: 1 });
  const endDate = endOfWeek(activeDate, { weekStartsOn: 1 });

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
            <WeekNumber
              type="button"
              onClick={() => changeDate(day)}
              $active={isSameDay(day, activeDate)}
            >
              {format(day, 'd')}
            </WeekNumber>
          </DayWrapper>
        );
      })}
    </DayHigherWrapper>
  );
};

export default WeekCalendar;

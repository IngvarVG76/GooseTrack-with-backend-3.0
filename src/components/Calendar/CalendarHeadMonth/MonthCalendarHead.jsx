import { addDays, format, startOfWeek } from 'date-fns';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { StyledWeekNames, WrapperWeek } from './StyledMonthCalendarHead';

const MonthCalendarHead = () => {
  const params = useParams();
  const activeDate = new Date(params.currentDate);
  //початок тижня цієї дати
  const weekStartDate = startOfWeek(activeDate, { weekStartsOn: 1 });
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
  const weekNames = [];

  for (let day = 0; day < 7; day++) {
    // console.log('day', day);
    // console.log('activeDate', activeDate);

    //"E" Day of week (formatting)
    //додай до початкової дати 7 днів і відформатуй і поверни тільки дні тижня

    weekNames.push(
      <StyledWeekNames key={day}>
        {format(addDays(weekStartDate, day), windowWidth < 768 ? 'EEEEE' : 'E')}
      </StyledWeekNames>,
    );
  }
  return <WrapperWeek>{weekNames}</WrapperWeek>;
};

export default MonthCalendarHead;

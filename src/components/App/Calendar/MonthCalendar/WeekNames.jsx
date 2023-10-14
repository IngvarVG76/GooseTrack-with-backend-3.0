import { addDays, format, startOfWeek } from 'date-fns';
import { StyledWeekNames, WrapperWeek } from './StyledMonth';
import { useEffect, useState } from 'react';

const WeekNames = ({ activeDate }) => {
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
    console.log('day', day);
    console.log('activeDate', activeDate);

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

export default WeekNames;

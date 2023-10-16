import { useLocation } from 'react-router-dom';

import { Wrapper } from './CalendarToolbar.styled';
import CurrentDate from '../CurrentDate/CurrentDate';
import { DayOrMonthPeriod } from '../PeriodTypeSelect';

const CalendarToolbar = ({ activeDate, setActiveDate }) => {
  const location = useLocation();

  const activePage = (arr) => {
    let active;
    arr.map((page) => {
      if (location.pathname.includes(page)) {
        active = page;
      }
      return active;
    });

    return active;
  };

  const pages = ['month', 'day'];

  return (
    <Wrapper>
      <CurrentDate
        activeDate={activeDate}
        setActiveDate={setActiveDate}
        activePage={activePage(pages)}
      />
      <DayOrMonthPeriod
        activePage={activePage(pages)}
        setActiveDate={setActiveDate}
        activeDate={activeDate}
      />
    </Wrapper>
  );
};

export default CalendarToolbar;

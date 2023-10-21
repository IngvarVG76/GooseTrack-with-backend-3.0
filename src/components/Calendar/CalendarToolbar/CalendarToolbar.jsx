import { useLocation } from 'react-router-dom';

import { Wrapper } from './CalendarToolbar.styled';

import { DayOrMonthPeriod } from '../PeriodTypeSelect/PeriodTypeSelect';
import ChooseDate from '../PeriodDateSelect/ChooseDate';

const CalendarToolbar = () => {
  const location = useLocation();
  // console.log('location.pathname: ', location.pathname);

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
      <ChooseDate activePage={activePage(pages)} />
      <DayOrMonthPeriod activePage={activePage(pages)} />
    </Wrapper>
  );
};

export default CalendarToolbar;

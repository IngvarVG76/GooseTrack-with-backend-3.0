import { Link, NavLink } from 'react-router-dom';

export const DayOrMonthPeriod = ({ activePage, activeDate }) => {
  return (
    <div>
      {activePage === 'month' ? (
        <Link to={`/calendar/month/${activeDate}`}>Month</Link>
      ) : (
        <NavLink to={`/calendar/month/${activeDate}`}>Month</NavLink>
      )}

      {activePage === 'day' ? (
        <Link to={`/calendar/day/${activeDate}`}>Day</Link>
      ) : (
        <NavLink to={`/calendar/day/${activeDate}`}>Day</NavLink>
      )}
    </div>
  );
};

import { useParams } from 'react-router-dom';
import { StyledLink } from './StyledPeriodTypeSelect';

export const DayOrMonthPeriod = ({ activePage }) => {
  const params = useParams();
  const date = new Date(params.currentDate);

  const getDatefromURL = () => {
    if (Object.prototype.toString.call(date) === '[object Date]') {
      if (isNaN(date)) {
        return new Date();
      } else {
        return date;
      }
    }
  };

  const activeDate = getDatefromURL();

  const primaryBtn = () => {
    return activePage === 'month' ? true : false;
  };

  return (
    <div>
      <StyledLink
        $borderSide
        $active={activePage}
        $primary={primaryBtn()}
        to={`/calendar/month/${activeDate}`}
      >
        Month
      </StyledLink>

      <StyledLink
        $active={activePage}
        $primary={!primaryBtn()}
        to={`/calendar/day/${activeDate}`}
      >
        Day
      </StyledLink>
    </div>
  );
};

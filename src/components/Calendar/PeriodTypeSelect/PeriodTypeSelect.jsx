import { StyledLink } from './StyledPeriodTypeSelect';
import { GetDatefromURL } from '../../../heplers/getDatefromURL';

export const DayOrMonthPeriod = ({ activePage }) => {
  const activeDate = GetDatefromURL();

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

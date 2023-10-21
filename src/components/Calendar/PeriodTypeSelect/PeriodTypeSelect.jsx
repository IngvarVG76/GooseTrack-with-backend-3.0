import { StyledLink } from './StyledPeriodTypeSelect';
import { GetDatefromURL } from '../../../heplers/getDatefromURL';
import { format } from 'date-fns';

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
        to={`/calendar/month/${format(activeDate, 'MMMM-yyyy')}`}
      >
        Month
      </StyledLink>

      <StyledLink
        $active={activePage}
        $primary={!primaryBtn()}
        to={`/calendar/day/${format(activeDate, 'dd-MMMM-yyyy')}`}
      >
        Day
      </StyledLink>
    </div>
  );
};

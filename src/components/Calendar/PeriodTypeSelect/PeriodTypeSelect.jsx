import { LinkWrapper, StyledLink } from './StyledPeriodTypeSelect';
import { GetDatefromURL } from '../../../heplers/getDatefromURL';
import { format } from 'date-fns';

export const DayOrMonthPeriod = ({ activePage }) => {
  const activeDate = GetDatefromURL();

  const primaryBtn = () => {
    return activePage === 'month' ? true : false;
  };

  return (
    <LinkWrapper>
      <StyledLink
        $borderSide
        $active={activePage}
        $primary={primaryBtn()}
        to={`/calendar/month/${format(activeDate, 'yyyy-MM')}`}
      >
        Month
      </StyledLink>
      <StyledLink
        $active={activePage}
        $primary={!primaryBtn()}
        to={`/calendar/day/${format(activeDate, 'yyyy-MM-dd')}`}
      >
        Day
      </StyledLink>
    </LinkWrapper>
  );
};

import { StyledLink, Wrapper } from './StyledPeriodTypeSelect';

export const DayOrMonthPeriod = ({ activePage, activeDate }) => {
  const primaryBtn = () => {
    return activePage === 'month' ? true : false;
  };

  return (
    <Wrapper>
      <StyledLink
        $active={activePage}
        $primary={primaryBtn()}
        to={`/calendar/month/${activeDate}`}
      >
        Month
      </StyledLink>

      <StyledLink
        $active={activePage}
        $primary={primaryBtn()}
        to={`/calendar/day/${activeDate}`}
      >
        Day
      </StyledLink>
    </Wrapper>
  );
};

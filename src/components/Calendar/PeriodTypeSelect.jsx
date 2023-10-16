import { StyledLink, Wrapper } from './StyledPeriodTypeSelect';

export const DayOrMonthPeriod = ({ activePage, activeDate }) => {
  console.log('  activePage: ', activePage);
  const primaryBtn = () => {
    return activePage === 'month' ? true : false;
  };

  console.log(' primaryBtn: ', primaryBtn());
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

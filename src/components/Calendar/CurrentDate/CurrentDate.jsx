import { format, subDays, addDays, subMonths, addMonths } from 'date-fns';

import {
  Button,
  Controllers,
  CurrentMonth,
  StyledAiOutlineLeft,
  StyledAiOutlineRight,
} from './CurrentDate.styled';
const CurrentDate = ({ activePage, activeDate, setActiveDate }) => {
  const changeNextDate = (activePage) => {
    activePage === 'month'
      ? setActiveDate(addMonths(activeDate, 1))
      : setActiveDate(addDays(activeDate, 1));
  };
  const changePrevDate = (activePage) => {
    activePage === 'month'
      ? setActiveDate(subMonths(activeDate, 1))
      : setActiveDate(subDays(activeDate, 1));
  };
  return (
    <Controllers>
      <div
        onClick={() => {
          setActiveDate(new Date());
        }}
      >
        <CurrentMonth> {format(activeDate, ' d MMM yyyy')}</CurrentMonth>
      </div>
      <div>
        <Button
          $direction="back"
          $back
          onClick={() => changePrevDate(activePage)}
        >
          <StyledAiOutlineLeft />
        </Button>
        <Button $direction="forward" onClick={() => changeNextDate(activePage)}>
          <StyledAiOutlineRight />
        </Button>
      </div>
    </Controllers>
  );
};

export default CurrentDate;

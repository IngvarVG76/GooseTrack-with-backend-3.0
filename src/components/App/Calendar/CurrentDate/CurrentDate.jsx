import { format, subDays, addDays, subMonths, addMonths } from 'date-fns';

import {
  Button,
  Controllers,
  CurrentMonth,
  StyledAiOutlineLeft,
  StyledAiOutlineRight,
} from './CurrentDate.styled';
const CurrentDate = ({ isMonth, activeDate, setActiveDate }) => {
  const changeNextDate = isMonth => {
    isMonth
      ? setActiveDate(addMonths(activeDate, 1))
      : setActiveDate(addDays(activeDate, 1));
  };
  const changePrevDate = isMonth => {
    isMonth
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
        <Button $direction="back" $back onClick={() => changePrevDate(isMonth)}>
          <StyledAiOutlineLeft />
        </Button>
        <Button $direction="forward" onClick={() => changeNextDate(isMonth)}>
          <StyledAiOutlineRight />
        </Button>
      </div>
    </Controllers>
  );
};

export default CurrentDate;

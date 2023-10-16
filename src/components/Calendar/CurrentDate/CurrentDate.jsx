import { format, subDays, addDays, subMonths, addMonths } from 'date-fns';

import {
  Button,
  Controllers,
  CurrentMonth,
  StyledAiOutlineLeft,
  StyledAiOutlineRight,
} from './CurrentDate.styled';
import { useNavigate, useParams } from 'react-router-dom';
const CurrentDate = ({ activePage, setActiveDate }) => {
  const navigate = useNavigate();
  const params = useParams();
  const date = new Date(params.currentDate);

  const getDatefromURL = (date) => {
    if (Object.prototype.toString.call(date) === '[object Date]') {
      if (isNaN(date)) {
        return new Date();
      } else {
        return date;
      }
    }
  };

  const activeDate = getDatefromURL(date);

  const changeNextDate = () => {
    activePage === 'month'
      ? navigate(`/calendar/month/${addMonths(activeDate, 1)}`)
      : navigate(`/calendar/day/${addDays(activeDate, 1)}`);
  };
  const changePrevDate = () => {
    const prevMonth = subMonths(activeDate, 1);
    const prevDay = subDays(activeDate, 1);

    activePage === 'month'
      ? navigate(`/calendar/month/${prevMonth}`)
      : navigate(`/calendar/day/${prevDay}`);
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
        <Button $direction="back" $back onClick={() => changePrevDate()}>
          <StyledAiOutlineLeft />
        </Button>
        <Button $direction="forward" onClick={() => changeNextDate()}>
          <StyledAiOutlineRight />
        </Button>
      </div>
    </Controllers>
  );
};

export default CurrentDate;

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
  // console.log('activePage: ', activePage);
  const navigate = useNavigate();
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

  const changeNextDate = (activeDate) => {
    activePage === 'month'
      ? navigate(`/calendar/month/${addMonths(activeDate, 1)}`)
      : navigate(`/calendar/day/${addDays(activeDate, 1)}`);
  };
  const changePrevDate = (activePage) => {
    activePage === 'month'
      ? navigate(`/calendar/month/${subMonths(activeDate, 1)}`)
      : navigate(`/calendar/day/${subDays(activeDate, 1)}`);
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
          onClick={() => changePrevDate(activeDate)}
        >
          <StyledAiOutlineLeft />
        </Button>
        <Button $direction="forward" onClick={() => changeNextDate(activeDate)}>
          <StyledAiOutlineRight />
        </Button>
      </div>
    </Controllers>
  );
};

export default CurrentDate;

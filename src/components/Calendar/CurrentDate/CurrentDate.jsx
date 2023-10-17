import { subDays, addDays, subMonths, addMonths } from 'date-fns';

import {
  Button,
  Controllers,
  //CurrentMonth,
  StyledAiOutlineLeft,
  StyledAiOutlineRight,
} from './CurrentDate.styled';

import CustomDatePicker from '../../DatePicker/DatePicker';
import { GetDatefromURL } from '../../../heplers/getDatefromURL';
import { useNavigate } from 'react-router-dom';
const CurrentDate = ({ activePage, setActiveDate }) => {
  console.log('activePage: ', activePage);
  const navigate = useNavigate();
  const activeDate = GetDatefromURL();

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
        {/* <CurrentMonth> {format(activeDate, ' d MMM yyyy')}</CurrentMonth> */}

        <CustomDatePicker />
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

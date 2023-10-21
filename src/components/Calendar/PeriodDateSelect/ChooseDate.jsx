import { subDays, addDays, subMonths, addMonths, format } from 'date-fns';

import {
  Button,
  Controllers,
  //CurrentMonth,
  StyledAiOutlineLeft,
  StyledAiOutlineRight,
} from './ChooseDate.styled';

import CustomDatePicker from '../../DatePicker/DatePicker';
import { GetDatefromURL } from '../../../heplers/getDatefromURL';
import { useNavigate } from 'react-router-dom';
const ChooseDate = ({ activePage }) => {
  const navigate = useNavigate();
  const activeDate = GetDatefromURL();

  const changeNextDate = () => {
    const addMonth = format(addMonths(activeDate, 1), 'MMMM-yyy');
    const addDay = format(addDays(activeDate, 1), 'd-MMMM-yyy');
    activePage === 'month'
      ? navigate(`/calendar/month/${addMonth}`)
      : navigate(`/calendar/day/${addDay}`);
  };
  const changePrevDate = () => {
    const prevMonth = format(subMonths(activeDate, 1), 'MMMM-yyy');
    const prevDay = format(subDays(activeDate, 1), 'd-MMMM-yyy');

    activePage === 'month'
      ? navigate(`/calendar/month/${prevMonth}`)
      : navigate(`/calendar/day/${prevDay}`);
  };
  return (
    <Controllers>
      <CustomDatePicker activePage={activePage} />
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

export default ChooseDate;

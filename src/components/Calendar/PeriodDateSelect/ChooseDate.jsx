import { subDays, addDays, subMonths, addMonths, format } from 'date-fns';

import {
  ButtonBack,
  ButtonForward,
  Controllers,
  //CurrentMonth,
  StyledAiOutlineLeft,
  StyledAiOutlineRight,
} from './ChooseDate.styled';

import { GetDatefromURL } from '../../../heplers/getDatefromURL';
import { useNavigate } from 'react-router-dom';
import CustomDatePicker from '../../DatePicker/DatePicker';
const ChooseDate = ({ activePage }) => {
  const navigate = useNavigate();
  const activeDate = GetDatefromURL();

  const changeNextDate = () => {
    const addMonth = format(addMonths(activeDate, 1), 'yyyy-MM');
    const addDay = format(addDays(activeDate, 1), 'yyyy-MM-dd');

    switch (activePage) {
      case 'month':
        navigate(`/calendar/month/${addMonth}`);
        break;
      case 'day':
        navigate(`/calendar/day/${addDay}`);
        break;

      default:
    }
  };
  const changePrevDate = () => {
    const prevMonth = format(subMonths(activeDate, 1), 'yyyy-MM');
    const prevDay = format(subDays(activeDate, 1), 'yyyy-MM-dd');
    switch (activePage) {
      case 'month':
        navigate(`/calendar/month/${prevMonth}`);
        break;
      case 'day':
        navigate(`/calendar/day/${prevDay}`);
        break;

      default:
    }
  };
  return (
    <Controllers>
      <CustomDatePicker activePage={activePage} />
      <div>
        <ButtonBack onClick={() => changePrevDate()}>
          <StyledAiOutlineLeft />
        </ButtonBack>
        <ButtonForward onClick={() => changeNextDate()}>
          <StyledAiOutlineRight />
        </ButtonForward>
      </div>
    </Controllers>
  );
};

export default ChooseDate;

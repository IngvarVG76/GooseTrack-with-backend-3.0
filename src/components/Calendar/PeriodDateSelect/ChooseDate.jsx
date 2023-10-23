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
const ChooseDate = ({ activePage, setStaticticDate, staticticDate }) => {
  const navigate = useNavigate();
  const activeDate = GetDatefromURL();

  const changeNextDate = () => {
    const addMonth = format(addMonths(activeDate, 1), 'yyyy-MM');
    const addDay = format(addDays(activeDate, 1), 'yyyy-MM-dd');
    // activePage === 'month'
    //   ? navigate(`/calendar/month/${addMonth}`)
    //   : navigate(`/calendar/day/${addDay}`);

    switch (activePage) {
      case 'month':
        navigate(`/calendar/month/${addMonth}`);
        break;
      case 'day':
        navigate(`/calendar/day/${addDay}`);
        break;
      case 'statistics':
        setStaticticDate(
          format(addDays(new Date(staticticDate), 1), 'yyyy-MM-dd'),
        );
        break;
      default:
    }
  };
  const changePrevDate = () => {
    const prevMonth = format(subMonths(activeDate, 1), 'yyyy-MM');
    const prevDay = format(subDays(activeDate, 1), 'yyyy-MM-dd');

    // console.log(
    //   '  subDay',
    //   format(subDays(new Date(staticticDate), 1), 'yyyy-MM-dd'),
    // );
    // activePage === 'month'
    //   ? navigate(`/calendar/month/${prevMonth}`)
    //   : navigate(`/calendar/day/${prevDay}`);

    switch (activePage) {
      case 'month':
        navigate(`/calendar/month/${prevMonth}`);
        break;
      case 'day':
        navigate(`/calendar/day/${prevDay}`);
        break;
      case 'statistics':
        setStaticticDate(
          format(subDays(new Date(staticticDate), 1), 'yyyy-MM-dd'),
        );
        break;
      default:
    }
  };
  return (
    <Controllers>
      <CustomDatePicker
        setStaticticDate={setStaticticDate}
        activePage={activePage}
      />
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

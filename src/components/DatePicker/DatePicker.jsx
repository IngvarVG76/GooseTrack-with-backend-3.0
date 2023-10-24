import { forwardRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { GetDatefromURL } from '../../heplers/getDatefromURL';

import { format } from 'date-fns';
import { useLocation, useNavigate } from 'react-router';
import { StyledButton, CalendarGlobalStyles } from './StyledDayPicker';

const CustomDatePicker = ({ activePage, staticticDate, setStaticticDate }) => {
  console.log('staticticDate: ', staticticDate);
  const [activeDate, setActiveDate] = useState(GetDatefromURL());

  const navigate = useNavigate();
  const location = useLocation();
  const handleClick = (date) => {
    console.log('date: ', date);
    const formatdate = format(new Date(date), 'dd-MM-yyyy');
    setActiveDate(date);

    switch (location.pathname) {
      case '/calendar':
        navigate(`/calendar/day/${formatdate}`);
        break;
      case '/statistics':
        setStaticticDate(formatdate);
        break;
      default:
    }
  };

  const inputName = (activePage) => {
    switch (activePage) {
      case 'month':
        return format(GetDatefromURL(), 'MMMM yyyy');

      case 'day':
        return format(GetDatefromURL(), 'd MMM yyyy');

     
      default:
    }
  };

  const CustomInput = forwardRef(function CustomInput({ onClick }, ref) {
    return (
      <StyledButton onClick={onClick} ref={ref}>
        {inputName(activePage)}
      </StyledButton>
    );
  });

  return (
    <div>
      <DatePicker
        selected={activeDate}
        onChange={(date) => handleClick(date)}
        //   dateFormat={activePage === 'month' ? 'MMMM yyyy' : 'dd MMM yyyy'}
        customInput={<CustomInput />}
        calendarStartDay={1}
        formatWeekDay={(nameOfDay) => nameOfDay.slice(0, 1)}
      />
      <CalendarGlobalStyles />
    </div>
  );
};

export default CustomDatePicker;


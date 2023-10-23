import { forwardRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { GetDatefromURL } from '../../heplers/getDatefromURL';

import { format } from 'date-fns';
import { useLocation, useNavigate } from 'react-router';
import { StyledButton, CalendarGlobalStyles } from './StyledDayPicker';

const CustomDatePicker = ({ activePage, setStaticticDate }) => {
  const activeDate = GetDatefromURL();
  const navigate = useNavigate();
  const location = useLocation();
  const handleClick = (date) => {
    date = format(new Date(date), 'dd-MM-yyyy');

    console.log('location.pathname: ', location.pathname);
    switch (location.pathname) {
      case '/calendar':
        navigate(`/calendar/day/${date}`);
        break;
      case '/statistics':
        setStaticticDate(date);
        break;
      default:
    }
  };

  const CustomInput = forwardRef(function CustomInput({ value, onClick }, ref) {
    console.log('  value: ', value);
    return (
      <StyledButton onClick={onClick} ref={ref}>
        {activePage === 'month'
          ? format(activeDate, 'yyyy-MM')
          : format(activeDate, ' yyyy-MM-dd')}
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

// Безіменна функція
// const CustomInput = forwardRef(({ value, onClick }, ref) => {
//   return (
//     <StyledButton onClick={onClick} ref={ref}>
//       {activePage === 'month'
//         ? format(activeDate, 'MMMM yyyy')
//         : format(activeDate, ' dd MMM yyyy')}
//     </StyledButton>
//   );
// });

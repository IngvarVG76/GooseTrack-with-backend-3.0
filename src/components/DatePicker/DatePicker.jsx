import { forwardRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { GetDatefromURL } from '../../heplers/getDatefromURL';

import { format } from 'date-fns';
import { useNavigate } from 'react-router';
import { StyledInput } from './StyledDayPicker';

const CustomDatePicker = ({ activePage }) => {
  const activeDate = GetDatefromURL();
  const navigate = useNavigate();
  const handleClick = (date) => {
    date = new Date(date);

    navigate(`/calendar/day/${date}`);
  };

  const CustomInput = forwardRef(({ value, onClick }, ref) => {
    return (
      <StyledInput onClick={onClick} ref={ref}>
        {activePage === 'month'
          ? format(activeDate, 'MMMM yyyy')
          : format(activeDate, ' dd MMM yyyy')}
      </StyledInput>
    );
  });

  return (
    <DatePicker
      selected={new Date()}
      onChange={(date) => handleClick(date)}
      //   dateFormat={activePage === 'month' ? 'MMMM yyyy' : 'dd MMM yyyy'}
      customInput={<CustomInput />}
      calendarStartDay={1}
      formatWeekDay={(nameOfDay) => nameOfDay.slice(0, 1)}
    />
  );
};

export default CustomDatePicker;

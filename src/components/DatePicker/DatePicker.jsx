import { forwardRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { GetDatefromURL } from '../../heplers/getDatefromURL';
import { useNavigate } from 'react-router-dom';
import { TitleWrapper } from './StyledDayPicker';
import { format } from 'date-fns';

const CustomDatePicker = () => {
  const activeDate = GetDatefromURL();
  console.log('activeDate: ', activeDate);

  const navigate = useNavigate();
  const handleClick = (date) => {
    date = new Date(date);

    navigate(`/calendar/day/${date}`);
  };

  const CustomInput = forwardRef(({ value, onClick }, ref) => {
    return (
      <TitleWrapper onClick={onClick} ref={ref}>
        {format(activeDate, 'dd MMMM yyyy')}
      </TitleWrapper>
    );
  });

  return (
    <DatePicker
      selected={activeDate}
      onChange={(date) => handleClick(date)}
      dateFormat="dd MM yyyy"
      customInput={<CustomInput />}
    />
  );
};

export default CustomDatePicker;

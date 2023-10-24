import { forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';

import 'react-datepicker/dist/react-datepicker.css';
import {
  DatePickerGlobalStyles,
  StyledButton,
} from './StatisticDatePicker.styled';

const StatisticDatePicker = ({ staticticDate, setStaticticDate }) => {
  const handleClick = (date) => {
    // console.log('date: ', date);
    const formatedDate = format(date, 'yyyy-MM-dd');

    setStaticticDate(formatedDate);
  };

  const CustomInput = forwardRef(function CustomInput({ onClick }, ref) {
    return (
      <StyledButton onClick={onClick} ref={ref}>
        {format(new Date(staticticDate),'d MMM yyyy')}
      </StyledButton>
    );
  });

  return (
    <div>
      <DatePicker
        selected={new Date(staticticDate)}
        onChange={(date) => handleClick(date)}
        //   dateFormat={activePage === 'month' ? 'MMMM yyyy' : 'dd MMM yyyy'}
        customInput={<CustomInput />}
        calendarStartDay={1}
        formatWeekDay={(nameOfDay) => nameOfDay.slice(0, 1)}
      />
      <DatePickerGlobalStyles />
    </div>
  );
};

export default StatisticDatePicker;

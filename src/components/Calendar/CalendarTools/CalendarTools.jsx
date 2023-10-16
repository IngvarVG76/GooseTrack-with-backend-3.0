import CurrentDate from '../CurrentDate/CurrentDate';
import { Button, Wrapper } from './CalendarTools.styled';

const CalendarTools = ({ isMonth, setActiveDate, activeDate, setIsMonth }) => {
  return (
    <Wrapper>
      <CurrentDate
        isMonth={isMonth}
        activeDate={activeDate}
        setActiveDate={setActiveDate}
      />
      <div>
        <Button
          $active="month"
          $primary={isMonth}
          onClick={() => setIsMonth(true)}
        >
          Month
        </Button>
        <Button
          $active="day"
          $primary={!isMonth}
          onClick={() => setIsMonth(false)}
        >
          Day
        </Button>
      </div>
    </Wrapper>
  );
};

export default CalendarTools;

import { addDays, format, isWeekend, startOfWeek } from 'date-fns';

const WeekNames = ({ activeDate }) => {
  //початок тижня цієї дати
  const weekStartDate = startOfWeek(activeDate, { weekStartsOn: 1 });

  const weekNames = [];

  for (let day = 0; day < 7; day++) {
    console.log('day', day);
    console.log('activeDate', activeDate);

    //"E" Day of week (formatting)
    //додай до початкової дати 7 днів і відформатуй і поверни тільки дні тижня

    weekNames.push(
      <div className="weekNames" key={day}>
        {isWeekend(addDays(weekStartDate, day)) ? (
          <p className="weekend">{format(addDays(weekStartDate, day), 'E')}</p>
        ) : (
          <p className="regDay">{format(addDays(weekStartDate, day), 'E')}</p>
        )}gi
      </div>,
    );
  }
  return <div className="weekContainer">{weekNames}</div>;
};

export default WeekNames;

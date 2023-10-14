import { addDays, format, startOfWeek } from 'date-fns';
  

const WeekNames = ({ activeDate, isMonth }) => {
  //початок тижня цієї дати
  const weekStartDate = startOfWeek(activeDate, { weekStartsOn: 1 });

  const weekNames = [];

  for (let day = 0; day < 7; day++) {
    //"E" Day of week (formatting)
    //додай до початкової дати 7 днів і відформатуй і поверни тільки дні тижня
    weekNames.push(
      <div className="weekNames" key={day}>
        {format(addDays(weekStartDate, day), 'E')}
      </div>
    );
  }
  return <div className="weekContainer">{weekNames}</div>;
};

export default WeekNames;

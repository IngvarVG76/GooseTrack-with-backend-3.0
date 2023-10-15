import {
  format,
  eachDayOfInterval,
  startOfWeek,
  endOfWeek,
  isSameDay,
} from 'date-fns';

const WeekCalendar = ({ activeDate }) => {
  console.log('activeDate : ', activeDate);

  const startDate = startOfWeek(activeDate);
  // const startDate = startOfWeek(activeDate, { weekStartsOn: 1 });
  // const startDate = startOfISOWeek(activeDate);

  const endDate = endOfWeek(activeDate);
  console.log(' endDate : ', endDate);
  console.log('startDate : ', startDate);

  const daysOfWeek = eachDayOfInterval({
    start: startDate,
    end: endDate,
  });
  // console.log('daysOfWeek: ', daysOfWeek);

  return (
    <ul className="weekList">
      {daysOfWeek.map((day, index) => {
        const dayOfWeek = format(day, 'EEE');

        return (
          <li className="dayOfWeek" key={index}>
            <span className="weekNames">{dayOfWeek}</span>
            <span
              className={`${isSameDay(day, activeDate) ? 'selectedDay' : ''}`}
            >
              {format(day, 'd')}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default WeekCalendar;

import { useParams } from 'react-router-dom';
import WeekCalendar from '../DayCalendarHead/WeekCalendar';

export const GooseDay = () => {
  const params = useParams();
  const date = new Date(params.currentDate);



  return <WeekCalendar activeDate={date} />;
};

import { useParams } from 'react-router-dom';
import WeekCalendar from '../CalendarHeadDay/WeekCalendar';
import { TasksColumnsList } from '../TasksColumnsList/TasksColumnsList';

export const ChoosedDay = () => {
  const params = useParams();
  const date = new Date(params.currentDate);

  return (
    <>
      <WeekCalendar activeDate={date} />
      <TasksColumnsList />
    </>
  );
};

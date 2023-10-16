import { useParams } from 'react-router-dom';
import WeekCalendar from '../CalendarHeadDay/WeekCalendar';
import { TasksColumn } from '../TasksColumn/TasksColumn ';

export const GooseDay = () => {
  const params = useParams();
  const date = new Date(params.currentDate);

  return (
    <>
      <WeekCalendar activeDate={date} />
      <TasksColumn title={'To do'} />
    </>
  );
};

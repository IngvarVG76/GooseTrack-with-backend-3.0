import {
  useSelector,
} from 'react-redux';
import { format } from 'date-fns';

import WeekCalendar from '../CalendarHeadDay/WeekCalendar';
import { TasksColumnsList } from '../TasksColumnsList/TasksColumnsList';
import { selectTasks } from '../../../redux/tasks/tasksSelectors';
import { GetDatefromURL } from '../../../heplers/getDatefromURL';

export const ChoosedDay = () => {
  const tasks = useSelector(selectTasks);
  const activeDay = format(GetDatefromURL(), 'yyyy-MM-dd');
  console.log('ChoosedDay', activeDay);
  
  return (
    <>
      <WeekCalendar />
      <TasksColumnsList tasks={tasks} date={activeDay} />
    </>
  );
};

// import WeekCalendar from '../CalendarHeadDay/WeekCalendar';
// //
// // import { TasksColumnsList } from '../TasksColumnsList/TasksColumnsList';

// export const ChoosedDay = () => {
//   return (
//     <>
//       <WeekCalendar />
//       <TasksColumnsList />
//     </>
//   );
// };

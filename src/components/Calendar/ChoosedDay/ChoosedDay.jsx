import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';

import WeekCalendar from '../CalendarHeadDay/WeekCalendar';
import { TasksColumnsList } from '../TasksColumnsList/TasksColumnsList';
import { selectTasks } from '../../../redux/tasks/tasksSelectors';
import { GetDatefromURL } from '../../../heplers/getDatefromURL';
import { setActiveDate } from '../../../redux/date/dateSlice';
// import { useState } from 'react';

export const ChoosedDay = () => {
  const tasks = useSelector(selectTasks);
  const dispatch = useDispatch();
  
  const activeDay = format(GetDatefromURL(), 'yyyy-MM-dd');
  console.log('ChoosedDay', activeDay);

 useEffect(() => {
   dispatch(setActiveDate(activeDay));
 }, [activeDay, dispatch]);

  return (
    <>
      <WeekCalendar />
      <TasksColumnsList tasks={tasks} />
    </>
  );
};

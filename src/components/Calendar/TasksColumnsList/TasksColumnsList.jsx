import { useSelector } from 'react-redux';
// import { Notify } from 'notiflix';

import { TasksColumn } from './TasksColumn/TasksColumn';
import { Container } from './TaskColumnList.styled';
import { selectActiveDate } from '../../../redux/date/selectors';

export const TasksColumnsList = ({ tasks }) => {
  const activeDate = useSelector(selectActiveDate);

  const tasksByDay = tasks.filter((task) => task.date === activeDate);
  const tasksToDo = tasksByDay.filter((task) => task.category === 'TODO');
  const tasksInProgress = tasksByDay.filter(
    (task) => task.category === 'INPROGRESS',
  );
  const tasksDone = tasksByDay.filter((task) => task.category === 'DONE');

  // if (tasksByDay.length === 0)
  //   Notify.info('Nothing to do.', {
  //     timeout: 500,
  //   });

  return (
    <Container>
      <TasksColumn title={'TODO'} tasks={tasksToDo} />
      <TasksColumn title={'INPROGRESS'} tasks={tasksInProgress} />
      <TasksColumn title={'DONE'} tasks={tasksDone} />
    </Container>
  );
};

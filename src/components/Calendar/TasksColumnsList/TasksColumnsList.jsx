import { useSelector } from 'react-redux';

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

  return (
    <Container>
      <TasksColumn title={'To do'} tasks={tasksToDo} />
      <TasksColumn title={'In progress'} tasks={tasksInProgress} />
      <TasksColumn title={'Done'} tasks={tasksDone} />
    </Container>
  );
};

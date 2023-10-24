import { TasksColumn } from './TasksColumn/TasksColumn';

import { Container } from './TaskColumnList.styled';
import { Notify } from 'notiflix';

export const TasksColumnsList = ({ tasks, date }) => {
  console.log('TasksColumnsList:', tasks, date);

  const tasksByDay = tasks.filter(task => task.date === date);
  const tasksToDo = tasksByDay.filter((task) => task.category === 'TODO');
  const tasksInProgress = tasksByDay.filter(
    (task) => task.category === 'INPROGRESS',
  );
  const tasksDone = tasksByDay.filter((task) => task.category === 'DONE');

    if (tasksByDay.length === 0)
      Notify.info('There are no tasks for this day.', {
        timeout: 3000,
      });


  return (
    <Container>
      <TasksColumn title={'TODO'} tasks={tasksToDo} />
      <TasksColumn title={'INPROGRESS'} tasks={tasksInProgress} />
      <TasksColumn title={'DONE'} tasks={tasksDone} />
    </Container>
  );
};

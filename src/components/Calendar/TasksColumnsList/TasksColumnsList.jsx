import { TasksColumn } from './TasksColumn/TasksColumn';

import { Container } from './TaskColumnList.styled';

export const TasksColumnsList = ({ tasks, date }) => {
  const tasksByDay = tasks.filter(task => task.date === date);

  const tasksToDo = tasksByDay.filter((task) => task.category === 'TODO');

  const tasksInProgress = tasksByDay.filter(
    (task) => task.category === 'INPROGRESS',
  );

  const tasksDone = tasksByDay.filter((task) => task.category === 'DONE');

  return (
    <Container>
      <TasksColumn title={'TODO'} tasks={tasksToDo} />
      <TasksColumn title={'INPROGRESS'} tasks={tasksInProgress} />
      <TasksColumn title={'DONE'} tasks={tasksDone} />
    </Container>
  );
};

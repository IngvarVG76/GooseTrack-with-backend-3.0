import { TasksColumn } from '../TasksColumn/TasksColumn ';
import { WrapperTasks, Wrapper } from './TasksColumnsList.styled';

export const TasksColumnsList = () => {
  return (
    <Wrapper>
      <WrapperTasks>
        <TasksColumn title={'To do'} />
        <TasksColumn title={'In progress'} />
        <TasksColumn title={'Done'} />
      </WrapperTasks>
    </Wrapper>
  );
};

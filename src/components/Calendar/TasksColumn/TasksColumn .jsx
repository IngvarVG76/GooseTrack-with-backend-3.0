// import { useParams } from 'react-router-dom';
// import { StyledLink } from './StyledPeriodTypeSelect';

import {
  ButtonMUI,
  IconAdd,
  Text,
  Title,
  WrapperTasks,
  Wrapper,
  IconBtn,
  ButtonPlus,
} from './TasksColumn .styled';

export const TasksColumn = ({ title }) => {
  return (
    <WrapperTasks>
      <Wrapper>
        <Title>{title}</Title>
        <ButtonPlus>
          <IconAdd />
        </ButtonPlus>
      </Wrapper>

      <ButtonMUI>
        <IconBtn /> <Text>Add task</Text>
      </ButtonMUI>
    </WrapperTasks>
  );
};

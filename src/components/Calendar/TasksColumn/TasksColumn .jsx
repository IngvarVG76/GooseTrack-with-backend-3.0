import { Modal } from '@mui/material';
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
import { useState } from 'react';

export const TasksColumn = ({ title }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <WrapperTasks id="container">
        <Wrapper>
          <Title>{title}</Title>
          <ButtonPlus>
            <IconAdd />
          </ButtonPlus>
        </Wrapper>

        <ButtonMUI onClick={() => setIsOpenModal(true)}>
          <IconBtn /> <Text>Add task</Text>
        </ButtonMUI>
      </WrapperTasks>
      <Modal open={isOpenModal} onClose={() => setIsOpenModal(false)}>
        <div
          style={{
            width: 350,
            height: 350,
            position: 'absolute',
            background: 'white',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </div>
      </Modal>
    </>
  );
};

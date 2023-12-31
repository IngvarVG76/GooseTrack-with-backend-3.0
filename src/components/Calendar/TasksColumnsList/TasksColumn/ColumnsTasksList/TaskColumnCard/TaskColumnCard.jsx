import {
  ContainerColumnCard,
  TextCard,
  ContainerAvatar,
  ContainerData,
  Priority,
  WrapperData,
  ControlBtn,
} from './TaskColumnCard.styled';

import sprite from '../../../../../../images/icons.svg';
import { AreaEdit } from './TaskColumnCard.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, updateTask } from '../../../../../../redux/tasks/task';
import { useState } from 'react';
import { CategoryModal } from './CategoryModal/CategoryModal';
import {
  ControModalBtn,
  ModalOverlay,
} from './CategoryModal/CategoryModal.styled';
import { selectUser } from '../../../../../../redux/auth/selectors';

export const TaskColumnCard = ({ task, setTaskToEdit, setIsOpen }) => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const [isChangeDirOpened, setIsChangeDirOpened] = useState(false);

  const handleModalToggle = () => {
    setIsChangeDirOpened((prevState) => !prevState);
  };
  const onOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      handleModalToggle();
    }
  };

  const handleDeleteTask = (task) => {
    dispatch(deleteTask(task));
  };

  const categories = ['TODO', 'INPROGRESS', 'DONE'];
  const allowedCategory = categories.filter((item) => item !== task.category);

  return (
    <ContainerColumnCard>
      <TextCard>{task.title}</TextCard>
      <ContainerData>
        <WrapperData>
          <ContainerAvatar src={user.avatarURL} alt="user name" />
          <Priority $priority={task.priority}>{task.priority}</Priority>
        </WrapperData>

        <AreaEdit>
          <li>
            <ControlBtn type="button" onClick={handleModalToggle}>
              <svg width={16} height={16}>
                <use href={sprite + '#icon-arrow-circle-broken-right'}></use>
              </svg>
            </ControlBtn>
            {isChangeDirOpened && (
              <div>
                <ModalOverlay onClick={onOverlayClick} />
                <CategoryModal>
                  {allowedCategory.map((item) => (
                    <li key={item}>
                      <ControModalBtn
                        onClick={() =>
                          dispatch(
                            updateTask({
                              id: task._id,
                              updatedTask: { category: item },
                            }),
                          )
                        }
                      >
                        <span>{item.split('-').join(' ')}</span>
                        <svg width={16} height={16}>
                          <use
                            href={sprite + '#icon-arrow-circle-broken-right'}
                          ></use>
                        </svg>
                      </ControModalBtn>
                    </li>
                  ))}
                </CategoryModal>
              </div>
            )}
          </li>
          <li>
            <ControlBtn
              type="button"
              onClick={() => {
                setIsOpen(true);
                setTaskToEdit(task);
              }}
            >
              <svg width={16} height={16}>
                <use href={sprite + '#icon-pencil-01'}></use>
              </svg>
            </ControlBtn>
          </li>
          <li>
            <ControlBtn
              type="button"
              onClick={() => {
                handleDeleteTask(task._id);
              }}
            >
              <svg width={16} height={16}>
                <use href={sprite + '#icon-trash-04'}></use>
              </svg>
            </ControlBtn>
          </li>
        </AreaEdit>
      </ContainerData>
    </ContainerColumnCard>
  );
};

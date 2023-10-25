import { ModalComponent } from '../../Modal/Modal';
import { TaskForm } from '../TaskForm/TaskForm';

export const TaskModal = ({ category, task, onClose }) => {
  if (category === 'To do') {
    category = 'TODO';
  }
  if (category === 'In progress') {
    category = 'INPROGRESS';
  }
  if (category === 'Done') {
    category = 'DONE';
  }

  return (
    <ModalComponent onClose={onClose}>
      <TaskForm onClose={onClose} category={category} task={task} />
    </ModalComponent>
  );
};

import React from 'react';
import { ModalComponent } from './ChoreTask/ChoreModal';
import { TaskForm } from '../../TaskForm/TaskForm';

export const TaskModal = ({ category, task, onClose }) => {
  return (
    <ModalComponent onClose={onClose}>
      <TaskForm onClose={onClose} category={category} task={task} />
    </ModalComponent>
  );
};
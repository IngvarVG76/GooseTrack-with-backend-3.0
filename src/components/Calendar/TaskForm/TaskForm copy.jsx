import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, ErrorMessage } from 'formik';
import moment from 'moment';
import { selectSelectedDate } from '../../../redux/date/selectors';
import { addTask, updateTask } from '../../../redux/tasks/task';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import icons from '../../../images/icons.svg';
import {
  ActionButton,
  AddIcon,
  Blue,
  BlueLine,
  ButtonContainer,
  CancelButton,
  CloseButton,
  CloseIcon,
  EditIcon,
  FieldContainer,
  FormContainer,
  Label,
  Orange,
  OrangeLine,
  PriorityContainer,
  PriorityField,
  PriorityLabel,
  Red,
  RedLine,
  TimeField,
  TitleField,
} from './TaskForm.styled';
import { selectToken } from '../../../redux/auth/selectors';
// import { icons } from 'react-icons';

const validate = (values) => {
  const errors = {};

  if (!values.title) {
    errors.title = 'Title is required';
  } else if (values.title.length > 250) {
    errors.title = 'Title is too long';
  }

  if (!values.start) {
    errors.start = 'Start time cannot be empty';
  }

  if (!values.end) {
    errors.end = 'End time cannot be empty';
  } else if (
    moment(values.end, 'HH:mm').isSameOrBefore(moment(values.start, 'HH:mm'))
  ) {
    errors.end = 'End time should be greater';
  }

  if (!values.priority) {
    errors.priority = 'Required';
  }

  if (!values.date) {
    errors.date = 'Required';
  }

  if (!values.category) {
    errors.category = 'Required';
  }

  return errors;
};

export const TaskForm = ({ category, task, onClose }) => {
  const [action, setAction] = useState('create');
  const authenticated = useSelector(selectToken);
  const date = useSelector(selectSelectedDate);
  const dispatch = useDispatch();

  const initialValues = {
    title: '',
    start: '09:00',
    end: '17:00',
    priority: 'HIGH',
    date: date,
    category: 'TODO', // You can hardcode 'TODO' for category
  };

  useEffect(() => {
    if (task?._id) setAction('edit');
  }, [task]);

  
  const handleSubmit = (values) => {
    console.log(values);
    const taskData = {
        title: values.title,
        start: values.start,
        end: values.end,
        date: moment(values.date).format('YYYY-MM-DD'), // Format the date
        priority: values.priority,
        category: 'TODO', // You can hardcode 'TODO' for category
    };

    // if (action === 'edit') {
    //   Notify.info('Task has been edited.');
    //   dispatch(updateTask({ id: values._id, updatedTask: taskData }))
    //     .then((data) => {
    //       if (data.error) {
    //         throw new Error(data.payload);
    //       }
    //       onClose();
    //     })
    //     .catch((error) => {
    //       Notify.failure('Something went wrong.', error);
    //     });
    // } else {
    //   Notify.success('Task has been successfully created.');
    dispatch(addTask({ ...taskData, date, category }))
      .then((data) => {
        if (data.error) {
          throw new Error(data.payload);
        }
        onClose();
      })
      .catch((error) => {
        Notify.failure('Something went wrong.', error);
      });
    // }
  };


  return (
    <Formik
      initialValues={task || initialValues}
      validate={validate}
      onSubmit={(values) => {
        handleSubmit(values);
      }}
    >
      {({ values }) => (
        <FormContainer>
          <CloseButton
            type="button"
            aria-label="close button"
            onClick={onClose}
          >
            <CloseIcon>
              <use href={icons + '#icon-x-close'}></use>
            </CloseIcon>
          </CloseButton>
          <Form>
            <Label>
              Title
              <ErrorMessage name="title" component="div" />
              <TitleField type="text" name="title" placeholder="Enter text" />
            </Label>

            <FieldContainer>
              <Label>
                Start
                <ErrorMessage name="start" component="div" />
                <TimeField type="time" name="start" />
              </Label>
              <Label>
                End
                <ErrorMessage name="end" component="div" />
                <TimeField type="time" name="end" />
              </Label>
            </FieldContainer>

            <PriorityContainer role="group">
              <PriorityLabel>
                <PriorityField type="radio" name="priority" value="LOW" />
                {values.priority === 'LOW' ? (
                  <BlueLine>
                    <use href={icons + '#icon-ellipse-blue-stroke'}></use>
                  </BlueLine>
                ) : (
                  <Blue>
                    <use href={icons + '#icon-ellipse-blue'}></use>
                  </Blue>
                )}
                Low
              </PriorityLabel>
              <PriorityLabel>
                <PriorityField type="radio" name="priority" value="MEDIUM" />
                {values.priority === 'MEDIUM' ? (
                  <OrangeLine>
                    <use href={icons + '#icon-ellipse-orange-stroke'}></use>
                  </OrangeLine>
                ) : (
                  <Orange>
                    <use href={icons + '#icon-ellipse-orange'}></use>
                  </Orange>
                )}
                Medium
              </PriorityLabel>
              <PriorityLabel>
                <PriorityField type="radio" name="priority" value="HIGH" />
                {values.priority === 'HIGH' ? (
                  <RedLine>
                    <use href={icons + '#icon-ellipse-pink-stroke'}></use>
                  </RedLine>
                ) : (
                  <Red>
                    <use href={icons + '#icon-ellipse-pink'}></use>
                  </Red>
                )}
                High
              </PriorityLabel>
            </PriorityContainer>

            <ButtonContainer>
              {action === 'edit' ? (
                <ActionButton type="submit">
                  <EditIcon stroke="#fff" fill="none">
                    <use href={icons + '#icon-pencil-01'}></use>
                  </EditIcon>
                  Edit
                </ActionButton>
              ) : (
                <ActionButton type="submit">
                  <AddIcon stroke="#fff">
                    <use href={icons + '#icon-plus'}></use>
                  </AddIcon>
                  Add
                </ActionButton>
              )}

              <CancelButton type="button" onClick={onClose}>
                Cancel
              </CancelButton>
            </ButtonContainer>
          </Form>
        </FormContainer>
      )}
    </Formik>
  );
};

import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { parse, isDate, format } from 'date-fns';
import moment from 'moment';
import icons from '../../../images/icons.svg';
// import { selectSelectedDate } from '../../../redux/date/selectors';
import { addTask, updateTask } from '../../../redux/tasks/task';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

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
import { GetDatefromURL } from '../../../heplers/getDatefromURL';
import { Navigate } from 'react-router';

const schema = Yup.object().shape({
  title: Yup.string().max(250, 'Too Long!').required('Title is required'),
  start: Yup.string().required('Start time cannot be empty'),
  end: Yup.string()
    .required('End time cannot be empty')
    .test('is-greater', 'End time should be greater', function (value) {
      const { start } = this.parent;
      return moment(value, 'HH:mm').isSameOrAfter(moment(start, 'HH:mm'));
    }),
  priority: Yup.string().oneOf(['LOW', 'MEDIUM', 'HIGH']).required('Required'),
  date: Yup.string()
    .matches(/^\d{4}-\d{2}-\d{2}$/, 'Date must be in the format YYYY-MM-DD')
    .required('Date is required'),
  category: Yup.string()
    .oneOf(['TODO', 'INPROGRESS', 'DONE'])
    .required('Required'),
});

export const TaskForm = ({ category, task, onClose }) => {
  const [action, setAction] = useState('create');
  // const date = useSelector(selectSelectedDate);
  const dispatch = useDispatch();
  const activeDay = format(GetDatefromURL(), 'yyyy-MM-dd');

  const initialValues = {
    title: '',
    start: '09:00',
    end: '09:30',
    priority: 'LOW',
    date: activeDay,
    category: category,
  };

  useEffect(() => {
    if (task?._id) setAction('edit');
  }, [task]);


  const handleSubmit = (values) => {
    const payload = {
      id: values._id,
      updatedTask: {
        title: values.title,
        start: values.start,
        end: values.end,
        priority: values.priority,
        date: values.activeDay,
        category: values.category,
      },
    };

    if (action === 'edit') {
      Notify.info('Task has been edited.');
      dispatch(updateTask(payload))
        .then((data) => {
          if (data.error) {
            throw new Error(data.payload);
          }
          onClose();
        })
        .catch((error) => {
          Notify.failure('Something went wrong.');
        });
    } else {
      Notify.success('Task has been successfully created.');
      dispatch(addTask({ ...values, activeDay, category }))
        .then((data) => {
          if (data.error) {
            throw new Error(data.payload);
          }
          onClose();
        })
        .catch((error) => {
          Notify.failure('Something went wrong.');
        });
    }
  };

  return (
    <Formik
      initialValues={task || initialValues}
      validationSchema={schema}
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
// x

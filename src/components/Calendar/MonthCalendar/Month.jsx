import {
  eachDayOfInterval,
  format,
  isSameDay,
  isSameMonth,
  lastDayOfMonth,
  lastDayOfWeek,
  startOfMonth,
  startOfWeek,
} from 'date-fns';

import {
  CalendarContainer,
  Day,
  DayNumberInActive,
  DayNumberRegular,
  DayNumberToday,
  Text,
  TextWrapper,
  Wrapper,

  // DayWeekend,
} from './StyledMonth';

import { GetDatefromURL } from '../../../heplers/getDatefromURL';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTasks } from '../../../redux/tasks/tasksSelectors';
import { TaskModal } from '../TaskModal/TaskModal';
import { useState } from 'react';

const MonthCalendar = () => {
  const tasks = useSelector(selectTasks);
  const [isOpened, setIsOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const handleToggle = () => {
    setIsOpen(!isOpened);
  };
  const activeDate = GetDatefromURL();

  const navigate = useNavigate();
  const nagigatetoGoosedDay = (day) => {
    navigate(`/calendar/day/${format(day, 'yyyy-MM-dd')}`);
  };
  const firstDay = startOfMonth(activeDate);
  const lastDay = lastDayOfMonth(activeDate);
  const startDate = startOfWeek(firstDay, { weekStartsOn: 1 });
  const endDate = lastDayOfWeek(lastDay, { weekStartsOn: 1 });

  const totalDays = eachDayOfInterval({ start: startDate, end: endDate });

  return (
    <CalendarContainer>
      {totalDays.map((oneDayofMonth) => (
        <Day key={oneDayofMonth}>
          {isSameDay(oneDayofMonth, new Date()) ? (
            <DayNumberToday onClick={() => nagigatetoGoosedDay(oneDayofMonth)}>
              {format(oneDayofMonth, 'd')}
            </DayNumberToday>
          ) : !isSameMonth(oneDayofMonth, activeDate) ? (
            <DayNumberInActive
              onClick={() => nagigatetoGoosedDay(oneDayofMonth)}
            >
              {format(oneDayofMonth, 'd')}
            </DayNumberInActive>
          ) : (
            <DayNumberRegular
              onClick={() => nagigatetoGoosedDay(oneDayofMonth)}
            >
              {format(oneDayofMonth, 'd')}
            </DayNumberRegular>
          )}
          <Wrapper>
            {tasks.map(({ date, title, priority, _id }) => {
              if (format(oneDayofMonth, 'y-M-d') === date) {
                return (
                  <TextWrapper
                    type="button"
                    onClick={handleToggle}
                    $priority={priority}
                    key={_id}
                  >
                    <Text $priority={priority}>{title}</Text>
                  </TextWrapper>
                );
              }
            })}
          </Wrapper>
        </Day>
      ))}

      {isOpened && (
        <TaskModal task={taskToEdit} onClose={handleToggle}></TaskModal>
      )}
    </CalendarContainer>
  );
};

export default MonthCalendar;

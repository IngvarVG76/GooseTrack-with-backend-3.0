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
  StyledBoxModalLoader,
  Text,
  TextWrapper,
  Wrapper,
} from './StyledMonth';

import { GetDatefromURL } from '../../../heplers/getDatefromURL';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTasks } from '../../../redux/tasks/tasksSelectors';
import { TaskModal } from '../TaskModal/TaskModal';
import { useCallback, useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';

const MonthCalendar = () => {
  const tasks = useSelector(selectTasks);
  const isLoading = useSelector((state) => state.tasks.isLoading);

  const [isOpened, setIsOpen] = useState(false);
  const [idTask, setIdTask] = useState(null);
  const [choosedTask, setChoosedTask] = useState(null);

  const serchTask = useCallback(() => {
    return tasks?.filter((item) => item._id === idTask && setChoosedTask(item));
  }, [idTask, tasks]);

  useEffect(() => {
    serchTask();
  }, [serchTask]);

  const handleToggle = () => {
    setIsOpen(!isOpened);
    if (isOpened) {
      setIdTask(null);
      setChoosedTask(null);
    }
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
    <>
      <CalendarContainer>
        {totalDays.map((oneDayofMonth) => (
          <Day key={oneDayofMonth}>
            {isSameDay(oneDayofMonth, new Date()) ? (
              <DayNumberToday
                onClick={() => nagigatetoGoosedDay(oneDayofMonth)}
              >
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
                if (format(oneDayofMonth, 'y-MM-dd') === date) {
                  return (
                    <TextWrapper
                      type="button"
                      onClick={() => {
                        handleToggle();
                        setIdTask(_id);
                      }}
                      $priority={priority}
                      key={_id}
                    >
                      {isLoading ? (
                        <StyledBoxModalLoader>
                          <CircularProgress size={14} />
                        </StyledBoxModalLoader>
                      ) : (
                        <Text $priority={priority}>{title}</Text>
                      )}
                    </TextWrapper>
                  );
                }
              })}
            </Wrapper>
          </Day>
        ))}
      </CalendarContainer>

      {isOpened && choosedTask && (
        <TaskModal task={choosedTask} onClose={handleToggle} />
      )}
    </>
  );
};

export default MonthCalendar;

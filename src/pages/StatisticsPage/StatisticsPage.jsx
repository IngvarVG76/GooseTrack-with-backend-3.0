import { format, subDays, addDays, parseISO, isDate } from 'date-fns';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StatisticsChart from '../../components/statisticsChart/StatisticsChart';
import { WrapperPage, LegendWrapp, Legend, Text } from './stylesPage';
import { fetchTasks } from '../../redux/tasks/task';
import { selectTasks } from '../../redux/tasks/tasksSelectors';
import { filterTasksByDay } from './functionsDiagram/filterTasksByDay';
import { filterTasksByMonth } from './functionsDiagram/filterTasksByMonth';
import { filterCategory } from './functionsDiagram/filterCategory';
import StatisticHead from './StatisticHead/StatisticHead';

const StatisticsPage = () => {
  const [staticticDate, setStaticticDate] = useState(new Date(), 'yyyy-MM-dd');

  const [toDoByDay, setToDoByDay] = useState(0);
  const [inProgressByDay, setInProgressByDay] = useState(0);
  const [doneByDay, setDoneByDay] = useState(0);
  const [toDoByMonth, setToDoByMonth] = useState(0);
  const [inProgressByMonth, setInProgressByMonth] = useState(0);
  const [doneByMonth, setDoneByMonth] = useState(0);
  const [isChangeMonth, setChangeMonth] = useState('');

  const dispatch = useDispatch();

  const tasksCurrentMonth = useSelector(selectTasks);

  useEffect(() => {
    const date = new Date();
    const month = format(date, 'MM');
    const year = format(date, 'yyyy');
    const newFormatDate = `${year}-${month}`;
    dispatch(fetchTasks(newFormatDate));
    setChangeMonth(month);
    setStaticticDate(format(staticticDate, 'yyyy-MM-dd'));
  }, []);

  //-------------------------------------------------

  useEffect(() => {
    if (tasksCurrentMonth.length === 0) {
      resetStateMonth();
      return;
    }
    const res = filterTasksByMonth(tasksCurrentMonth);

    setToDoByMonth(res.toDoByMonth);
    setInProgressByMonth(res.inProgressByMonth);
    setDoneByMonth(res.doneByMonth);
  }, [isChangeMonth, tasksCurrentMonth]);

  //----------------------------------------------------

  useEffect(() => {
    const resultDate = isDate(staticticDate);
    const validDate = resultDate
      ? format(staticticDate, 'yyyy-MM-dd')
      : staticticDate;

    const getDate = parseISO(validDate, { additionalDigits: 1 });
    const newMonth = format(getDate, 'MM');
    const newYear = format(getDate, 'yyyy');
    const newFormatDate = `${newYear}-${newMonth}`;
    if (newMonth !== isChangeMonth) {
      setChangeMonth(newMonth);
      dispatch(fetchTasks(newFormatDate));
    }

    const arrayData = filterTasksByDay(tasksCurrentMonth, staticticDate);
    if (arrayData.length === 0) {
      return resetStateDays();
    }
    const resultsValues = filterCategory(arrayData);

    setToDoByDay(resultsValues.toDoByDay);
    setInProgressByDay(resultsValues.inProgressByDay);
    setDoneByDay(resultsValues.doneByDay);
  }, [staticticDate]);

  const resetStateDays = () => {
    setToDoByDay(0);
    setInProgressByDay(0);
    setDoneByDay(0);
  };
  const resetStateMonth = () => {
    setToDoByMonth(0);
    setInProgressByMonth(0);
    setDoneByMonth(0);
  };

  const data = [
    {
      name: 'To Do',
      day: toDoByDay,
      month: toDoByMonth,
    },
    {
      name: 'In Progress',
      day: inProgressByDay,
      month: inProgressByMonth,
    },
    {
      name: 'Done',
      day: doneByDay,
      month: doneByMonth,
    },
  ];

  const changeNextDate = () => {
    setStaticticDate(format(addDays(new Date(staticticDate), 1), 'yyyy-MM-dd'));
  };

  const changePrevDate = () => {
    setStaticticDate(format(subDays(new Date(staticticDate), 1), 'yyyy-MM-dd'));
  };

  return (
    <WrapperPage>
      <StatisticHead
        staticticDate={staticticDate}
        setStaticticDate={setStaticticDate}
        changePrevDate={changePrevDate}
        changeNextDate={changeNextDate}
      />

      <LegendWrapp>
        <Legend>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
          >
            <circle cx="4" cy="4" r="4" fill="#FFD2DD" />
          </svg>
          <Text>By Day</Text>
        </Legend>
        <Legend>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
          >
            <circle cx="4" cy="4" r="4" fill="#3E85F3" />
          </svg>
          <Text>By Month</Text>
        </Legend>
      </LegendWrapp>
      <StatisticsChart data={data} />
    </WrapperPage>
  );
};

export default StatisticsPage;

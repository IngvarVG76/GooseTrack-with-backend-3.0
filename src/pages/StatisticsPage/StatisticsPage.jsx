import { format, subDays, addDays } from 'date-fns';
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
  // console.log('staticticDate: ', staticticDate);

  const [toDoByDay, setToDoByDay] = useState(0);
  const [inProgressByDay, setInProgressByDay] = useState(0);
  const [doneByDay, setDoneByDay] = useState(0);
  const [toDoByMonth, setToDoByMonth] = useState(0);
  const [inProgressByMonth, setInProgressByMonth] = useState(0);
  const [doneByMonth, setDoneByMonth] = useState(0);
  const dispatch = useDispatch();

  const tasksCurrentMonth = useSelector(selectTasks);
  const date = new Date();
  const month = format(date, 'MM');
  const year = format(date, 'yyyy');
  const newFormatDate = `${year}-${month}`;

  useEffect(() => {
    const fullDate = format(new Date(), 'yyyy-MM-dd');
    setStaticticDate(fullDate);
    dispatch(fetchTasks(newFormatDate));
  }, []);

  useEffect(() => {
    if (tasksCurrentMonth.length === 0) return;
    const res = filterTasksByMonth(tasksCurrentMonth);

    setToDoByMonth(res.toDoByMonth);
    setInProgressByMonth(res.inProgressByMonth);
    setDoneByMonth(res.doneByMonth);

    const arrayData = filterTasksByDay(tasksCurrentMonth, staticticDate);
    const resultsValues = filterCategory(arrayData);

    setToDoByDay(resultsValues.toDoByDay);
    setInProgressByDay(resultsValues.inProgressByDay);
    setDoneByDay(resultsValues.doneByDay);
  }, [tasksCurrentMonth]);

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

  console.log('data', data);

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

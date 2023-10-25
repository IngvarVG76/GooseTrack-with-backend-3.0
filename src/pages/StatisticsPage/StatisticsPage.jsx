import { format, subDays, addDays, parseISO, isDate } from 'date-fns';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import StatisticsChart from '../../components/statisticsChart/StatisticsChart';
import StatisticHead from './StatisticHead/StatisticHead';
import TabletChart from '../../components/statisticsChart/TabletChart';
import DesktopChart from '../../components/statisticsChart/DesktopChart';
import { fetchTasks } from '../../redux/tasks/task';
import { selectTasks } from '../../redux/tasks/tasksSelectors';
import { filterTasksByDay } from './functionsDiagram/filterTasksByDay';
import { filterTasksByMonth } from './functionsDiagram/filterTasksByMonth';
import { filterCategory } from './functionsDiagram/filterCategory';
import {
  WrapperPage,
  LegendWrapp,
  Legend,
  Text,
  BarComponents,
} from './stylesPage';

const StatisticsPage = () => {
  const [staticticDate, setStaticticDate] = useState(new Date(), 'yyyy-MM-dd');

  const [toDoByDay, setToDoByDay] = useState(0);
  const [inProgressByDay, setInProgressByDay] = useState(0);
  const [doneByDay, setDoneByDay] = useState(0);
  const [toDoByMonth, setToDoByMonth] = useState(0);
  const [inProgressByMonth, setInProgressByMonth] = useState(0);
  const [doneByMonth, setDoneByMonth] = useState(0);
  const [currentMonth, setChangeMonth] = useState('');

  const dispatch = useDispatch();

  const tasksCurrentMonth = useSelector(selectTasks);

  useEffect(() => {
    const date = new Date();
    const month = format(date, 'MM');
    const year = format(date, 'yyyy');
    const newFormatDate = `${year}-${month}`;
    dispatch(fetchTasks(newFormatDate));
    setChangeMonth(month);
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
  }, [currentMonth, tasksCurrentMonth]);

  //----------------------------------------------------

  useEffect(() => {
    const resultDate = isDate(staticticDate);
    const validDate = resultDate
      ? format(staticticDate, 'yyyy-MM-dd')
      : staticticDate;
    if (currentMonth !== '') {
      const getDate = parseISO(validDate, { additionalDigits: 1 });
      const newMonth = format(getDate, 'MM');
      const newYear = format(getDate, 'yyyy');
      const newFormatDate = `${newYear}-${newMonth}`;
      if (newMonth !== currentMonth) {
        setChangeMonth(newMonth);
        dispatch(fetchTasks(newFormatDate));
      }
    } else {
      return;
    }

    const arrayData = filterTasksByDay(tasksCurrentMonth, validDate);
    if (arrayData.length === 0) {
      return resetStateDays();
    }
    const resultsValues = filterCategory(arrayData);

    setToDoByDay(resultsValues.toDoByDay);
    setInProgressByDay(resultsValues.inProgressByDay);
    setDoneByDay(resultsValues.doneByDay);
  }, [tasksCurrentMonth, staticticDate]);

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
  const isDesktop = useMediaQuery({ minWidth: 1440 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1439 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <WrapperPage>
      <BarComponents>
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
      </BarComponents>

      {isMobile && <StatisticsChart data={data} />}
      {isTablet && <TabletChart data={data} />}
      {isDesktop && <DesktopChart data={data} />}
    </WrapperPage>
  );
};

export default StatisticsPage;

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
} from 'recharts';
import css from './chart.module.css';

// allTasksByDay=todoByDay+inprogressByDay+doneByDay
// todoByDay%=todoByDay/allTasksByDay
// inprogressByDay%=inprogressByDay/allTasksByDay
// doneByDay%=doneByDay/allTasksByDay

const statisticsData = [
  {
    allTasksByDay: 15,
    todoByDay: 7,
    inprogressByDay: 3,
    doneByDay: 5,
  },
];

const data = [
  {
    name: 'To Do',
    day: 50,
    month: 88,
  },
  {
    name: 'In Progress',
    day: 90,
    month: 80,
  },
  {
    name: 'Done',
    day: 75,
    month: 34,
  },
];

const StatisticsChart = () => {
  return (
    <div className={css.chartContainer}>
      <h3 className={css.tasksTitle}>Tasks</h3>

      <BarChart
        className={css.barChart}
        width={355}
        height={360}
        data={data}
        barGap={8}
      >
        <CartesianGrid vertical={false} fill="#fff" stroke="#E3F3FF" />
        <defs>
          <linearGradient
            id="pinkGradientFill"
            x1="0%"
            x2="0%"
            y1="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="rgba(255, 210, 221, 0)" />
            <stop offset="100%" stopColor="rgba(255, 210, 221, 1)" />
          </linearGradient>
          <linearGradient
            id="blueGradientFill"
            x1="0%"
            x2="0%"
            y1="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="rgba(62, 133, 243, 0)" />
            <stop offset="100%" stopColor="rgba(62, 133, 243, 1)" />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="name"
          axisLine={false}
          tick={{ fill: '#343434', fontSize: '14px' }}
          tickSize={20}
          tickLine={false}
        />
        <YAxis
          type="number"
          domain={[0, 100]}
          axisLine={false}
          width={28}
          tickCount={6}
          tickSize={10}
          tickLine={false}
          tick={{ fill: '#343434', fontSize: '14px' }}
        />
        <Tooltip cursor={false} />

        <Bar
          dataKey="day"
          barSize={22}
          fill="url(#pinkGradientFill)"
          radius={6}
        >
          <LabelList
            dataKey="day"
            position="top"
            fill="#343434"
            fontSize={12}
          />
        </Bar>
        <Bar
          dataKey="month"
          barSize={22}
          fill="url(#blueGradientFill)"
          radius={6}
        >
          <LabelList
            dataKey="month"
            position="top"
            fill="#343434"
            fontSize={12}
          />
        </Bar>
      </BarChart>
    </div>
  );
};

export default StatisticsChart;

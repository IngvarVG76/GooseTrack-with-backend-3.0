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
    month: 30,
  },
  {
    name: 'In Progress',
    day: 25,
    month: 10,
  },
  {
    name: 'Done',
    day: 25,
    month: 12,
  },
];

const StatisticsChart = () => {
  return (
    <div className={css.barChart}>
      <h3 style={{ fontWeight: 600, fontSize: '14px', color: '#343434' }}>
        Tasks
      </h3>

      <BarChart width={355} height={360} data={data} barGap={9}>
        <CartesianGrid vertical={false} fill="#fff" stroke="#E3F3FF" />

        <XAxis
          dataKey="name"
          axisLine={false}
          tick={{ fill: '#343434', fontSize: '14px' }}
        />
        <YAxis
          type="number"
          domain={[0, 100]}
          axisLine={false}
          width={27}
          tickCount={6}
          tickSize={0}
          tick={{ fill: '#343434', fontSize: '14px' }}
        />
        <Tooltip cursor={false} />

        <Bar dataKey="day" barSize={22} className={css.barDay}>
          <LabelList
            dataKey="day"
            position="top"
            fill="#343434"
            fontSize={12}
          />
        </Bar>
        <Bar dataKey="month" barSize={22} className={css.barMonth}>
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

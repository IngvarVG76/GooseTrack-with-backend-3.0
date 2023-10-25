import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
} from 'recharts';
import { ChartContainer, Taskstitle } from './chartStyles';
import { useTheme } from 'styled-components';

const StatisticsChart = ({ data }) => {
  const theme = useTheme();
  const formatValue = (value) => {
    return !isNaN(value) && value !== 0 ? `${value}%` : '';
  };

  return (
    <ChartContainer>
      <Taskstitle>Tasks</Taskstitle>
      <BarChart width={780} height={286} data={data} barGap={14}>
        <CartesianGrid
          vertical={false}
          fill={theme.colors.secondaryBackground}
          stroke={theme.colors.borderColor}
        />
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
          tick={{
            fill: theme.colors.textColorTasksChart,
            fontSize: '14px',
            fontFamily: 'Inter',
            fontWeight: 400,
            lineHeight: 1.5,
          }}
          tickSize={19}
          tickLine={false}
        />
        <YAxis
          type="number"
          domain={[0, 100]}
          axisLine={false}
          tickCount={6}
          tickSize={40}
          tickLine={false}
          tick={{
            fill: theme.colors.textColorTasksChart,
            fontSize: '14px',
            fontFamily: 'Inter',
          }}
        />
        <Tooltip cursor={false} />

        <Bar
          dataKey="day"
          barSize={27}
          fill="url(#pinkGradientFill)"
          radius={6}
        >
          <LabelList
            dataKey="day"
            position="top"
            offset={8}
            fill={theme.colors.textColorTasksChart}
            fontSize={16}
            formatter={formatValue}
          />
        </Bar>
        <Bar
          dataKey="month"
          barSize={27}
          fill="url(#blueGradientFill)"
          radius={6}
        >
          <LabelList
            dataKey="month"
            position="top"
            offset={8}
            fill={theme.colors.textColorTasksChart}
            fontSize={16}
            formatter={formatValue}
          />
        </Bar>
      </BarChart>
    </ChartContainer>
  );
};

export default StatisticsChart;

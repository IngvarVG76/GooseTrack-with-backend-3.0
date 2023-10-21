import StatisticsChart from '../../components/statisticsChart/StatisticsChart';
import ChooseDate from '../../components/Calendar/PeriodDateSelect/ChooseDate';
import { WrapperPage, LegendWrapp, Legend, Text } from './stylesPage';

const StatisticsPage = () => {
  return (
    <WrapperPage>
      <ChooseDate />
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

      <StatisticsChart />
    </WrapperPage>
  );
};

export default StatisticsPage;

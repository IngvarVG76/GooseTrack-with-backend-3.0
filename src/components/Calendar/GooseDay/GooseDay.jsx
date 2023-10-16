import { useParams } from 'react-router-dom';

export const GooseDay = () => {
  const params = useParams();
  const date = new Date(params.currentDate);
  console.log('date : ', date );
  // <  WeekCalendar/ >
  return <div>goose Day</div>;
};

import { useParams } from 'react-router-dom';

export const GetDatefromURL = () => {
  const params = useParams();

  const currentDate = new Date(params.currentDate);
  // console.log(' currentDate ', currentDate);
  if (!currentDate || isNaN(currentDate)) {
    return new Date();
  } else {
    return currentDate;
  }
};

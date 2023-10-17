import { useParams } from 'react-router-dom';

export const GetDatefromURL = () => {
    const params = useParams();
    const currentDate = new Date(params.currentDate);
  
    if (Object.prototype.toString.call(currentDate) === "[object Date]") {
      if (isNaN(currentDate )) {
        return new Date();
      } else {
        return currentDate ;
      }
    }
};

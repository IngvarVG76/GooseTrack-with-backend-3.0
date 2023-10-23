import { Suspense, useEffect, useState } from 'react';
import { Container } from './CalendarPage.styled';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import CalendarToolbar from '../../components/Calendar/CalendarToolbar/CalendarToolbar';
import { format } from 'date-fns';
import { fetchTasks } from '../../redux/tasks/task';
import { useDispatch, useSelector } from 'react-redux';
import { GetDatefromURL } from '../../heplers/getDatefromURL';

const CalendarPage = () => {
  const [isActivePage] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname);
  const tasks = useSelector((state) => state);
  console.log(tasks);
  const test = GetDatefromURL();
  console.log(test);
  useEffect(() => {
    const activeDate = format(new Date(), 'MMMM-yyyy');
    if (location.pathname === '/calendar') {
      navigate(`/calendar/month/${activeDate}`);
      return;
    }
  }, [navigate, location.pathname]);

  useEffect(() => {
    const activeMonth = format(new Date(), 'yyyy-MM');
    dispatch(fetchTasks(activeMonth));
  }, [dispatch]);

  return (
    <Container>
      <CalendarToolbar isActivePage={isActivePage} />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default CalendarPage;

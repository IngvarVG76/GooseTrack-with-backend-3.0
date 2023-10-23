import { Suspense, useEffect, useState } from 'react';
import { Container } from './CalendarPage.styled';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import CalendarToolbar from '../../components/Calendar/CalendarToolbar/CalendarToolbar';
import { format } from 'date-fns';
import { fetchTasks } from '../../redux/tasks/task';
import { useDispatch } from 'react-redux';

const CalendarPage = () => {
  const [isActivePage] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

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

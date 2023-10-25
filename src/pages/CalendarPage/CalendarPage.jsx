import { Suspense, useEffect, useState } from 'react';
import { Container } from './CalendarPage.styled';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import CalendarToolbar from '../../components/Calendar/CalendarToolbar/CalendarToolbar';
import { format } from 'date-fns';
import { fetchTasks } from '../../redux/tasks/task';
import { useDispatch } from 'react-redux';
import { GetDatefromURL } from '../../heplers/getDatefromURL';

const CalendarPage = () => {
  const [isActivePage] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const activeMonth = format(GetDatefromURL(), 'yyyy-MM');

  useEffect(() => {
    if (location.pathname === '/calendar') {
      navigate(`/calendar/month/${activeMonth}`);
      return;
    }
  }, [navigate, location.pathname, activeMonth]);
  console.log(activeMonth);
  useEffect(() => {
    dispatch(fetchTasks(activeMonth));
  }, [dispatch, activeMonth]);

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

import { Suspense, useEffect, useState } from 'react';
import { Container } from './CalendarPage.styled';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import CalendarToolbar from '../../components/Calendar/CalendarToolbar/CalendarToolbar';
import { format } from 'date-fns';

const CalendarPage = () => {
  const [isActivePage] = useState(false);
  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    const activeDate = format(new Date(), 'MMMM-yyyy');
    if (location.pathname === '/calendar') {
      navigate(`/calendar/month/${activeDate}`);
      return;
    }
  }, [navigate, location.pathname]);

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

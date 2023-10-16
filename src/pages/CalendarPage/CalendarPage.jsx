import { Suspense, useEffect, useState } from 'react';
import { Container } from './CalendarPage.styled';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import CalendarToolbar from '../../components/Calendar/CalendarToolbar/CalendarToolbar';

const CalendarPage = () => {
  const [activeDate, setActiveDate] = useState(new Date());

  const [isActivePage, setIsActivePage] = useState(false);
  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/calendar') {
      navigate(`/calendar/month/${activeDate}`);
      return;
    }
  }, [activeDate, navigate, location.pathname]);

  const doActiveDate = () => {
    setIsActivePage(false);
  };
  const doActiveMonth = () => {
    setIsActivePage(true);
  };

  return (
    <Container>
      <CalendarToolbar
        activeDate={activeDate}
        setActiveDate={setActiveDate}
        isActivePage={isActivePage}
        doActiveMonth={doActiveMonth}
        doActiveDate={doActiveDate}
      />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default CalendarPage;

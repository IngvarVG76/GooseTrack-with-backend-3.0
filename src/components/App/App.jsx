// Libs
import { Suspense, useCallback, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// Styles
import ChangeThemeButton from '../../styles/Theme/ThemeButton';
import { GlobalStyle } from '../../styles/GlobalStyles';
import { Theme } from '../../styles/Theme/theme.jsx';

// Pages
import MainPage from '../../pages/MainPage/MainPage';
import MainLayout from '../../pages/MainLayout/MainLayout';
import CalendarPage from '../../pages/CalendarPage/CalendarPage';
import StatisticsPage from '../../pages/StatisticsPage/StatisticsPage';
import AccountPage from '../../pages/AccountPage/AccountPage';
import RegisterPage from '../../pages/RegisterPage/RegisterPage';
import LoginPage from '../../pages/LoginPage/LoginPage';

// Components
import { ModalComponent } from '../Modal/Modal';
import { ChoosedDay } from '../Calendar/ChoosedDay/ChoosedDay';
import { ChoosedMonth } from '../Calendar/ChoosedMonth/ChoosedMonth';
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';
import { getCurrentUser } from '../../redux/auth/operations';

const App = () => {
  const dispatch = useDispatch();
  // const isRefreshing = useSelector(selectIsFetchingCurrentUser);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <Theme>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          {/* <PrivateRoute path="/" redirectTo="/login">
            <Route index element={<MainLayout />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/calendar" element={<CalendarPage />}>
              <Route path="month/:currentDate" element={<ChoosedMonth />} />
              <Route path="day/:currentDate" element={<ChoosedDay />} />
            </Route>
            <Route path="/statistics" element={<StatisticsPage />} />
          </PrivateRoute> */}
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Suspense>
      {/* Add your modal window component here */}
    </Theme>
  );
};

export default App;






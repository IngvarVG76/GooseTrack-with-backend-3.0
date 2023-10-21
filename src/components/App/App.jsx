// Libs
import { Suspense, useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// Styles
import { GlobalStyle } from '../../styles/GlobalStyles';
import { Theme } from '../../styles/Theme/theme';

// Components
import { ChoosedDay } from '../Calendar/ChoosedDay/ChoosedDay';
import { ChoosedMonth } from '../Calendar/ChoosedMonth/ChoosedMonth';
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';
import PublicRoute from '../PublicRoute/PublicRoute';
import { getCurrentUser } from '../../redux/auth/operations';
import { selectToken } from '../../redux/auth/selectors';
import { ToastContainer } from 'react-toastify';

// Pages
const MainPage = lazy(() => import('../../pages/MainPage/MainPage'));
const MainLayout = lazy(() => import('../../pages/MainLayout/MainLayout'));
const CalendarPage = lazy(() =>
  import('../../pages/CalendarPage/CalendarPage'),
);
const StatisticsPage = lazy(() =>
  import('../../pages/StatisticsPage/StatisticsPage'),
);
const AccountPage = lazy(() => import('../../pages/AccountPage/AccountPage'));
const RegisterPage = lazy(() =>
  import('../../pages/RegisterPage/RegisterPage'),
);
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
const NotFoundPage = lazy(() =>
  import('../../pages/NotFoundPage/NotFoundPage'),
);

const App = () => {
  const dispatch = useDispatch();
  const authenticated = useSelector(selectToken);

  useEffect(() => {
    if (!authenticated) {
      return;
    }
    dispatch(getCurrentUser());
  }, [dispatch, authenticated]);

  return (
    <Theme>
      <GlobalStyle />
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute restricted redirectTo="/calendar">
                <MainPage />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute restricted redirectTo="/calendar">
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute restricted redirectTo="/calendar">
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route path="/" element={<MainLayout />}>
            <Route
              path="account"
              element={
                <PrivateRoute redirectTo="/login">
                  <AccountPage />
                </PrivateRoute>
              }
            />
            <Route
              path="calendar/"
              element={
                <PrivateRoute redirectTo="/login">
                  <CalendarPage />
                </PrivateRoute>
              }
            >
              <Route
                path="month/:currentDate"
                element={
                  <PrivateRoute redirectTo="/login">
                    <ChoosedMonth />
                  </PrivateRoute>
                }
              />
              <Route
                path="day/:currentDate"
                element={
                  <PrivateRoute redirectTo="/login">
                    <ChoosedDay />
                  </PrivateRoute>
                }
              />
            </Route>
            <Route
              path="statistics"
              element={
                <PrivateRoute redirectTo="/login">
                  <StatisticsPage />
                </PrivateRoute>
              }
            />
          </Route>
          <Route
            path="*"
            element={
              <PublicRoute>
                <NotFoundPage />
              </PublicRoute>
            }
          />
        </Routes>
      </Suspense>
      {/* Add your modal window component here */}
      <ToastContainer />
    </Theme>
  );
};

export default App;

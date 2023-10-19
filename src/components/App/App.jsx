// Libs
import { Suspense, useCallback, useEffect, useState, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

// Styles
import ChangeThemeButton from '../../styles/Theme/ThemeButton';
import { GlobalStyle } from '../../styles/GlobalStyles';
import { Theme } from '../../styles/Theme/theme';

// Components
import { ModalComponent } from '../Modal/Modal';
import { ChoosedDay } from '../Calendar/ChoosedDay/ChoosedDay';
import { ChoosedMonth } from '../Calendar/ChoosedMonth/ChoosedMonth';
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';
import PublicRoute from '../PublicRoute/PublicRoute';
import { getCurrentUser } from '../../redux/auth/operations';
import { selectToken } from '../../redux/auth/selectors';

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

  // const isRefreshing = useSelector(selectIsFetchingCurrentUser);

  useEffect(() => {
    if (!authenticated) return;
    dispatch(getCurrentUser());
  }, [authenticated, dispatch]);

  return (
    <Theme>
      <GlobalStyle />
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute restricted redirectTo="/">
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
        </Routes>
      </Suspense>
      {/* Add your modal window component here */}
    </Theme>
  );
};

export default App;

// const PrivateRoute = ({ path, element, redirectTo = '/' }) => {
//   const authentificated = useSelector(selectIsLoggedIn);
//   console.log('PrivateRoute authentificated:', authentificated);

//   return <Route path={path} element={authentificated ? element : <Navigate to={redirectTo} />} />;
// }; <PrivateRoute path="/account" element={<AccountPage />} redirectTo="/login" />

// Олд апп

// const App = () => {
//   // const [modalOpen, setModalOpen] = useState(false); //necessary for a modal window, you need to add it to the component

//   // const onClickModal = useCallback(() => {
//   //   setModalOpen(!modalOpen);
//   // }, [modalOpen]); //necessary for a modal window, you need to add it to the component

//   return (
//     <Theme>
//       <GlobalStyle />
//       {/* <ChangeThemeButton />
//       <button onClick={onClickModal}>Modal</button>
//       {modalOpen && (
//         <ModalComponent onClose={onClickModal}>
//           <p>Content</p>
//         </ModalComponent>
//       )} */}

//       <Routes>
//         <Route path="/" element={<MainLayout />}>
//           <Route path="/account" element={<AccountPage />} />
//           <Route path="/calendar" element={<CalendarPage />}>
//             <Route path="month/:currentDate" element={<ChoosedMonth />} />
//             <Route path="day/:currentDate" element={<ChoosedDay />} />
//           </Route>
//           <Route path="/statistics" element={<StatisticsPage />} />
//         </Route>
//       </Routes>

//       {/* necessary for a modal window, you need to add it to the component */}
//     </Theme>
//   );
// };

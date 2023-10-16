import ChangeThemeButton from '../../styles/Theme/ThemeButton';
import { GlobalStyle } from '../../styles/GlobalStyles';
import { useCallback, useState } from 'react';
import { ModalComponent } from '../Modal/Modal';

import { Theme } from '../../styles/Theme/theme.jsx';
import { Route, Routes } from 'react-router-dom';
import CalendarPage from '../../pages/CalendarPage/CalendarPage';
import StatisticsPage from '../../pages/StatisticsPage/StatisticsPage';
import { GooseDay } from '../Calendar/GooseDay/GooseDay';
import { GooseMonth } from '../Calendar/GooseMonth/GooseMonth';
import MainPage from '../../pages/MainPage/MainPage';
// import { Suspense, lazy } from 'react';
// import 'react-toastify/dist/ReactToastify.css';
// import { useEffect } from 'react';
// import { ToastContainer } from 'react-toastify';
// import { useDispatch, useSelector } from 'react-redux';
// import { Route, Routes, Navigate } from 'react-router-dom';
// import image from './Bandero-goose/images/shu.jpg';
// import image1 from './Bandero-goose/images/iron-man.webp';
// import {
//   selectIsFetchingCurrentUser,
//   selectIsLoggedIn,
// } from 'redux/auth/selectors';
// import { getCurrentUser } from 'redux/auth/operations';

// import ChangeThemeButton from '../../styles/Theme/ThemeButton';

// import MainLayout from './MainLayout/MainLayout';

// import ImageAnimation from './Bandero-goose/ImageAnimation';
// import { ContainerR, Img, Img1 } from './Bandero-goose/ImageAnimation.styled';

// const MainPage = lazy(() => import('pages/MainPage'));
// const RegisterPage = lazy(() => import('pages/RegisterPage'));
// const LoginPage = lazy(() => import('pages/LoginPage'));
// const AccountPage = lazy(() => import('pages/AccountPage'));
// const CalendarPage = lazy(() => import('pages/CalendarPage'));
// const StatisticsPage = lazy(() => import('pages/StatisticsPage'));
// const NotFoundPage = lazy(() => import('pages/NotFoundPage'));
// const TeamPage = lazy(() => import('pages/TeamPage'));
// const VerifyEmail = lazy(() => import('pages/VerifyPage'));
// const PasswordRecoveryPage = lazy(() => import('pages/PasswordRecoveryPage'));

// export const App = () => {
//   const dispatch = useDispatch();
//   const isRefreshing = useSelector(selectIsFetchingCurrentUser);

//   useEffect(() => {
//     dispatch(getCurrentUser());
//   }, [dispatch]);

//   return isRefreshing ? (
//     <ContainerR>
//       <Img src={image} alt="Зображення" />
//       <Img1 src={image1} alt="Зображення1" />
//       <ImageAnimation />
//     </ContainerR>
//   ) : (
//     <Suspense fallback={<ImageAnimation />}>
//    <Routes>
//         <Route
//           path="/"
//           element={
//             <RestrictedRoute component={<MainPage />} navigateTo="/calendar" />
//           }
//         />

//         <Route
//           path="/team"
//           element={
//             <RestrictedRoute component={<TeamPage />} navigateTo="/calendar" />
//           }
//         />

//         <Route
//           path="/register"
//           element={
//             <RestrictedRoute
//               component={<RegisterPage />}
//               navigateTo="/calendar"
//             />
//           }
//         />

//         <Route
//           path="/login"
//           element={
//             <RestrictedRoute component={<LoginPage />} navigateTo="/calendar" />
//           }
//         />

//         <Route
//           path="/password_recovery"
//           element={
//             <RestrictedRoute
//               component={<PasswordRecoveryPage />}
//               navigateTo="/calendar"
//             />
//           }
//         />

//         <Route path="/" element={<MainLayout />}>
//           <Route
//             path="account"
//             element={
//               <PrivateRoute component={<AccountPage />} navigateTo="/" />
//             }
//           />

//           <Route
//             path="statistics"
//             element={
//               <PrivateRoute component={<StatisticsPage />} navigateTo="/" />
//             }
//           />
//         </Route>

//         <Route path="/verify/:verifyToken" element={<VerifyEmail />} />

//         <Route
//           path="*"
//           element={
//             <RestrictedRoute component={<NotFoundPage />} navigateTo="/" />
//           }
//         />
//       </Routes>
//       <ToastContainer />
//     </Suspense>
//   );
// };

// function RestrictedRoute({ component, navigateTo = '/' }) {
//   const isLogged = useSelector(selectIsLoggedIn);

//   return isLogged ? <Navigate to={navigateTo} /> : component;
// }

// function PrivateRoute({ component, navigateTo = '/' }) {
//   const isLogged = useSelector(selectIsLoggedIn);
//   const isFetching = useSelector(selectIsFetchingCurrentUser);

//   return !isLogged && !isFetching ? <Navigate to={navigateTo} /> : component;
// }

const App = () => {
  const [modalOpen, setModalOpen] = useState(false); //necessary for a modal window, you need to add it to the component

  const onClickModal = useCallback(() => {
    setModalOpen(!modalOpen);
  }, [modalOpen]); //necessary for a modal window, you need to add it to the component

  return (
    <Theme>
      <GlobalStyle />
      <ChangeThemeButton />
      <button onClick={onClickModal}>Modal</button>
      {modalOpen && (
        <ModalComponent onClose={onClickModal}>
          <p>Content</p>
        </ModalComponent>
      )}

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="calendar/" element={<CalendarPage />}>
          <Route path="month/:currentDate" element={<GooseMonth />} />
          <Route path="day/:currentDate" element={<GooseDay />} />
        </Route>
        <Route path="/statistics" element={<StatisticsPage />} />
      </Routes>
   
      {/* necessary for a modal window, you need to add it to the component */}
    </Theme>
  );
};

export default App;

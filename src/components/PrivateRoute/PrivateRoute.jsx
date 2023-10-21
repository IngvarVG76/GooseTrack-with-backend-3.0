import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const PrivateRoute = ({ children, redirectTo = '/' }) => {
  const authenticated = useSelector(selectIsLoggedIn);

  return authenticated ? children : <Navigate to={redirectTo} />;
};

export default PrivateRoute;

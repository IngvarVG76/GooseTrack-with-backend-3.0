import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const PrivateRoute = ({ children, redirectTo = '/' }) => {
  const authentificated = useSelector(selectIsLoggedIn);
  return authentificated ? children : <Navigate to={redirectTo} />;
};

export default PrivateRoute;

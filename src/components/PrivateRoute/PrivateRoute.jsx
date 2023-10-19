import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn, selectToken } from '../../redux/auth/selectors';

const PrivateRoute = ({ children, redirectTo = '/' }) => {
  const authentificated = useSelector(selectToken);
  return authentificated ? children : <Navigate to={redirectTo} />;
};

export default PrivateRoute;

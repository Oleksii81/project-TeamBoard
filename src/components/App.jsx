import { Navigate, Route, Routes } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Suspense, lazy, useEffect } from 'react';
import { PrivateRoute, RestrictedRoute } from './AuthRoutes';
import { refreshUser } from '../redux/auth/authOperations';
import { isLogin, isRefreshing } from '../redux/auth/authSelectors';
import { isLoading } from '../redux/task/taskSelectors';
import Loader from '../components/Loader/Loader';
import ScreensPage from '../../src/components/ScreensPage/ScreensPage';
import Text from './ScreensPage/Text/Text';

const WelcomePage = lazy(() => import('pages/WelcomePage/WelcomePage'));
const AuthPage = lazy(() => import('pages/AuthPage/AuthPage'));
const HomePage = lazy(() => import('pages/HomePage/HomePage'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefresh = useSelector(isRefreshing);
  const isAuth = useSelector(isLogin);
  const spinner = useSelector(isLoading);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefresh || spinner ? (
    <Loader />
  ) : (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route
          path="/"
          element={
            isAuth ? <Navigate to="/home" replace={true} /> : <WelcomePage />
          }
        />
        <Route
          path="/auth/:id"
          element={<RestrictedRoute component={AuthPage} redirectTo="/home" />}
        />
        <Route
          path="/home"
          element={<PrivateRoute component={HomePage} redirectTo="/" />}
        >
          <Route path=":idBoard" element={<ScreensPage />} />
          <Route index element={<Text />} />
        </Route>
        <Route path="*" element={<WelcomePage />} />
      </Routes>
    </Suspense>
  );
};

import { Route, Routes } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import { refreshUser } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { Navigation } from '../components/Navigation/Navigation';
import PrivateRoute from '../components/PrivateRoute';
import { RestrictedRoute } from '../components/RestrictedRoute';
import { Container } from './SharedLayout/SharedLayout.styled';

const HomePage = lazy(() => import('pages/Home'));
const RegisterPage = lazy(() => import('pages/Register'));
const LoginPage = lazy(() => import('pages/Login'));
const ContactsPage = lazy(() => import('pages/Contacts'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Container>
    <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
        </Routes>
      </Suspense>
      </Container>
  );
};
export default App;
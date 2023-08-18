
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAuthentificated,
  selectToken,
} from 'redux/authen/selectors';
import Container from '@mui/material/Container';
import { NavLink, Route, Routes } from 'react-router-dom';
import { Loader } from './Loader/Loader';
import { logoutUserThunk, refreshUserThunk } from 'redux/authen/operations';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import css from '../components/App.module.css'
import { UserMenu } from './UserMenu/UserMenu';

const HomePage = lazy(() => import('pages/HomePage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));

const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const authentificated = useSelector(selectAuthentificated);


  useEffect(() => {
    if (!token || authentificated) return;

    dispatch(refreshUserThunk());
  }, [token, dispatch,authentificated]);

  const handleLogOut = () => {
    dispatch(logoutUserThunk());
  };


  return (
    <div>
     <Container component="main" maxWidth="xs">
      <header>
        <nav className={css.navBar}>
          <NavLink className={css.homeLink} to="/">Home</NavLink>
          {authentificated ? (
            <>
              <NavLink className={css.contactsLink} to="/contacts">Contacts</NavLink>
              <UserMenu/>
            </>
          ) : (
            <>
              <NavLink className={css.loginLink} to="/login">Login</NavLink>
              <NavLink className={css.registerLink} to="/register">Register</NavLink>
            </>
          )}
        </nav>
        <main>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/contacts" element={
                <PrivateRoute redirectTo='/login'>
              <ContactsPage />
              </PrivateRoute>
              } />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </Routes>
          </Suspense>
        </main>
      </header>
      </Container>
    </div>
  );
};
export default App;

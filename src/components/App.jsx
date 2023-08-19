
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAuthentificated,
  selectToken,
} from 'redux/authen/selectors';
import Container from '@mui/material/Container';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Loader } from './Loader/Loader';
import { refreshUserThunk } from 'redux/authen/operations';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Navigation from './Navigation/Navigation';

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
  }, [token, dispatch, authentificated]);



  return (
    <div>
     <Container component="main" maxWidth="xs">
      <Navigation/>
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
              <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
          </Suspense>
        </main>
      </Container>
    </div>
  );
};
export default App;

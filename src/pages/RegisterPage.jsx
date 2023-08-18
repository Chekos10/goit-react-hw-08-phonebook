import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { registerUserThunk } from 'redux/authen/operations';
import { selectAuthentificated } from 'redux/authen/selectors';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const authentificated = useSelector(selectAuthentificated);
  const handleSumbmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.userName.value;
    const email = form.elements.userEmail.value;
    const password = form.elements.userPassword.value;

    dispatch(
      registerUserThunk({
        name,
        email,
        password,
      })
    );
  };

  if (authentificated) return <Navigate to="/contacts" />;

  return (
    <div>
      <Typography component="h1" variant="h5">
        Register your account
      </Typography>
      <form onSubmit={handleSumbmit}>
        <label>
          <TextField
              margin="normal"
              required minLength={3}
              id="name"
              label="Name"
              name="userName"
              fullWidth
              autoFocus
            />
          {/* <input name="userName" type="text" required minLength={3} /> */}
        </label>
        <br />
        <label>
          <TextField
              margin="normal"
              required
              id="email"
              label="Email Address"
              name="userEmail"
              fullWidth
              autoComplete="email"
              autoFocus
            />
        </label>
        <br />
        <label>
          <TextField
              margin="normal"
              required minLength={7}
              fullWidth
              name="userPassword"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
        </label>
        <br />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
};
export default RegisterPage;

import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { loginUserThunk } from 'redux/authen/operations';
import {selectAuthentificated} from 'redux/authen/selectors';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';



const LoginPage = () => {
    const dispatch = useDispatch()
    const authentificated = useSelector(selectAuthentificated)



    const handleSumbmit = (event) =>{
        event.preventDefault();
        const form = event.currentTarget;
        const email = form.elements.userEmail.value;
        const password = form.elements.userPassword.value;

        dispatch(loginUserThunk({
            email,
            password,
        })
        );
    }

    if(authentificated) return <Navigate to="/contacts"/>

return (
    <div>
        <Typography component="h1" variant="h5">
            Sign in
          </Typography>
    <form onSubmit={handleSumbmit}>
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
    <br/>
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
        {/* <input name='userPassword' type="password" required minLength={7}/> */}
    </label>
    <br/>
    <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
    </form>
    </div>
)
}
export default LoginPage;



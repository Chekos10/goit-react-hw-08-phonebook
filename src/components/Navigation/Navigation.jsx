import { UserMenu } from 'components/UserMenu/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectAuthentificated } from 'redux/authen/selectors';
import css from '../Navigation/Navigation.module.css'

const Navigation = () => {
    const authentificated = useSelector(selectAuthentificated)
  return (
    <header>
      <nav className={css.navBar}>
        <NavLink className={css.homeLink} to="/">
          Home
        </NavLink>
        {authentificated ? (
          <>
            <NavLink className={css.contactsLink} to="/contacts">
              Contacts
            </NavLink>
          </>
        ) : (
          <>
            <NavLink className={css.loginLink} to="/login">
              Login
            </NavLink>
            <NavLink className={css.registerLink} to="/register">
              Register
            </NavLink>
          </>
        )}
      </nav>
      {authentificated && <UserMenu/>}
    </header>
  );
};
export default Navigation;

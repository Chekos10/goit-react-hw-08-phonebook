import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUserThunk } from 'redux/authen/operations'
import { selectUserData } from 'redux/authen/selectors'
import css from '../UserMenu/UserMenu.module.css'


export const UserMenu = () => {
    const dispatch = useDispatch()
    const userData = useSelector(selectUserData)
    const handleLogOut = () => {
        dispatch(logoutUserThunk())
    }

return (
    <div className={css.userInfo}>
    <button className={css.logoutBtn}  onClick={handleLogOut}>Log Out</button>
    {userData && <p className={css.emailShow}> {userData.email} </p>}
    </div> 
)
}

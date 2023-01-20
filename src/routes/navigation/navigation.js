import React from 'react';
import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './navigation.styles.css';


export const Navigation = () => {
  return (
    <Fragment>
        <Link className='nav-link' to='/'>Home</Link>
        <Link className='nav-link' to='/counter'>Counter</Link>
        <Link className='nav-link' to='/premier-liga'>Premier liga</Link>
        <Outlet />
    </Fragment>
  )
}

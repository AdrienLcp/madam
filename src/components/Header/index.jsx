import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.scss';

import headerImg from '../../media/logo/logo_sub_black.png';

const Header = () => {

  return (
    <header className='header'>
      <h1 className='header--title'>MaDaM</h1>
      <NavLink
        className='header--container'
        to='/'
      >
        <img
          src={headerImg}
          alt='MaDaM'
          className='header--container--img'
        />
      </NavLink>
    </header>
  );
};

export default Header;
import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.scss';

import footerImg from '../../media/logo/logo_sub_black.png';

const Footer = () => {

  return (
    <footer className='footer'>
      <strong className='footer--title'>MaDaM</strong>
      <NavLink
        className='footer--container'
        to='/'
      >
        <img
          src={footerImg}
          alt='MaDaM inversé'
          className='footer--container--img'
        />
      </NavLink>
    </footer>
  );
};

export default Footer;
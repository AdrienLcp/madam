import React from 'react';

import './styles.scss';

import footerImg from '../../media/logo/logo_sub_black.png';

const Footer = () => {

  return (
    <footer className='footer'>
      <strong className='footer--title'>MaDaM</strong>
      <div className='footer--container'>
        <img
          src={footerImg}
          alt='MaDaM inversé'
          className='footer--container--img'
        />
      </div>
    </footer>
  );
};

export default Footer;
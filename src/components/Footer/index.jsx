import React from 'react';

import './styles.scss';

import footerImg from '../../media/logo/footer.jpg';

const Footer = () => {

  return (
    <footer className='footer'>
      <strong className='footer--title'>MaDaM</strong>
      <img
        src={footerImg}
        alt='MaDaM inversé'
        className='footer--img'
      />
    </footer>
  );
};

export default Footer;
import React from 'react';

import './styles.scss';

import headerImg from '../../media/logo/header.jpg';

const Header = () => {

  return (
    <header className='header'>
      <h1 className='header--title'>MaDaM</h1>
      <img
        src={headerImg}
        alt='MaDaM'
        className='header--img'
      />
    </header>
  );
};

export default Header;
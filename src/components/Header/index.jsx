import React from 'react';

import './styles.scss';

import headerImg from '../../media/logo/logo_sub_black.png';

const Header = () => {

  return (
    <header className='header'>
      <h1 className='header--title'>MaDaM</h1>
      <div className='header--container'>
        <img
          src={headerImg}
          alt='MaDaM'
          className='header--container--img'
        />
      </div>
    </header>
  );
};

export default Header;
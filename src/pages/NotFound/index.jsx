import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.scss';

import home from '../../media/nav/home.svg';

const NotFound = () => {

  return (
    <section className='not-found'>

      <h6 className='not-found--title'>
        404
      </h6>

      <span className='not-found--span'>
        Cette page n'existe pas
      </span>

      <NavLink
        to='/'
        className='not-found--button'
      >
        <div className='not-found--button--icon'>
          <img
            className='not-found--button--icon--img'
            alt="Retourner à l'accueil"
            src={home}
          />
        </div>
        <p className='not-found--button--label'>
          Revenir à l'accueil
        </p>
      </NavLink>
    </section>
  );
};

export default NotFound;
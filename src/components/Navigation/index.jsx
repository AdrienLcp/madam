import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';

import './styles.scss';

import dash from '../../media/nav/dash.svg';
import home from '../../media/nav/home.svg';
import about from '../../media/nav/about.svg';
import offer from '../../media/nav/offer.svg';
import contact from '../../media/nav/contact.svg';

const Navigation = () => {

  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  const toggleMenu = () => {
    menuRef.current.classList.toggle('opened');
    toggleRef.current.classList.toggle('opened');
  };

  const closeMenu = () => {
    menuRef.current.classList.remove('opened');
    toggleRef.current.classList.remove('opened');
  };

  return (
    <nav className='navigation'>

      <button
        className='navigation--toggle'
        ref={toggleRef}
        onClick={() => {
          toggleMenu();
        }}
      > 
        <img
          className='navigation--toggle--line-1'
          alt="Trait pour l'icône du menu"
          src={dash}
        />
        <img
          className='navigation--toggle--line-2'
          alt="Trait pour l'icône du menu"
          src={dash}
        />
        <img
          className='navigation--toggle--line-3'
          alt="Trait pour l'icône du menu"
          src={dash}
        />
      </button>

      <ul className='navigation--buttons' ref={menuRef}>
        <li>
          <NavLink
            className='navigation--buttons--item'
            to='/'
            onClick={() => {
              closeMenu();
            }}
          >
            <p className='navigation--buttons--item--label'>
              Accueil
            </p>
            <img
              className='navigation--buttons--item--icon'
              alt="Retourner à l'accueil"
              src={home}
            />
          </NavLink>
        </li>
        <li>
          <NavLink
            className='navigation--buttons--item'
            to='/a-propos'
            onClick={() => {
              closeMenu();
            }}
          >
            <p className='navigation--buttons--item--label'>
              À propos
            </p>
            <img
              className='navigation--buttons--item--icon'
              alt="À propos de nous"
              src={about}
            />
          </NavLink>
        </li>
        <li>
          <NavLink
            className='navigation--buttons--item'
            to='/contact'
            onClick={() => {
              closeMenu();
            }}
          >
            <p className='navigation--buttons--item--label'>
              Contact
            </p>
            <img
              className='navigation--buttons--item--icon'
              alt="Nous contacter"
              src={contact}
            />
          </NavLink>
        </li>
        <li>
          <NavLink
            className='navigation--buttons--item'
            to='/'
            onClick={() => {
              closeMenu();
            }}
          >
            <p className='navigation--buttons--item--label'>
              Offre
            </p>
            <img
              className='navigation--buttons--item--icon'
              alt="Voir notre offre"
              src={offer}
            />
          </NavLink>
        </li>
      </ul>




    </nav>
  );
};

export default Navigation;
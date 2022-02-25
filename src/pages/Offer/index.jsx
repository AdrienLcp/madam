import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.scss';

const Offer = () => {

  return (
    <section className='offers'>
      <div className='offers--container'>
          <NavLink
            to='/offre/data_science'
            className='offers--container--link link1'
          >
            <h3 className='offers--container--link--title'>
              Data Science
            </h3>

            <ul className='offers--container--link--prestations'>
              <li className='offers--container--link--prestations--label'>
                <p>✔ Exploitation de données massives</p>
              </li>
              <li className='offers--container--link--prestations--label'>
                <p>✔ Modèles prédictifs (machine learning)</p>
              </li>
              <li className='offers--container--link--prestations--label'>
                <p>✔ Développement Python</p>
              </li>
            </ul>
          </NavLink>
          <NavLink
            to='/offre/lean_six_sigma'
            className='offers--container--link link2'
          >
            <h3 className='offers--container--link--title'>
              Lean Six Sigma
            </h3>

            <ul className='offers--container--link--prestations'>
              <li className='offers--container--link--prestations--label'>
                <p>✔ Résolution de problèmes complexes</p>
              </li>
              <li className='offers--container--link--prestations--label'>
                <p>✔ Séquençage DMAIC</p>
              </li>
              <li className='offers--container--link--prestations--label'>
                <p>✔ Industrie ou service</p>
              </li>
            </ul>
          </NavLink>
          <NavLink
            to='/offre/conduite_de_projets'
            className='offers--container--link link3'
          >
            <h3 className='offers--container--link--title'>
              Conduite de projets
            </h3>

            <ul className='offers--container--link--prestations'>
              <li className='offers--container--link--prestations--label'>
                <p>✔ Cadrage initial</p>
              </li>
              <li className='offers--container--link--prestations--label'>
                <p>✔ Pilotage</p>
              </li>
              <li className='offers--container--link--prestations--label'>
                <p>✔ Accompagnement stratégique</p>
              </li>
            </ul>
          </NavLink>
      </div>
    </section>
  );
};

export default Offer;
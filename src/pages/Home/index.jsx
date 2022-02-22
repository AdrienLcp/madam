import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.scss';

import ingenierie from '../../media/home/ingenierie.png';
import nantes from '../../media/home/nantes.png';

const Home = () => {
  return (
    <main className='home'>
      <section className='home--presentation'>
        <p className='home--presentation--label'>Ce que nous faisons ?</p>

        <div className='home--presentation--section'>
          <div className='home--presentation--section--icon'>
            <img
              src={ingenierie}
              alt='Ingénierie'
              className='home--presentation--section--icon--img'
            />
          </div>
          <h2 className='home--presentation--section--title'>INGÉNIERIE DE PROJETS</h2>
        </div>

        <p className='home--presentation--label'>Où ?</p>
        <div className='home--presentation--section'>
          <div className='home--presentation--section--icon'>
            <img
              src={nantes}
              alt='Région nantaise'
              className='home--presentation--section--icon--img'
            />
          </div>
          <h2 className='home--presentation--section--title'>NANTES ET SA RÉGION</h2>
        </div>
      </section>

      <section className='home--presentation'>
        <p className='home--presentation--label'>Dans quels domaines ?</p>

        <div className='home--presentation--list'>
          <NavLink
            to='/offre/data_science'
            className='home--presentation--list--item'
          >

            <h3 className='home--presentation--list--item--title'>
              Data Science
            </h3>

            <ul className='home--presentation--list--item--prestations'>
              <li className='home--presentation--list--item--prestations--label'>
                <p>✔ Exploitation de données massives</p>
              </li>
              <li className='home--presentation--list--item--prestations--label'>
                <p>✔ Modèles prédictifs (machine learning)</p>
              </li>
              <li className='home--presentation--list--item--prestations--label'>
                <p>✔ Développement Python</p>
              </li>
            </ul>
          </NavLink>
          <NavLink
            to='/offre/lean_six_sigma'
            className='home--presentation--list--item'
          >

            <h3 className='home--presentation--list--item--title'>
              Lean Six Sigma
            </h3>

            <ul className='home--presentation--list--item--prestations'>
              <li className='home--presentation--list--item--prestations--label'>
                <p>✔ Résolution de problèmes complexes</p>
              </li>
              <li className='home--presentation--list--item--prestations--label'>
                <p>✔ Séquençage DMAIC</p>
              </li>
              <li className='home--presentation--list--item--prestations--label'>
                <p>✔ Industrie ou service</p>
              </li>
            </ul>

          </NavLink>
          <NavLink
            to='/offre/conduite_de_projets'
            className='home--presentation--list--item'
          >

            <h3 className='home--presentation--list--item--title'>
              Conduite de projets
            </h3>

            <ul className='home--presentation--list--item--prestations'>
              <li className='home--presentation--list--item--prestations--label'>
                <p>✔ Cadrage initial</p>
              </li>
              <li className='home--presentation--list--item--prestations--label'>
                <p>✔ Pilotage</p>
              </li>
              <li className='home--presentation--list--item--prestations--label'>
                <p>✔ Accompagnement stratégique</p>
              </li>
            </ul>
          </NavLink>
        </div>
      </section>
    </main>
  );
};

export default Home;
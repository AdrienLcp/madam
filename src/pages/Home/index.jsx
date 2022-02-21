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

        <ul className='home--presentation--list'>
          <li>
            <NavLink
              to='/offre/data_science'
              className='home--presentation--list--item'
            >
              <h3 className='home--presentation--list--item--title'>
                Data Science
              </h3>


              
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/offre/lean_six_sigma'
              className='home--presentation--list--item'
            >
              <h3 className='home--presentation--list--item--title'>
                Lean Six Sigma
              </h3>



            </NavLink>
          </li>
          <li>
            <NavLink
              to='/offre/conduite_de_projets'
              className='home--presentation--list--item'
            >
              <h3 className='home--presentation--list--item--title'>
                Conduite de projets
              </h3>



            </NavLink>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Home;
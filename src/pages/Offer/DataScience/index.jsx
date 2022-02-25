import React, { useEffect } from 'react';

import './styles.scss';

// à modifier
import img1 from '../../../media/dataScience/img1.jpg';
import img2 from '../../../media/dataScience/img2.jpg';
import img3 from '../../../media/dataScience/img3.jpg';
import dataScience from '../../../media/dataScience/dataScience.png';

const DataScience = () => {

  useEffect(() => {
    document.title = 'Data Science OLD - MaDaM';
  }, []);

  return (
    <div className='offer'>

      <h2 className='offer--title'>
          {/* à modifier */}
        Data Science OLD
        </h2>

      <section className='offer--quote'>
        <q className='offer--quote--content'>
          {/* à modifier */}
          "Vous obtiendrez, avec une simple souris, tout ce que vous voudrez"
        </q>

        <span className='offer--quote--author'>
          {/* à modifier */}
          Les Deschiens
        </span>
      </section>

      <div className='offer--img'>
        <img
          className='offer--img--icon'
          // à modifier
          alt='Graphiques compliqués'
          src={img1}
        />
      </div>

      <section className='offer--container'>
        <h3 className='offer--container--title'>
          Notre Vision
        </h3>

        <p className='offer--container--text'>
          {/* à modifier ? */}
          Big Data, Data Science, Data Analyse… Vous en entendez parler tous les jours ou presque, vous êtes convaincus que c’est une révolution, un simple effet de mode, ou une porte ouverte à de dangereuses dérives dans plusieurs domaines. C’est avant tout le chapitre “données” qui déchaîne, à juste titre, les passions.
        </p>

        <p className='offer--container--text'>
          {/* à modifier ? */}
          Mais si les données exploitées respectent les droits fondamentaux et la vie privée, l’analyse de données massives n’est plus qu’une formidable opportunité pour <strong>TOUTES</strong> les entreprises.
          <br />
          Point de convergence entre les <strong>statistiques</strong>, la <strong>programmation informatique</strong> et <strong>l’intelligence artificielle</strong>, la Data Science offre des possibilités infinies, que ce soit pour automatiser des tâches informatiques dans une PME comme pour construire des modèles prédictifs dans une grande entreprise.
        </p>

        <p className='offer--container--text'>
          {/* à modifier ? */}
          Big Data, Data Science, Data Analyse… Vous en entendez parler tous les jours ou presque, vous êtes convaincus que c’est une révolution, un simple effet de mode, ou une porte ouverte à de dangereuses dérives dans plusieurs domaines. C’est avant tout le chapitre “données” qui déchaîne, à juste titre, les passions.
        </p>

      </section>
      
      <section className='offer--container'>
        <h3 className='offer--container--title'>
          A quoi ça sert ?
        </h3>

        <div className='offer--container--description'>
          <div className='offer--container--description--img'>
            <img
              className='offer--container--description--img--icon'
              alt='Data Science'
              src={dataScience}
            />
          </div>

          <p className='offer--container--description--label'>
            La Data Science vous permet d’utiliser vos données brutes afin d’en extraire les informations ayant une forte <strong>valeur ajoutée</strong> pour votre organisation. Nos compétences en langage Python, Statistiques et Machine Learning couvrent l’ensemble des étapes d’analyse de données massives, du nettoyage de la base jusqu’à la création de modèles prédictifs.
          </p>
        </div>

        <div className='offer--container--box'>
          <h4 className='offer--container--box--title'>
            Avec cette démarche, vous obtiendrez :
          </h4>

          <ul className='offer--container--box--list'>
            <li className='offer--container--box--list--item'>
              • <strong>Une base de données exhaustive et exploitable</strong>, contenant l’ensemble des variables nécessaires au pilotage de votre activité.
            </li>

            <li className='offer--container--box--list--item'>
              • <strong>Des relations statistiques entre ces variables :</strong> corrélations, différences moyenne/médiane entre groupes, dépendances de variables qualitatives. Ces résultats peuvent être interprétés comme des relations de cause à effet, conduisant à prendre des décisions sur les causes afin d’obtenir les effets souhaités.
            </li>

            <li className='offer--container--box--list--item'>
              • <strong>Des modèles prédictifs</strong>, permettant d’anticiper la valeur de vos indicateurs critiques, et d’agir en conséquence.
            </li>

            <li className='offer--container--box--list--item'>
              • La visualisation de ces données et de vos indicateurs, via des librairies dédiées aux tableaux de bord interactifs.
            </li>
          </ul>

          <span className='offer--container--box--span'>
            En écrivant les scripts appropriés, il sera possible de fournir des analyses régulières avec de nouvelles données, sans modifier la structure du programme.
          </span>
        </div>

        <div className='offer--container--box'>
          <h4 className='offer--container--box--title'>
            Problématiques type
          </h4>




        {/* ****************         CODER CE PUTAIN DE CAROUSEL              ************* */}




        </div>
      </section>

      <div className='offer--img'>
        <img
          className='offer--img--icon'
          // à modifier
          alt='Graphiques compliqués'
          src={img2}
        />
      </div>

      {/* ******** CONTENT ************** */}

      <div className='offer--img'>
        <img
          className='offer--img--icon'
          // à modifier
          alt='Graphiques compliqués'
          src={img3}
        />
      </div>
    </div>
  );
};

export default DataScience;
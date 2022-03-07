import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import Slider from '../../../components/Slider';

import './styles.scss';

// Images
import contact from '../../../media/nav/contact.svg';
import leanSixSigma from '../../../media/leanSixSigma/leanSixSigma.png';

import img1 from '../../../media/leanSixSigma/img1.jpg';
import img2 from '../../../media/leanSixSigma/img2.jpg';
import img3 from '../../../media/leanSixSigma/img3.jpg';

import slide1 from '../../../media/leanSixSigma/imgSlide1.jpg';
import slide2 from '../../../media/leanSixSigma/imgSlide2.jpg';
import slide3 from '../../../media/leanSixSigma/imgSlide3.jpg';
import slide4 from '../../../media/leanSixSigma/imgSlide4.jpg';

// steps images
import step1_1 from '../../../media/leanSixSigma/steps/step1_1.png';
import step1_2 from '../../../media/leanSixSigma/steps/step1_2.png';
import step1_3 from '../../../media/leanSixSigma/steps/step1_3.png';
import step1_4 from '../../../media/leanSixSigma/steps/step1_4.png';
import step2_1 from '../../../media/leanSixSigma/steps/step2_1.png';
import step2_2 from '../../../media/leanSixSigma/steps/step2_2.png';
import step2_3 from '../../../media/leanSixSigma/steps/step2_3.png';
import step3_1 from '../../../media/leanSixSigma/steps/step3_1.png';
import step3_2 from '../../../media/leanSixSigma/steps/step3_2.png';
import step3_3 from '../../../media/leanSixSigma/steps/step3_3.png';

const LeanSixSigma = () => {

  useEffect(() => {
    document.title = 'Lean Six Sigma OLD - MaDaM';
  }, []);

  const numberOfSlides = 4;

  return (
    <div className='offer'>

      <h2 className='offer--title'>
        <strong>Lean Six Sigma OLD</strong>
      </h2>

      <section className='offer--local_links'>
        <a
          href='#vision'
          className='offer--local_links--button'
        >
          Notre vision
        </a>
        <a
          href='#use'
          className='offer--local_links--button'
        >
          À quoi ça sert ?
        </a>
        <a
          href='#methodo'
          className='offer--local_links--button'
        >
          Notre méthodologie
        </a>
        <a
          href='#references'
          className='offer--local_links--button'
        >
          Nos références
        </a>
      </section>

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

      <section className='offer--container' id='vision'>
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
      
      <section className='offer--container' id='use'>
        <h3 className='offer--container--title'>
          A quoi ça sert ?
        </h3>

        <div className='offer--container--description'>
          <div className='offer--container--description--img'>
            <img
              className='offer--container--description--img--icon'
              alt='Data Science'
              src={leanSixSigma}
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
          
          <Slider
            slide1={slide1}
            slide2={slide2}
            slide3={slide3}
            slide4={slide4}
            numberOfSlides={numberOfSlides}
          />

        </div>
      </section>
      
      <section className='offer--container' id='methodo'>
        <h3 className='offer--container--title'>
          Notre méthodologie
        </h3>

        <ul className='offer--container--steps'>
          <li className='offer--container--steps--step'>
            <h4 className='offer--container--steps--step--title'>
              Étape 1 : Nettoyage des données
            </h4>

            <span className='offer--container--steps--step--span'>
              Cette première étape indispensable consiste à créer une base de données “propre” pérenne
            </span>

            <div className='offer--container--steps--step--box'>
              <div className='offer--container--steps--step--box--img'>
                <img
                  className='offer--container--steps--step--box--img--icon'
                  alt='Graphique'
                  src={step1_1}
                />
              </div>
              <p className='offer--container--steps--step--box--text'>
                Concaténation de bases de données séparées
              </p>
            </div>
            <em className='offer--container--steps--step--example'>
              Ex : concaténation d’une base de données « clients » avec une base de données « commandes »
            </em>

            <div className='offer--container--steps--step--box'>
              <div className='offer--container--steps--step--box--img'>
                <img
                  className='offer--container--steps--step--box--img--icon'
                  alt='Graphique'
                  src={step1_2}
                />
              </div>
              <p className='offer--container--steps--step--box--text'>
                Suppression des valeurs aberrantes
              </p>
            </div>
            <em className='offer--container--steps--step--example'>
              Ex : retrait de valeurs « texte » dans une colonne numérique
            </em>

            <div className='offer--container--steps--step--box'>
              <div className='offer--container--steps--step--box--img'>
                <img
                  className='offer--container--steps--step--box--img--icon'
                  alt='Graphique'
                  src={step1_3}
                />
              </div>
              <p className='offer--container--steps--step--box--text'>
                Remplissage des données manquantes par algorithmes
              </p>
            </div>
            <em className='offer--container--steps--step--example'>
              Ex : kNN
            </em>

            <div className='offer--container--steps--step--box'>
              <div className='offer--container--steps--step--box--img'>
                <img
                  className='offer--container--steps--step--box--img--icon'
                  alt='Graphique'
                  src={step1_4}
                />
              </div>
              <p className='offer--container--steps--step--box--text'>
                Formatage des données
              </p>
            </div>
            <em className='offer--container--steps--step--example'>
              Ex : suppression de caractères inutiles, nombre de décimales
            </em>
          </li>

          <li className='offer--container--steps--step'>
            <h4 className='offer--container--steps--step--title'>
              Étape 2 : Analyse exploratoire
            </h4>

            <span className='offer--container--steps--step--span'>
              Nous allons maintenant pouvoir comprendre le contenu de notre base de données “nettoyée” avec des outils statistiques.
            </span>

            <div className='offer--container--steps--step--box'>
              <div className='offer--container--steps--step--box--img'>
                <img
                  className='offer--container--steps--step--box--img--icon'
                  alt='Graphique'
                  src={step2_1}
                />
              </div>
              <p className='offer--container--steps--step--box--text'>
                Observation de la distribution des variables quantitatives, mise en évidence d’outliers
              </p>
            </div>
            <em className='offer--container--steps--step--example'>
              Ex : histogramme, boîte à moustache
            </em>

            <div className='offer--container--steps--step--box'>
              <div className='offer--container--steps--step--box--img'>
                <img
                  className='offer--container--steps--step--box--img--icon'
                  alt='Graphique'
                  src={step2_2}
                />
              </div>
              <p className='offer--container--steps--step--box--text'>
                Observation de la distribution des variables qualitatives
              </p>
            </div>
            <em className='offer--container--steps--step--example'>
              Ex : diagramme des effectifs
            </em>

            <div className='offer--container--steps--step--box'>
              <div className='offer--container--steps--step--box--img'>
                <img
                  className='offer--container--steps--step--box--img--icon'
                  alt='Graphique'
                  src={step2_3}
                />
              </div>
              <p className='offer--container--steps--step--box--text'>
                Analyses bivariées : existe-t-il des relations entre les paramètres ?
              </p>
            </div>
            <em className='offer--container--steps--step--example'>
              Ex : carte des corrélations, Test du CHi², t-test de student, ANOVA
            </em>

            <span className='offer--container--steps--step--span'>
              → Au terme de cette étape, nous avons déjà extrait une partie de la valeur de vos données : ces constats statistiques conduisent souvent à des liens de causes à effet permettant d’agir ! De plus, la qualité des données permet alors de générer la visualisation interactive des indicateurs désirés (via des librairies comme Dash ou Streamlit).
            </span>
          </li>

          <li className='offer--container--steps--step'>
            <h4 className='offer--container--steps--step--title'>
              Étape 3 : Feature engineering
            </h4>

            <span className='offer--container--steps--step--span'>
              En vue de créer une modélisation des données par Machine Learning, nous devons maintenant manipuler les données pour qu’elles conviennent aux différents algorithmes exploitables. On peut considérer qu’il s’agit d’une nouvelle étape de nettoyage des données, mais qui nécessite une bonne connaissance des algorithmes de Machine Learning.
            </span>

            <div className='offer--container--steps--step--box'>
              <div className='offer--container--steps--step--box--img'>
                <img
                  className='offer--container--steps--step--box--img--icon'
                  alt='Graphique'
                  src={step3_1}
                />
              </div>
              <p className='offer--container--steps--step--box--text'>
                Encodage des variables qualitatives
              </p>
            </div>
            <em className='offer--container--steps--step--example'>
              Ex : Label Encoder, One-hot
            </em>

            <div className='offer--container--steps--step--box'>
              <div className='offer--container--steps--step--box--img'>
                <img
                  className='offer--container--steps--step--box--img--icon'
                  alt='Graphique'
                  src={step3_2}
                />
              </div>
              <p className='offer--container--steps--step--box--text'>
                Transformation des variables quantitatives pour obtenir un distribution normale
              </p>
            </div>
            <em className='offer--container--steps--step--example'>
              Ex : transformation logarithmique
            </em>

            <div className='offer--container--steps--step--box'>
              <div className='offer--container--steps--step--box--img'>
                <img
                  className='offer--container--steps--step--box--img--icon'
                  alt='Graphique'
                  src={step3_3}
                />
              </div>
              <p className='offer--container--steps--step--box--text'>
                Ajout de colonnes d’interactions entre les variables
              </p>
            </div>
            <em className='offer--container--steps--step--example'>
              Ex : variables polynomiales
            </em>
          </li>

          <li className='offer--container--steps--step'>
            <h4 className='offer--container--steps--step--title'>
              Étape 4 : Machine Learning
            </h4>

            <span className='offer--container--steps--step--span'>
              Vos données sont maintenant prêtes pour des algorithmes de Machine Learning. Il en existe 2 types :
            </span>

            <p className='offer--container--steps--step--text'>
              • <strong>Supervisé</strong> : on cherche à prédire une variable de sortie à partir des données du passé. Cela nécessite de faire une séparation “entraînement” et “test” de nos données. L’évaluation de la robustesse du modèle se fait avec des grandeurs comme l’<strong>Accuracy</strong> ou la <strong>RMSE</strong>.
            </p>

            <em className='offer--container--steps--step--example'>
              Exemples d’applications : nombre de produits vendus dans les 6 prochains mois, l’image est un chat / n’est pas un chat.
            </em>

            <div className='offer--container--steps--step--algo'>
              <span className='offer--container--steps--step--algo--span'>
                Exemples d'algorithmes :
              </span>

              <ul className='offer--container--steps--step--algo--list'>
                <li className='offer--container--steps--step--algo--list--item'>
                  - Régression linéaire
                </li>
                <li className='offer--container--steps--step--algo--list--item'>
                  - kNN
                </li>
                <li className='offer--container--steps--step--algo--list--item'>
                  - Réseau de neurones
                </li>
                <li className='offer--container--steps--step--algo--list--item'>
                  - Forêt aléatoire
                </li>
                <li className='offer--container--steps--step--algo--list--item'>
                  - Gradient Boosting
                </li>
              </ul>
            </div>

            <p className='offer--container--steps--step--text'>
              • <strong>Non supervisé</strong> : l’algorithme va créer des groupes les plus distincts possibles entre eux en fonction des paramètres de chaque individu. On appelle cela le “clustering”. L’évaluation de la robustesse du modèle se fait avec des grandeurs comme le <strong>coefficient de silhouette</strong> ou l'<strong>ARI</strong>.
            </p>

            <em className='offer--container--steps--step--example'>
              Exemple d’application : segmentation de clients pour la recommandation de produits.
            </em>

            <div className='offer--container--steps--step--algo'>
              <span className='offer--container--steps--step--algo--span'>
                Exemples d'algorithmes :
              </span>

              <ul className='offer--container--steps--step--algo--list'>
                <li className='offer--container--steps--step--algo--list--item'>
                  - K-MEANS
                </li>
                <li className='offer--container--steps--step--algo--list--item'>
                  - Clustering agglomératif
                </li>
                <li className='offer--container--steps--step--algo--list--item'>
                  - DBSCAN
                </li>
              </ul>
            </div>
          </li>

          <li className='offer--container--steps--step'>
            <h4 className='offer--container--steps--step--title'>
              Et les statistiques ?
            </h4>

            <p className='offer--container--steps--step--text'>
              Notre valeur ajoutée ? Nous utilisons les statistiques. Nous maîtrisons les conditions nécessaires à une étude statistique solide. Nous avons les compétences pour vous indiquer si oui ou non une différence de moyenne entre 2 groupes de mesures est statistiquement significative ou non.
            </p>
            <p className='offer--container--steps--step--text'>
              Outils types : t-test, test de mann-Whitney, ANOVA, test de Kruskal Wallis, test du Chi²
            </p>
          </li>
        </ul>
      </section>

      <div className='offer--img'>
        <img
          className='offer--img--icon'
          // à modifier
          alt='Graphiques compliqués'
          src={img2}
        />
      </div>

      <section className='offer--container' id='references'>
        <h3 className='offer--container--title'>
          Nos références
        </h3>

        <table className='offer--container--table'>
          <thead className='offer--container--table--header'>
            <tr className='offer--container--table--header--row'>
              <th className='offer--container--table--header--row--content'>
                Projet
              </th>
              <th className='offer--container--table--header--row--content'>
                Secteur
              </th>
              <th className='offer--container--table--header--row--content'>
                Notation client
              </th>
            </tr>
          </thead>

          <tbody className='offer--container--table--body'>
            <tr className='offer--container--table--body--row'>
              <td className='offer--container--table--body--row--content'>
                Anticipation de la consommation énergétique d’une ville à l’aide de relevés antérieurs
              </td>
              <td className='offer--container--table--body--row--content'>
                Énergie
              </td>
              <td className='offer--container--table--body--row--content'>
                Interne
              </td>
            </tr>
            <tr className='offer--container--table--body--row'>
              <td className='offer--container--table--body--row--content'>
                POC d’une idée d’application sur une base de données alimentaire
              </td>
              <td className='offer--container--table--body--row--content'>
                Santé
              </td>
              <td className='offer--container--table--body--row--content'>
                Interne
              </td>
            </tr>
            <tr className='offer--container--table--body--row'>
              <td className='offer--container--table--body--row--content'>
                Classification automatique des produits par analyse d’image
              </td>
              <td className='offer--container--table--body--row--content'>
                Commerce
              </td>
              <td className='offer--container--table--body--row--content'>
                Interne
              </td>
            </tr>
            <tr className='offer--container--table--body--row'>
              <td className='offer--container--table--body--row--content'>
                Création d’un tableau de bord interactif sur navigateur
              </td>
              <td className='offer--container--table--body--row--content'>
                Commerce
              </td>
              <td className='offer--container--table--body--row--content'>
                Interne
              </td>
            </tr>
            <tr className='offer--container--table--body--row'>
              <td className='offer--container--table--body--row--content'>
                Clustering des clients
              </td>
              <td className='offer--container--table--body--row--content'>
                Commerce
              </td>
              <td className='offer--container--table--body--row--content'>
                Interne
              </td>
            </tr>
            <tr className='offer--container--table--body--row'>
              <td className='offer--container--table--body--row--content'>
                Création d’un environnement Big Data dans le cloud
              </td>
              <td className='offer--container--table--body--row--content'>
                Commerce
              </td>
              <td className='offer--container--table--body--row--content'>
                Interne
              </td>
            </tr>
            <tr className='offer--container--table--body--row'>
              <td className='offer--container--table--body--row--content'>
                Détermination des pays à plus fort potentiel pour des solutions d’e-learning
              </td>
              <td className='offer--container--table--body--row--content'>
                Éducation & formation
              </td>
              <td className='offer--container--table--body--row--content'>
                Interne
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <div className='offer--img'>
        <img
          className='offer--img--icon'
          // à modifier
          alt='Graphiques compliqués'
          src={img3}
        />
      </div>
      <div className='offer--link'>
        <p className='offer--link--text'>
          Besoin d'informations ? Contactez nous
        </p>
        <NavLink
          className='offer--link--img'
          to='/contact'
        >
          <img
            className='offer--link--icon--icon'
            alt='Aller à la page de contact'
            src={contact}
          />
        </NavLink>
      </div>
    </div>
  );
};

export default LeanSixSigma;
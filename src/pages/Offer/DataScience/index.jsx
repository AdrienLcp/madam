import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import Slider from '../../../components/Slider';

import './styles.scss';

// Images
import contact from '../../../media/nav/contact.svg';
import dataScience from '../../../media/dataScience/dataScience.png';

import img1 from '../../../media/dataScience/img1.jpg';
import img2 from '../../../media/dataScience/img2.jpg';
import img3 from '../../../media/dataScience/img3.jpg';

import slide1 from '../../../media/dataScience/imgSlide1.jpg';
import slide2 from '../../../media/dataScience/imgSlide2.jpg';
import slide3 from '../../../media/dataScience/imgSlide3.jpg';
import slide4 from '../../../media/dataScience/imgSlide4.jpg';

// Tools images
import python from '../../../media/dataScience/tools/python.svg';
import numpy from '../../../media/dataScience/tools/numpy.svg';
import matplotlib from '../../../media/dataScience/tools/matplotlib.svg';
import jupyter from '../../../media/dataScience/tools/jupyter.svg';
import keras from '../../../media/dataScience/tools/keras.svg';
import openCV from '../../../media/dataScience/tools/openCV.svg';
import pandas from '../../../media/dataScience/tools/pandas.svg';
import scikit from '../../../media/dataScience/tools/scikit.svg';
import streamlit from '../../../media/dataScience/tools/streamlit.svg';
import tensorflow from '../../../media/dataScience/tools/tensorflow.svg';
import nltk from '../../../media/dataScience/tools/nltk.svg';

// Steps images
import step1_1 from '../../../media/dataScience/steps/step1_1.png';
import step1_2 from '../../../media/dataScience/steps/step1_2.png';
import step1_3 from '../../../media/dataScience/steps/step1_3.png';
import step1_4 from '../../../media/dataScience/steps/step1_4.png';
import step2_1 from '../../../media/dataScience/steps/step2_1.png';
import step2_2 from '../../../media/dataScience/steps/step2_2.png';
import step2_3 from '../../../media/dataScience/steps/step2_3.png';
import step3_1 from '../../../media/dataScience/steps/step3_1.png';
import step3_2 from '../../../media/dataScience/steps/step3_2.png';
import step3_3 from '../../../media/dataScience/steps/step3_3.png';
import step3_4 from '../../../media/dataScience/steps/step3_4.png';
import step3_5 from '../../../media/dataScience/steps/step3_5.png';

const DataScience = () => {

  useEffect(() => {
    document.title = 'Data Science OLD - MaDaM';
  }, []);

  const numberOfSlides = 4;

  return (
    <div className='offer'>

      <h2 className='offer--title'>
        <strong>Data Science OLD</strong>
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
          ?? quoi ??a sert ?
        </a>
        <a
          href='#methodo'
          className='offer--local_links--button'
        >
          Notre m??thodologie
        </a>
        <a
          href='#references'
          className='offer--local_links--button'
        >
          Nos r??f??rences
        </a>
      </section>

      <section className='offer--quote'>
        <q className='offer--quote--content'>
          "Vous obtiendrez, avec une simple souris, tout ce que vous voudrez"
        </q>

        <span className='offer--quote--author'>
          Les Deschiens
        </span>
      </section>

      <div className='offer--img'>
        <img
          className='offer--img--icon'
          alt='Data Science'
          src={img1}
        />
      </div>

      <section className='offer--container' id='vision'>
        <h3 className='offer--container--title'>
          Notre Vision
        </h3>

        <p className='offer--container--text'>
          {/* ?? modifier ? */}
          Big Data, Data Science, Data Analyse??? Vous en entendez parler tous les jours ou presque, vous ??tes convaincus que c???est une r??volution, un simple effet de mode, ou une porte ouverte ?? de dangereuses d??rives dans plusieurs domaines. C???est avant tout le chapitre ???donn??es??? qui d??cha??ne, ?? juste titre, les passions.
        </p>

        <p className='offer--container--text'>
          {/* ?? modifier ? */}
          Mais si les donn??es exploit??es respectent les droits fondamentaux et la vie priv??e, l???analyse de donn??es massives n???est plus qu???une formidable opportunit?? pour <strong>TOUTES</strong> les entreprises.
          <br />
          Point de convergence entre les <strong>statistiques</strong>, la <strong>programmation informatique</strong> et <strong>l???intelligence artificielle</strong>, la Data Science offre des possibilit??s infinies, que ce soit pour automatiser des t??ches informatiques dans une PME comme pour construire des mod??les pr??dictifs dans une grande entreprise.
        </p>

        <p className='offer--container--text'>
          {/* ?? modifier ? */}
          Big Data, Data Science, Data Analyse??? Vous en entendez parler tous les jours ou presque, vous ??tes convaincus que c???est une r??volution, un simple effet de mode, ou une porte ouverte ?? de dangereuses d??rives dans plusieurs domaines. C???est avant tout le chapitre ???donn??es??? qui d??cha??ne, ?? juste titre, les passions.
        </p>

      </section>

<hr className='hr'/>
      
      <section className='offer--container' id='use'>
        <h3 className='offer--container--title'>
          A quoi ??a sert ?
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
            La Data Science vous permet d???utiliser vos donn??es brutes afin d???en extraire les informations ayant une forte <strong>valeur ajout??e</strong> pour votre organisation. Nos comp??tences en langage Python, Statistiques et Machine Learning couvrent l???ensemble des ??tapes d???analyse de donn??es massives, du nettoyage de la base jusqu????? la cr??ation de mod??les pr??dictifs.
          </p>
        </div>

        <div className='offer--container--box'>
          <h4 className='offer--container--box--title'>
            Avec cette d??marche, vous obtiendrez :
          </h4>

          <ul className='offer--container--box--list'>
            <li className='offer--container--box--list--item'>
              ??? <strong>Une base de donn??es exhaustive et exploitable</strong>, contenant l???ensemble des variables n??cessaires au pilotage de votre activit??.
            </li>

            <li className='offer--container--box--list--item'>
              ??? <strong>Des relations statistiques entre ces variables :</strong> corr??lations, diff??rences moyenne/m??diane entre groupes, d??pendances de variables qualitatives. Ces r??sultats peuvent ??tre interpr??t??s comme des relations de cause ?? effet, conduisant ?? prendre des d??cisions sur les causes afin d???obtenir les effets souhait??s.
            </li>

            <li className='offer--container--box--list--item'>
              ??? <strong>Des mod??les pr??dictifs</strong>, permettant d???anticiper la valeur de vos indicateurs critiques, et d???agir en cons??quence.
            </li>

            <li className='offer--container--box--list--item'>
              ??? La visualisation de ces donn??es et de vos indicateurs, via des librairies d??di??es aux tableaux de bord interactifs.
            </li>
          </ul>

          <span className='offer--container--box--span'>
            En ??crivant les scripts appropri??s, il sera possible de fournir des analyses r??guli??res avec de nouvelles donn??es, sans modifier la structure du programme.
          </span>
        </div>

        <div className='offer--container--box'>
          <h4 className='offer--container--box--title'>
            Probl??matiques type
          </h4>
          
          <Slider
            slide1={slide1}
            slide2={slide2}
            slide3={slide3}
            slide4={slide4}
            numberOfSlides={numberOfSlides}
          />

        </div>

        <div className='offer--container--tools'>
          <h4 className='offer--container--tools--title'>
            Outils type
          </h4>

          <ul className='offer--container--tools--list'>
            <li className='offer--container--tools--list--item'>
              <div className='offer--container--tools--list--item--img'>
                <img
                  className='offer--container--tools--list--item--img--icon'
                  alt='Python'
                  src={python}
                />
              </div>

              <p className='offer--container--tools--list--item--label'>
                <strong>Python</strong>
              </p>
            </li>
            <li className='offer--container--tools--list--item'>
              <div className='offer--container--tools--list--item--img'>
                <img
                  className='offer--container--tools--list--item--img--icon'
                  alt='Numpy'
                  src={numpy}
                />
              </div>

              <p className='offer--container--tools--list--item--label'>
                <strong>Numpy</strong>
              </p>
            </li>
            <li className='offer--container--tools--list--item'>
              <div className='offer--container--tools--list--item--img'>
                <img
                  className='offer--container--tools--list--item--img--icon'
                  alt='Matplotlib / Seaborn'
                  src={matplotlib}
                />
              </div>

              <p className='offer--container--tools--list--item--label'>
                <strong>Matplotlib / Seaborn</strong>
              </p>
            </li>
            <li className='offer--container--tools--list--item'>
              <div className='offer--container--tools--list--item--img'>
                <img
                  className='offer--container--tools--list--item--img--icon'
                  alt='Tensorflow'
                  src={tensorflow}
                />
              </div>

              <p className='offer--container--tools--list--item--label'>
                <strong>Tensorflow</strong>
              </p>
            </li>
            <li className='offer--container--tools--list--item'>
              <div className='offer--container--tools--list--item--img'>
                <img
                  className='offer--container--tools--list--item--img--icon'
                  alt='OpenCV'
                  src={openCV}
                />
              </div>

              <p className='offer--container--tools--list--item--label'>
                <strong>OpenCV</strong>
              </p>
            </li>
            <li className='offer--container--tools--list--item'>
              <div className='offer--container--tools--list--item--img'>
                <img
                  className='offer--container--tools--list--item--img--icon'
                  alt='Streamlit'
                  src={streamlit}
                />
              </div>

              <p className='offer--container--tools--list--item--label'>
                <strong>Streamlit</strong>
              </p>
            </li>
            <li className='offer--container--tools--list--item'>
              <div className='offer--container--tools--list--item--img'>
                <img
                  className='offer--container--tools--list--item--img--icon'
                  alt='Jupyter Notebook'
                  src={jupyter}
                />
              </div>

              <p className='offer--container--tools--list--item--label'>
                <strong>Jupyter Notebook</strong>
              </p>
            </li>
            <li className='offer--container--tools--list--item'>
              <div className='offer--container--tools--list--item--img'>
                <img
                  className='offer--container--tools--list--item--img--icon'
                  alt='Pandas'
                  src={pandas}
                />
              </div>

              <p className='offer--container--tools--list--item--label'>
                <strong>Pandas</strong>
              </p>
            </li>
            <li className='offer--container--tools--list--item'>
              <div className='offer--container--tools--list--item--img'>
                <img
                  className='offer--container--tools--list--item--img--icon'
                  alt='Scikit-Learn'
                  src={scikit}
                />
              </div>

              <p className='offer--container--tools--list--item--label'>
                <strong>Scikit-Learn</strong>
              </p>
            </li>
            <li className='offer--container--tools--list--item'>
              <div className='offer--container--tools--list--item--img'>
                <img
                  className='offer--container--tools--list--item--img--icon'
                  alt='Keras'
                  src={keras}
                />
              </div>

              <p className='offer--container--tools--list--item--label'>
                <strong>Keras</strong>
              </p>
            </li>
            <li className='offer--container--tools--list--item'>
              <div className='offer--container--tools--list--item--img'>
                <img
                  className='offer--container--tools--list--item--img--icon'
                  alt='NLTK'
                  src={nltk}
                />
              </div>

              <p className='offer--container--tools--list--item--label'>
                <strong>NLTK</strong>
              </p>
            </li>

          </ul>
        </div>
      </section>

<hr className='hr'/>
      
      <section className='offer--container' id='methodo'>
        <h3 className='offer--container--title'>
          Notre m??thodologie
        </h3>

        <ul className='offer--container--steps'>
          <li className='offer--container--steps--step'>
            <h4 className='offer--container--steps--step--title'>
              ??tape 1 : Nettoyage des donn??es
            </h4>

            <span className='offer--container--steps--step--span'>
              Cette premi??re ??tape indispensable consiste ?? cr??er une base de donn??es ???propre??? p??renne
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
                Concat??nation de bases de donn??es s??par??es
              </p>
            </div>
            <em className='offer--container--steps--step--example'>
              Ex : concat??nation d???une base de donn??es ?? clients ?? avec une base de donn??es ?? commandes ??
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
              Ex : retrait de valeurs ?? texte ?? dans une colonne num??rique
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
                Remplissage des donn??es manquantes par algorithmes
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
                Formatage des donn??es
              </p>
            </div>
            <em className='offer--container--steps--step--example'>
              Ex : suppression de caract??res inutiles, nombre de d??cimales
            </em>
          </li>

          <li className='offer--container--steps--step'>
            <h4 className='offer--container--steps--step--title'>
              ??tape 2 : Analyse exploratoire
            </h4>

            <span className='offer--container--steps--step--span'>
              Nous allons maintenant pouvoir comprendre le contenu de notre base de donn??es ???nettoy??e??? avec des outils statistiques.
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
                Observation de la distribution des variables quantitatives, mise en ??vidence d???outliers
              </p>
            </div>
            <em className='offer--container--steps--step--example'>
              Ex : histogramme, bo??te ?? moustache
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
                Analyses bivari??es : existe-t-il des relations entre les param??tres ?
              </p>
            </div>
            <em className='offer--container--steps--step--example'>
              Ex : carte des corr??lations, Test du CHi??, t-test de student, ANOVA
            </em>

            <span className='offer--container--steps--step--span'>
              ??? Au terme de cette ??tape, nous avons d??j?? extrait une partie de la valeur de vos donn??es : ces constats statistiques conduisent souvent ?? des liens de causes ?? effet permettant d???agir ! De plus, la qualit?? des donn??es permet alors de g??n??rer la visualisation interactive des indicateurs d??sir??s (via des librairies comme Dash ou Streamlit).
            </span>
          </li>

          <li className='offer--container--steps--step'>
            <h4 className='offer--container--steps--step--title'>
              ??tape 3 : Feature engineering
            </h4>

            <span className='offer--container--steps--step--span'>
              En vue de cr??er une mod??lisation des donn??es par Machine Learning, nous devons maintenant manipuler les donn??es pour qu???elles conviennent aux diff??rents algorithmes exploitables. On peut consid??rer qu???il s???agit d???une nouvelle ??tape de nettoyage des donn??es, mais qui n??cessite une bonne connaissance des algorithmes de Machine Learning.
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
                Ajout de colonnes d???interactions entre les variables
              </p>
            </div>
            <em className='offer--container--steps--step--example'>
              Ex : variables polynomiales
            </em>

            <div className='offer--container--steps--step--box'>
              <div className='offer--container--steps--step--box--img'>
                <img
                  className='offer--container--steps--step--box--img--icon'
                  alt='Graphique'
                  src={step3_4}
                />
              </div>
              <p className='offer--container--steps--step--box--text'>
                Standardisation des variables quantitatives
              </p>
            </div>
            <em className='offer--container--steps--step--example'>
              Ex : centrage et r??duction
            </em>

            <div className='offer--container--steps--step--box'>
              <div className='offer--container--steps--step--box--img'>
                <img
                  className='offer--container--steps--step--box--img--icon'
                  alt='Graphique'
                  src={step3_5}
                />
              </div>
              <p className='offer--container--steps--step--box--text'>
                R??duction de dimensions
              </p>
            </div>
            <em className='offer--container--steps--step--example'>
              Ex : Analyse en Composantes Principales
            </em>
          </li>

          <li className='offer--container--steps--step'>
            <h4 className='offer--container--steps--step--title'>
              ??tape 4 : Machine Learning
            </h4>

            <span className='offer--container--steps--step--span'>
              Vos donn??es sont maintenant pr??tes pour des algorithmes de Machine Learning. Il en existe 2 types :
            </span>

            <p className='offer--container--steps--step--text'>
              ??? <strong>Supervis??</strong> : on cherche ?? pr??dire une variable de sortie ?? partir des donn??es du pass??. Cela n??cessite de faire une s??paration ???entra??nement??? et ???test??? de nos donn??es. L?????valuation de la robustesse du mod??le se fait avec des grandeurs comme l???<strong>Accuracy</strong> ou la <strong>RMSE</strong>.
            </p>

            <em className='offer--container--steps--step--example'>
              Exemples d???applications : nombre de produits vendus dans les 6 prochains mois, l???image est un chat / n???est pas un chat.
            </em>

            <div className='offer--container--steps--step--algo'>
              <span className='offer--container--steps--step--algo--span'>
                Exemples d'algorithmes :
              </span>

              <ul className='offer--container--steps--step--algo--list'>
                <li className='offer--container--steps--step--algo--list--item'>
                  - R??gression lin??aire
                </li>
                <li className='offer--container--steps--step--algo--list--item'>
                  - kNN
                </li>
                <li className='offer--container--steps--step--algo--list--item'>
                  - R??seau de neurones
                </li>
                <li className='offer--container--steps--step--algo--list--item'>
                  - For??t al??atoire
                </li>
                <li className='offer--container--steps--step--algo--list--item'>
                  - Gradient Boosting
                </li>
              </ul>
            </div>

            <p className='offer--container--steps--step--text'>
              ??? <strong>Non supervis??</strong> : l???algorithme va cr??er des groupes les plus distincts possibles entre eux en fonction des param??tres de chaque individu. On appelle cela le ???clustering???. L?????valuation de la robustesse du mod??le se fait avec des grandeurs comme le <strong>coefficient de silhouette</strong> ou l'<strong>ARI</strong>.
            </p>

            <em className='offer--container--steps--step--example'>
              Exemple d???application : segmentation de clients pour la recommandation de produits.
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
                  - Clustering agglom??ratif
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
              Notre valeur ajout??e ? Nous utilisons les statistiques. Nous ma??trisons les conditions n??cessaires ?? une ??tude statistique solide. Nous avons les comp??tences pour vous indiquer si oui ou non une diff??rence de moyenne entre 2 groupes de mesures est statistiquement significative ou non.
            </p>
            <p className='offer--container--steps--step--text'>
              Outils types : t-test, test de mann-Whitney, ANOVA, test de Kruskal Wallis, test du Chi??
            </p>
          </li>
        </ul>
      </section>

      <div className='offer--img'>
        <img
          className='offer--img--icon'
          alt='Data Science'
          src={img2}
        />
      </div>

<hr className='hr'/>

      <section className='offer--container' id='references'>
        <h3 className='offer--container--title'>
          Nos r??f??rences
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
                Anticipation de la consommation ??nerg??tique d???une ville ?? l???aide de relev??s ant??rieurs
              </td>
              <td className='offer--container--table--body--row--content'>
                ??nergie
              </td>
              <td className='offer--container--table--body--row--content'>
                Interne
              </td>
            </tr>
            <tr className='offer--container--table--body--row'>
              <td className='offer--container--table--body--row--content'>
                POC d???une id??e d???application sur une base de donn??es alimentaire
              </td>
              <td className='offer--container--table--body--row--content'>
                Sant??
              </td>
              <td className='offer--container--table--body--row--content'>
                Interne
              </td>
            </tr>
            <tr className='offer--container--table--body--row'>
              <td className='offer--container--table--body--row--content'>
                Classification automatique des produits par analyse d???image
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
                Cr??ation d???un tableau de bord interactif sur navigateur
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
                Cr??ation d???un environnement Big Data dans le cloud
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
                D??termination des pays ?? plus fort potentiel pour des solutions d???e-learning
              </td>
              <td className='offer--container--table--body--row--content'>
                ??ducation & formation
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
          alt='Data Science'
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
            alt='Aller ?? la page de contact'
            src={contact}
          />
        </NavLink>
      </div>
    </div>
  );
};

export default DataScience;
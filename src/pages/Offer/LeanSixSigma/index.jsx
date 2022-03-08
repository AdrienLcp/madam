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
import step4_1 from '../../../media/leanSixSigma/steps/step4_1.png';
import step4_2 from '../../../media/leanSixSigma/steps/step4_2.png';
import step4_3 from '../../../media/leanSixSigma/steps/step4_3.png';
import step5_1 from '../../../media/leanSixSigma/steps/step5_1.png';
import step5_2 from '../../../media/leanSixSigma/steps/step5_2.png';

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
          "Parfois on se trompe dans l’analyse d’un événement parce qu’on reste figé dans le seul point de vue qui nous semble évident"
        </q>

        <span className='offer--quote--author'>
          Bernard Werber
        </span>
      </section>

      <div className='offer--img'>
        <img
          className='offer--img--icon'
          alt='Lean Six Sigma'
          src={img1}
        />
      </div>

      <section className='offer--container' id='vision'>
        <h3 className='offer--container--title'>
          Notre Vision
        </h3>

        <p className='offer--container--text'>
          Engager un projet Lean 6 Sigma, c’est prendre le taureau par les cornes. Le séquençage en DMAIC, colonne vertébrale du projet, tient du bon sens absolu mais engage toute l’équipe dans la rigueur et le pragmatisme nécessaires à la résolution de problèmes complexes. 
        </p>

        <p className='offer--container--text'>
          Les mesures amènent la crédibilité, les statistiques la justesse, il ne nous reste ensuite qu’à innover ensemble.
        </p>
      </section>

<hr className='hr'/>

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
            Le Lean Six Sigma combine le Lean, qui a pour objectif l’élimination des gaspillages, et… le Six Sigma, qui vise la réduction de la variabilité des processus, donc des défauts. Cette méthode permet de résoudre des problèmes complexes de performance et/ou de qualité, et peut être employée dans l’industrie, les services ou même le commerce
          </p>
        </div>

        <div className='offer--container--box'>
          <h4 className='offer--container--box--title'>
            Les 5 étapes DMAIC de la méthode Lean Six Sigma
          </h4>

          <ul className='offer--container--box--list'>
            <li className='offer--container--box--list--item'>
              ❓ Définir
            </li>

            <li className='offer--container--box--list--item'>
              🧾 Mesurer
            </li>

            <li className='offer--container--box--list--item'>
              📊 Analyser
            </li>

            <li className='offer--container--box--list--item'>
              💡 Innover
            </li>

            <li className='offer--container--box--list--item'>
              📈 Contrôler
            </li>
          </ul>
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
        
        <div className='offer--container--box'>
          <h4 className='offer--container--box--title'>
            Il existe plusieurs niveaux de compétences en Lean Six Sigma
          </h4>

          <table className='offer--container--box--table'>
            <tbody className='offer--container--box--table--body'>
              <tr className='offer--container--box--table--body--row'>
                <td className='offer--container--box--table--body--row--content'>
                  ⚪ White Belt
                </td>
                <td className='offer--container--box--table--body--row--content'>
                  Formation aux enjeux du Lean Six Sigma (~1 jour)
                </td>
              </tr>
              <tr className='offer--container--box--table--body--row'>
                <td className='offer--container--box--table--body--row--content'>
                  🟡 Yellow Belt
                </td>
                <td className='offer--container--box--table--body--row--content'>
                  Formation aux enjeux du Lean Six Sigma (~3 jours)
                </td>
              </tr>
              <tr className='offer--container--box--table--body--row'>
                <td className='offer--container--box--table--body--row--content'>
                  🟢 Green Belt
                </td>
                <td className='offer--container--box--table--body--row--content'>
                  Animation de petits projets (entre 25 k€ et 100 k€)
                </td>
              </tr>
              <tr className='offer--container--box--table--body--row'>
                <td className='offer--container--box--table--body--row--content'>
                  <strong>⚫ Black Belt ✅</strong>
                </td>
                <td className='offer--container--box--table--body--row--content'>
                  <strong>Animation de projets importants (gains projet supérieurs à 100k€) <br />→ Notre niveau de compétence certifié</strong>
                </td>
              </tr>
              <tr className='offer--container--box--table--body--row'>
                <td className='offer--container--box--table--body--row--content'>
                  ⚫⚫ Master Black Belt
                </td>
                <td className='offer--container--box--table--body--row--content'>
                  Formation des équipes et veille technique
                </td>
              </tr>
            </tbody>
          </table>

        </div>
      </section>

<hr className='hr'/>

      <section className='offer--container' id='methodo'>
        <h3 className='offer--container--title'>
          Notre méthodologie
        </h3>

        <ul className='offer--container--steps'>
          <li className='offer--container--steps--step'>
            <h4 className='offer--container--steps--step--title'>
              D - Définir
            </h4>

            <span className='offer--container--steps--step--span'>
              C’est l’étape clef de démarrage du projet !
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
                (1) Formalisation et quantification du problème
              </p>
            </div>
            <em className='offer--container--steps--step--example'>
              Dans l’idéal avec le client du processus
              <br />
              Outils : VoC – CTQ – diagramme de Kano – questionnaire – analyse statistique des données du passé
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
                (2) Description du processus
              </p>
            </div>
            <em className='offer--container--steps--step--example'>
              Outils : VSM – logigramme de processus – analyse de déroulement – SIPOC
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
                (3) Choix de l’indicateur du projet
              </p>
            </div>
            <em className='offer--container--steps--step--example'>
              Quelle donnée mesurable décrit le problème à résoudre ? Quel est l’état initial (avant projet) de cet indicateur ?
              <br />
              Outils : densité de probabilité, statistiques descriptives, indice de capabilité, carte de contrôle
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
                (4) Rédaction de la charte projet
              </p>
            </div>
            <em className='offer--container--steps--step--example'>
              Description quantitative du problème à résoudre, objectif, périmètre, acteurs et implication, planning.
              <br />
              Outils : charte projet, RACI, planning projet
            </em>

            <span className='offer--container--steps--step--span'>
              La charte projet est le livrable majeur de cette étape. Elle donne le cadre, et évite les dérives éventuelles en cours de projet.
            </span>
          </li>

          <li className='offer--container--steps--step'>
            <h4 className='offer--container--steps--step--title'>
              M – Mesurer
            </h4>

            <span className='offer--container--steps--step--span'>
              On va effectuer une série de mesures sur l’indicateur principal du projet (que l’on appelle « y »), tout en faisant varier les paramètres choisis pour leur potentielle influence sur cet indicateur (que l’on appelle « x1, x2, x3, … »)
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
                (1) Sélection des paramètres « x1, x2, x3, … » qui ont de l’influence sur notre « y ».
              </p>
            </div>
            <em className='offer--container--steps--step--example'>
              Outils : QQOQCCP, Ishikawa, matrice de décision
              <br />
              NB : cette étape permet aussi d’identifier les “Quick Wins”, actions simples permettant un gain immédiat
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
                (2) Validation du processus de mesure
              </p>
            </div>
            <em className='offer--container--steps--step--example'>
              Outils : MSA, étalonnage
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
                (3) Réalisation des mesures
              </p>
            </div>
            <em className='offer--container--steps--step--example'>
              Outils : plan de collecte des données, plan d’expérience
            </em>
          </li>

          <li className='offer--container--steps--step'>
            <h4 className='offer--container--steps--step--title'>
              A – Analyser
            </h4>

            <span className='offer--container--steps--step--span'>
              Il s’agit de l’analyse statistique des mesures collectées. On cherche alors des relations entre les données d’entrées (« x1, x2, x3… »), qu’on a volontairement fait varier pour les mesures, et la donnée de sortie qui est l’objet du projet (« y »). Cette étape requiert des compétences en statistiques pour ne pas faire de conclusions erronées (par exemple : non prise en compte des interactions entre paramètres, comparaisons de moyennes sans tests statistiques…).
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
                (1) Statistiques descriptives sur le « y » et les « x1, x2, x3, … »
              </p>
            </div>
            <em className='offer--container--steps--step--example'>
              Outils : histogramme, boîte à moustache, diagramme des fréquences, test de normalité
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
                (2) Tests statistiques : recherche de liens de cause à effet
              </p>
            </div>
            <em className='offer--container--steps--step--example'>
              Outils : corrélations, t-test, ANOVA, Chi², carte multivariée, diagramme des interactions
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
                (3) Recherche de causes racines
              </p>
            </div>
            <em className='offer--container--steps--step--example'>
              Outils : Ishikawa, 5 pourquoi
            </em>

            <span className='offer--container--steps--step--span'>
              D’un point de vue technique, il est possible d’utiliser des logiciels dédiés comme Minitab, mais aussi les outils de la Data Science : Python, librairies Pandas, Numpy, Matplotlib/Seaborn, Scikit Learn.
            </span>
          </li>

          <li className='offer--container--steps--step'>
            <h4 className='offer--container--steps--step--title'>
              I – Innover
            </h4>

            <span className='offer--container--steps--step--span'>
              Après avoir identifié quels « x » influencent notre « y » (et quels « x » interagissent entre eux), nous pouvons définir les actions à mener pour atteindre l’objectif.
            </span>

            <div className='offer--container--steps--step--box'>
              <div className='offer--container--steps--step--box--img'>
                <img
                  className='offer--container--steps--step--box--img--icon'
                  alt='Graphique'
                  src={step4_1}
                />
              </div>
              <p className='offer--container--steps--step--box--text'>
                (1) Priorisation des causes
              </p>
            </div>
            <em className='offer--container--steps--step--example'>
              Outils : pareto, AMDEC
            </em>

            <div className='offer--container--steps--step--box'>
              <div className='offer--container--steps--step--box--img'>
                <img
                  className='offer--container--steps--step--box--img--icon'
                  alt='Graphique'
                  src={step4_2}
                />
              </div>
              <p className='offer--container--steps--step--box--text'>
                (2) Création de groupes de travail par sujet et par compétences
              </p>
            </div>
            <em className='offer--container--steps--step--example'>
              Outils : brainstorming, management visuel, ateliers participatifs
            </em>

            <div className='offer--container--steps--step--box'>
              <div className='offer--container--steps--step--box--img'>
                <img
                  className='offer--container--steps--step--box--img--icon'
                  alt='Graphique'
                  src={step4_3}
                />
              </div>
              <p className='offer--container--steps--step--box--text'>
                (3) Détermination des actions, responsables et planification
              </p>
            </div>
            <em className='offer--container--steps--step--example'>
              Outils : plan d’actions, projets A3, MS Project
            </em>
          </li>

          <li className='offer--container--steps--step'>
            <h4 className='offer--container--steps--step--title'>
              C – Contrôler
            </h4>

            <span className='offer--container--steps--step--span'>
              Cette dernière étape permet d’une part de vérifier l’impact des actions réalisées sur l’atteinte de l’objectif, d’autre part de mettre sous surveillance notre y ainsi que les paramètres « x » qui influent sur « y ». Ceci vous permettra de repérer et corriger les éventuelles dérives de votre processus.
            </span>

            <div className='offer--container--steps--step--box'>
              <div className='offer--container--steps--step--box--img'>
                <img
                  className='offer--container--steps--step--box--img--icon'
                  alt='Graphique'
                  src={step5_1}
                />
              </div>
              <p className='offer--container--steps--step--box--text'>
                (1) Mise sous contrôle statistique du « y » et des « x » retenus
              </p>
            </div>
            <em className='offer--container--steps--step--example'>
              Outils : carte de contrôle, tableau de bord, calcul de capabilité
            </em>

            <div className='offer--container--steps--step--box'>
              <div className='offer--container--steps--step--box--img'>
                <img
                  className='offer--container--steps--step--box--img--icon'
                  alt='Graphique'
                  src={step5_2}
                />
              </div>
              <p className='offer--container--steps--step--box--text'>
                (2) Création de rituels de suivi
              </p>
            </div>
            <em className='offer--container--steps--step--example'>
              Outils : réunions opérationnelles (quotidiennes ou hebdomadaires)
            </em>
          </li>

          <span className='offer--container--steps--step--span'>
            Au terme de cette étape, le projet est t’il terminé ? Pas vraiment ! Il faudra impérativement féliciter l’équipe, et communiquer sur le succès pour valoriser l’implication des parties prenantes.
          </span>

        </ul>
      </section>

      <div className='offer--img'>
        <img
          className='offer--img--icon'
          alt='Lean Six Sigma'
          src={img2}
        />
      </div>

<hr className='hr'/>

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
                Réduction du temps de traitement des non-conformités
              </td>
              <td className='offer--container--table--body--row--content'>
                Aéronautique
              </td>
              <td className='offer--container--table--body--row--content'>
                🟢🟢🟢🟢⚫
              </td>
            </tr>
            <tr className='offer--container--table--body--row'>
              <td className='offer--container--table--body--row--content'>
                Réduction du temps d’analyse de la facturation des dommages générés en production
              </td>
              <td className='offer--container--table--body--row--content'>
                Aéronautique
              </td>
              <td className='offer--container--table--body--row--content'>
                Interne
              </td>
            </tr>
            <tr className='offer--container--table--body--row'>
              <td className='offer--container--table--body--row--content'>
                Étude statistique du chiffre d’affaire annuel d’un café concert pour la mise en évidence des paramètres influents
              </td>
              <td className='offer--container--table--body--row--content'>
                Hôtellerie / Restauration
              </td>
              <td className='offer--container--table--body--row--content'>
                🟢🟢🟢🟢🟢
              </td>
            </tr>
            <tr className='offer--container--table--body--row'>
              <td className='offer--container--table--body--row--content'>
                5S salle conditionnement surgelés
              </td>
              <td className='offer--container--table--body--row--content'>
                Agroalimentaire
              </td>
              <td className='offer--container--table--body--row--content'>
                Interne
              </td>
            </tr>
            <tr className='offer--container--table--body--row'>
              <td className='offer--container--table--body--row--content'>
                Mise en place Kanban
              </td>
              <td className='offer--container--table--body--row--content'>
                Aéronautique
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
          alt='Lean Six Sigma'
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
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
          "Parfois on se trompe dans l???analyse d???un ??v??nement parce qu???on reste fig?? dans le seul point de vue qui nous semble ??vident"
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
          Engager un projet Lean 6 Sigma, c???est prendre le taureau par les cornes. Le s??quen??age en DMAIC, colonne vert??brale du projet, tient du bon sens absolu mais engage toute l?????quipe dans la rigueur et le pragmatisme n??cessaires ?? la r??solution de probl??mes complexes. 
        </p>

        <p className='offer--container--text'>
          Les mesures am??nent la cr??dibilit??, les statistiques la justesse, il ne nous reste ensuite qu????? innover ensemble.
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
              src={leanSixSigma}
            />
          </div>

          <p className='offer--container--description--label'>
            Le Lean Six Sigma combine le Lean, qui a pour objectif l?????limination des gaspillages, et??? le Six Sigma, qui vise la r??duction de la variabilit?? des processus, donc des d??fauts. Cette m??thode permet de r??soudre des probl??mes complexes de performance et/ou de qualit??, et peut ??tre employ??e dans l???industrie, les services ou m??me le commerce
          </p>
        </div>

        <div className='offer--container--box'>
          <h4 className='offer--container--box--title'>
            Les 5 ??tapes DMAIC de la m??thode Lean Six Sigma
          </h4>

          <ul className='offer--container--box--list'>
            <li className='offer--container--box--list--item'>
              ??? D??finir
            </li>

            <li className='offer--container--box--list--item'>
              ???? Mesurer
            </li>

            <li className='offer--container--box--list--item'>
              ???? Analyser
            </li>

            <li className='offer--container--box--list--item'>
              ???? Innover
            </li>

            <li className='offer--container--box--list--item'>
              ???? Contr??ler
            </li>
          </ul>
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
        
        <div className='offer--container--box'>
          <h4 className='offer--container--box--title'>
            Il existe plusieurs niveaux de comp??tences en Lean Six Sigma
          </h4>

          <table className='offer--container--box--table'>
            <tbody className='offer--container--box--table--body'>
              <tr className='offer--container--box--table--body--row'>
                <td className='offer--container--box--table--body--row--content'>
                  ??? White Belt
                </td>
                <td className='offer--container--box--table--body--row--content'>
                  Formation aux enjeux du Lean Six Sigma (~1 jour)
                </td>
              </tr>
              <tr className='offer--container--box--table--body--row'>
                <td className='offer--container--box--table--body--row--content'>
                  ???? Yellow Belt
                </td>
                <td className='offer--container--box--table--body--row--content'>
                  Formation aux enjeux du Lean Six Sigma (~3 jours)
                </td>
              </tr>
              <tr className='offer--container--box--table--body--row'>
                <td className='offer--container--box--table--body--row--content'>
                  ???? Green Belt
                </td>
                <td className='offer--container--box--table--body--row--content'>
                  Animation de petits projets (entre 25 k??? et 100 k???)
                </td>
              </tr>
              <tr className='offer--container--box--table--body--row'>
                <td className='offer--container--box--table--body--row--content'>
                  <strong>??? Black Belt ???</strong>
                </td>
                <td className='offer--container--box--table--body--row--content'>
                  <strong>Animation de projets importants (gains projet sup??rieurs ?? 100k???) <br />??? Notre niveau de comp??tence certifi??</strong>
                </td>
              </tr>
              <tr className='offer--container--box--table--body--row'>
                <td className='offer--container--box--table--body--row--content'>
                  ?????? Master Black Belt
                </td>
                <td className='offer--container--box--table--body--row--content'>
                  Formation des ??quipes et veille technique
                </td>
              </tr>
            </tbody>
          </table>

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
              D - D??finir
            </h4>

            <span className='offer--container--steps--step--span'>
              C???est l?????tape clef de d??marrage du projet !
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
                (1) Formalisation et quantification du probl??me
              </p>
            </div>
            <em className='offer--container--steps--step--example'>
              Dans l???id??al avec le client du processus
              <br />
              Outils : VoC ??? CTQ ??? diagramme de Kano ??? questionnaire ??? analyse statistique des donn??es du pass??
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
              Outils : VSM ??? logigramme de processus ??? analyse de d??roulement ??? SIPOC
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
                (3) Choix de l???indicateur du projet
              </p>
            </div>
            <em className='offer--container--steps--step--example'>
              Quelle donn??e mesurable d??crit le probl??me ?? r??soudre ? Quel est l?????tat initial (avant projet) de cet indicateur ?
              <br />
              Outils : densit?? de probabilit??, statistiques descriptives, indice de capabilit??, carte de contr??le
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
                (4) R??daction de la charte projet
              </p>
            </div>
            <em className='offer--container--steps--step--example'>
              Description quantitative du probl??me ?? r??soudre, objectif, p??rim??tre, acteurs et implication, planning.
              <br />
              Outils : charte projet, RACI, planning projet
            </em>

            <span className='offer--container--steps--step--span'>
              La charte projet est le livrable majeur de cette ??tape. Elle donne le cadre, et ??vite les d??rives ??ventuelles en cours de projet.
            </span>
          </li>

          <li className='offer--container--steps--step'>
            <h4 className='offer--container--steps--step--title'>
              M ??? Mesurer
            </h4>

            <span className='offer--container--steps--step--span'>
              On va effectuer une s??rie de mesures sur l???indicateur principal du projet (que l???on appelle ?? y ??), tout en faisant varier les param??tres choisis pour leur potentielle influence sur cet indicateur (que l???on appelle ?? x1, x2, x3, ??? ??)
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
                (1) S??lection des param??tres ?? x1, x2, x3, ??? ?? qui ont de l???influence sur notre ?? y ??.
              </p>
            </div>
            <em className='offer--container--steps--step--example'>
              Outils : QQOQCCP, Ishikawa, matrice de d??cision
              <br />
              NB : cette ??tape permet aussi d???identifier les ???Quick Wins???, actions simples permettant un gain imm??diat
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
              Outils : MSA, ??talonnage
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
                (3) R??alisation des mesures
              </p>
            </div>
            <em className='offer--container--steps--step--example'>
              Outils : plan de collecte des donn??es, plan d???exp??rience
            </em>
          </li>

          <li className='offer--container--steps--step'>
            <h4 className='offer--container--steps--step--title'>
              A ??? Analyser
            </h4>

            <span className='offer--container--steps--step--span'>
              Il s???agit de l???analyse statistique des mesures collect??es. On cherche alors des relations entre les donn??es d???entr??es (?? x1, x2, x3??? ??), qu???on a volontairement fait varier pour les mesures, et la donn??e de sortie qui est l???objet du projet (?? y ??). Cette ??tape requiert des comp??tences en statistiques pour ne pas faire de conclusions erron??es (par exemple : non prise en compte des interactions entre param??tres, comparaisons de moyennes sans tests statistiques???).
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
                (1) Statistiques descriptives sur le ?? y ?? et les ?? x1, x2, x3, ??? ??
              </p>
            </div>
            <em className='offer--container--steps--step--example'>
              Outils : histogramme, bo??te ?? moustache, diagramme des fr??quences, test de normalit??
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
                (2) Tests statistiques : recherche de liens de cause ?? effet
              </p>
            </div>
            <em className='offer--container--steps--step--example'>
              Outils : corr??lations, t-test, ANOVA, Chi??, carte multivari??e, diagramme des interactions
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
              D???un point de vue technique, il est possible d???utiliser des logiciels d??di??s comme Minitab, mais aussi les outils de la Data Science : Python, librairies Pandas, Numpy, Matplotlib/Seaborn, Scikit Learn.
            </span>
          </li>

          <li className='offer--container--steps--step'>
            <h4 className='offer--container--steps--step--title'>
              I ??? Innover
            </h4>

            <span className='offer--container--steps--step--span'>
              Apr??s avoir identifi?? quels ?? x ?? influencent notre ?? y ?? (et quels ?? x ?? interagissent entre eux), nous pouvons d??finir les actions ?? mener pour atteindre l???objectif.
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
                (2) Cr??ation de groupes de travail par sujet et par comp??tences
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
                (3) D??termination des actions, responsables et planification
              </p>
            </div>
            <em className='offer--container--steps--step--example'>
              Outils : plan d???actions, projets A3, MS Project
            </em>
          </li>

          <li className='offer--container--steps--step'>
            <h4 className='offer--container--steps--step--title'>
              C ??? Contr??ler
            </h4>

            <span className='offer--container--steps--step--span'>
              Cette derni??re ??tape permet d???une part de v??rifier l???impact des actions r??alis??es sur l???atteinte de l???objectif, d???autre part de mettre sous surveillance notre y ainsi que les param??tres ?? x ?? qui influent sur ?? y ??. Ceci vous permettra de rep??rer et corriger les ??ventuelles d??rives de votre processus.
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
                (1) Mise sous contr??le statistique du ?? y ?? et des ?? x ?? retenus
              </p>
            </div>
            <em className='offer--container--steps--step--example'>
              Outils : carte de contr??le, tableau de bord, calcul de capabilit??
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
                (2) Cr??ation de rituels de suivi
              </p>
            </div>
            <em className='offer--container--steps--step--example'>
              Outils : r??unions op??rationnelles (quotidiennes ou hebdomadaires)
            </em>
          </li>

          <span className='offer--container--steps--step--span'>
            Au terme de cette ??tape, le projet est t???il termin?? ? Pas vraiment ! Il faudra imp??rativement f??liciter l?????quipe, et communiquer sur le succ??s pour valoriser l???implication des parties prenantes.
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
                R??duction du temps de traitement des non-conformit??s
              </td>
              <td className='offer--container--table--body--row--content'>
                A??ronautique
              </td>
              <td className='offer--container--table--body--row--content'>
                ???????????????????
              </td>
            </tr>
            <tr className='offer--container--table--body--row'>
              <td className='offer--container--table--body--row--content'>
                R??duction du temps d???analyse de la facturation des dommages g??n??r??s en production
              </td>
              <td className='offer--container--table--body--row--content'>
                A??ronautique
              </td>
              <td className='offer--container--table--body--row--content'>
                Interne
              </td>
            </tr>
            <tr className='offer--container--table--body--row'>
              <td className='offer--container--table--body--row--content'>
                ??tude statistique du chiffre d???affaire annuel d???un caf?? concert pour la mise en ??vidence des param??tres influents
              </td>
              <td className='offer--container--table--body--row--content'>
                H??tellerie / Restauration
              </td>
              <td className='offer--container--table--body--row--content'>
                ????????????????????
              </td>
            </tr>
            <tr className='offer--container--table--body--row'>
              <td className='offer--container--table--body--row--content'>
                5S salle conditionnement surgel??s
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
                A??ronautique
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
            alt='Aller ?? la page de contact'
            src={contact}
          />
        </NavLink>
      </div>
    </div>
  );
};

export default LeanSixSigma;
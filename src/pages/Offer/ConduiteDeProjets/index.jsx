import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import Slider from '../../../components/Slider';

import './styles.scss';

// Images
import contact from '../../../media/nav/contact.svg';
import conduiteDeProjets from '../../../media/conduiteDeProjets/conduiteDeProjets.png';

import img1 from '../../../media/conduiteDeProjets/img1.jpg';
import img2 from '../../../media/conduiteDeProjets/img2.jpg';
import img3 from '../../../media/conduiteDeProjets/img3.jpg';

import slide1 from '../../../media/conduiteDeProjets/imgSlide1.jpg';
import slide2 from '../../../media/conduiteDeProjets/imgSlide2.jpg';
import slide3 from '../../../media/conduiteDeProjets/imgSlide3.jpg';

// Steps images
import step1_1 from '../../../media/conduiteDeProjets/steps/step1_1.jpg';
import step1_2 from '../../../media/conduiteDeProjets/steps/step1_2.png';
import step2_1 from '../../../media/conduiteDeProjets/steps/step2_1.jpg';
import step2_2 from '../../../media/conduiteDeProjets/steps/step2_2.jpg';
import step2_3 from '../../../media/conduiteDeProjets/steps/step2_3.jpg';
import step2_4 from '../../../media/conduiteDeProjets/steps/step2_4.jpg';
import step2_5 from '../../../media/conduiteDeProjets/steps/step2_5.jpg';
import step2_6 from '../../../media/conduiteDeProjets/steps/step2_6.jpg';
import step2_7 from '../../../media/conduiteDeProjets/steps/step2_7.jpg';

const ConduiteDeProjets = () => {

  useEffect(() => {
    document.title = 'Conduite de projets - MaDaM';
  }, []);

  const numberOfSlides = 3;

  return (
    <div className='offer'>

      <h2 className='offer--title'>
        <strong>Conduite de projets</strong>
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
          “L’innovation systématique requiert la volonté de considérer le changement comme une opportunité”
        </q>

        <span className='offer--quote--author'>
        Peter Drucker
        </span>
      </section>

      <div className='offer--img'>
        <img
          className='offer--img--icon'
          alt='Conduite de projets'
          src={img1}
        />
      </div>

      <section className='offer--container' id='vision'>
        <h3 className='offer--container--title'>
          Notre Vision
        </h3>

        <p className='offer--container--text'>
          Agile, SAFe, PMP, PRINCE2, etc. autant de méthodologies et certifications qui régissent la conduite de projets.
          <br />
          Quelles différences ? Quels avantages ? Simple mode managériale ?
          <br />
          La question la plus importante est : <strong>quelle est la plus adaptée à mon organisation ?</strong>
        </p>

        <p className='offer--container--text'>
          Notre approche, pragmatique, est basée sur la définition d’un projet (ISO 21500 2021) : “Un projet est un ensemble unique de processus, constitués d’activités coordonnées et maîtrisées, ayant des dates de début et de fin et entreprises pour atteindre les objectifs du projet. La réalisation des objectifs du projet requiert la fourniture de livrables conformes à des exigences spécifiques.”
        </p>

        <p className='offer--container--text'>
          Autrement dit, conduire un projet c’est appliquer des connaissances, compétences, talents, méthodes, outils et techniques dans la mise en œuvre d’activités destinées à <strong>réaliser les objectifs, en équilibrant les contraintes techniques, de coûts et de délais</strong>.
        </p>

        <p className='offer--container--text'>
          Intrinsèquement <strong>novateur</strong> et <strong>incertain</strong>, un projet nécessite : un <strong>cadrage</strong> clair, l’<strong>implication</strong> des parties prenantes, une <strong>communication</strong> transparente et une capacité à <strong>réagir</strong> à des modifications fréquentes. Autant de compétences que nous sommes en mesure de mettre en œuvre pour vous accompagner.
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
              src={conduiteDeProjets}
            />
          </div>

          <p className='offer--container--description--label'>
            L’accompagnement à la conduite de projet trouve son fondement dans les problématiques inhérentes à tous projets : manque de visibilité, problème de communication, gestion des ressources, éloignement géographique, etc.
            <br />
            Nos compétences et succès comme chefs de projets dans l’industrie, ainsi que nos formations, nous permettent de mettre en œuvre la démarche nécessaire à la réalisation de vos ambitions.
          </p>
        </div>

        <div className='offer--container--box'>
          <h4 className='offer--container--box--title'>
            Vous pourrez ainsi :
          </h4>

          <ul className='offer--container--box--list'>
            <li className='offer--container--box--list--item'>
              • Cadrer vos projets
            </li>

            <li className='offer--container--box--list--item'>
              • Coordonner vos équipes
            </li>

            <li className='offer--container--box--list--item'>
              • Assurer un suivi de vos activités régulier, fiable et exploitable
            </li>

            <li className='offer--container--box--list--item'>
              • Identifier les risques organisationnels
            </li>

            <li className='offer--container--box--list--item'>
              • Aligner les différentes composantes de votre entreprise avec votre stratégie
            </li>

            <li className='offer--container--box--list--item'>
              • Prendre des décisions éclairées
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
            numberOfSlides={numberOfSlides}
          />

        </div>

        <div className='offer--container--tools'>
          <h4 className='offer--container--tools--title'>
            Outils type
          </h4>

          <ul className='offer--container--tools--project_list'>
            <li className='offer--container--tools--project_list--item'>
              📊 Gestion de projets
            </li>
            <li className='offer--container--tools--project_list--item'>
              🗃️ PESTEL
            </li>
            <li className='offer--container--tools--project_list--item'>
              🎤 Interviews
            </li>
            <li className='offer--container--tools--project_list--item'>
              🧬 Modèle de congruence
            </li>
            <li className='offer--container--tools--project_list--item'>
              🆚 PORTER
            </li>
            <li className='offer--container--tools--project_list--item'>
              🧮 SIG
            </li>
          </ul>
        </div>
      </section>

<hr className='hr'/>
      
      <section className='offer--container' id='methodo'>
        <h3 className='offer--container--title'>
          Notre méthodologie
        </h3>

        <span className='offer--container--span'>
          Suivant le besoin en accompagnement exprimé, <strong>2 types de parcours</strong> sont possibles !
        </span>

        <ul className='offer--container--methodo'>
          <li className='offer--container--methodo--step'>
            <h4 className='offer--container--methodo--step--title'>
              Parcours 1 : Gestion de projet
            </h4>

            <h5 className='offer--container--methodo--step--subtitle'>
              Étape 1 : Cadrage initial
            </h5>

            <p className='offer--container--methodo--step--text'>
              Basique sur le papier, cette étape est primordiale pour un bon déroulement du projet et pour garantir la réalisation des objectifs. Valider – en équipe – ces <strong>objectifs</strong>, les <strong>données de départ</strong>, les <strong>enjeux</strong> (qualité, coût et délai) ainsi que les <strong>acteurs</strong> (propriétaire du projet, équipe projet, comité de pilotage) constitue la colonne vertébrale d’une collaboration sereine.
            </p>

            <p className='offer--container--methodo--step--text'>
              En quoi cela consiste-t-il ? C’est la rédaction de la <strong>charte projet et du cahier des charges</strong>.
            </p>
            
            <p className='offer--container--methodo--step--text'>
              Brièvement, quelques éléments que l’on peut retrouver :
              <br/><br/>
              • Cartographie des parties prenantes <br/>
              • Analyse des contraintes <br/>
              • Cahier des charges <br/>
              • PBS / WBS / OBS <br/>
              • RACI <br/>
              • GANTT / PERT <br/>
              • Matrice des risques <br/>
              • ...
            </p>

            <h5 className='offer--container--methodo--step--subtitle'>
              Étape 2 : Pilotage de projet
            </h5>

            <p className='offer--container--methodo--step--text'>
              C’est <strong>la vie du projet</strong>. Etat d’avancement, réussites, points de blocage, en-cours… Un suivi dédié et régulier pour une vision claire et des prises de décisions efficaces, au bon moment.
            </p>

            <img
              className='offer--container--methodo--step--img'
              alt='Tableau conduite de projets'
              src={step1_1}
            />

            <h5 className='offer--container--methodo--step--subtitle'>
              Étape 3 : Retour d’expérience
            </h5>

            <p className='offer--container--methodo--step--text'>
              On capitalise tout au long de la vie du projet (mise à jour de la documentation, des outils et de la méthodologie), mais <strong>il est important de le formaliser</strong> pour en tirer profit dans les futurs projets. C’est aussi l’occasion de clôturer le projet et de <strong>célébrer les réussites</strong> avec l’équipe.
            </p>

            <img
              className='offer--container--methodo--step--img'
              alt='Conduite de projets'
              src={step1_2}
            />

            <h4 className='offer--container--methodo--step--title'>
              Parcours 2 : Accompagnement stratégique
            </h4>

            <h5 className='offer--container--methodo--step--subtitle'>
              Étape 1 : Diagnostic
            </h5>

            <p className='offer--container--methodo--step--text'>
              Lors de cette étape, il est question de comprendre l’environnement dans lequel l’entreprise évolue (<strong>analyse externe</strong>) et les éléments qui constituent sa colonne vertébrale (<strong>analyse interne</strong>).
            </p>
            
            <p className='offer--container--methodo--step--text'>
              <strong>🔎 Analyse externe → identifier les grandes tendances qui structurent l’environnement et les relations avec les parties prenantes</strong>
            </p>

            <img
              className='offer--container--methodo--step--img'
              alt='Conduite de projets'
              src={step2_1}
            />

            <p className='offer--container--methodo--step--text'>
              Bien qu’à priori simple, c’est une étape majeure qui permet de comprendre les enjeux actuels (environnementaux, sociétaux, …) et les conséquences organisationnelles et managériales qui en découlent.
            </p>

            <p className='offer--container--methodo--step--text'>
              <strong>🔎 Analyse interne → état des lieux des fondements de l’entreprise</strong> 
            </p>

            <p className='offer--container--methodo--step--text'>
              On s’intéresse ici à l’identité et à l’histoire de l’entreprise, qui conduisent à sa stratégie.
            </p>

            <img
              className='offer--container--methodo--step--img'
              alt='Conduite de projets'
              src={step2_2}
            />

            <p className='offer--container--methodo--step--text'>
              Comment la stratégie est-elle déclinée (business → fonction → opérations → objectifs) ? Quelles sont les tâches critiques ? Bref, ce que doit faire l’organisation.
            </p>

            <p className='offer--container--methodo--step--text'>
              Puis on décrit :
            </p>
            
            <p className='offer--container--methodo--step--text'>
              • La culture de l’entreprise : normes, valeurs, modèles
              <br />
              • L’organisation formelle : design organisationnel, management, SI
              <br />
              • Les caractéristiques, compétences et connaissances des femmes et hommes qui constituent l’entreprise
            </p>

            <img
              className='offer--container--methodo--step--img'
              alt='Conduite de projets'
              src={step2_3}
            />

            <p className='offer--container--methodo--step--text'>
              Une fois cette étape terminée, nous pouvons alors poursuivre avec l’analyse, permettant de faire état de la maturité de l’organisation face au changement souhaité.
            </p>

            <h5 className='offer--container--methodo--step--subtitle'>
              Étape 2 : Analyse
            </h5>

            <p className='offer--container--methodo--step--text'>
              L’analyse se conduit sur <strong>deux niveaux</strong>.
            </p>
            
            <p className='offer--container--methodo--step--text'>
              • <strong>Premier niveau :</strong> ma stratégie est-elle clairement définie ? A tous les niveaux (business → fonction → opérations → objectifs) ? Est-elle en accord avec notre environnement ? Notre histoire ? Notre identité ? 
            </p>

            <img
              className='offer--container--methodo--step--img'
              alt='Conduite de projets'
              src={step2_4}
            />

            <p className='offer--container--methodo--step--text'>
              C’est répondre à la question : <strong>sommes-nous alignés avec notre raison d’être ? </strong>
            </p>
            
            <p className='offer--container--methodo--step--text'>
              • <strong>Second niveau :</strong> quels sont les risques de désalignement entre ma stratégie et les différentes composantes de mon entreprise (culture, organisation, ressources et compétences) ? Les risques de désalignement entre les différentes composantes elles-mêmes ? 
            </p>

            <img
              className='offer--container--methodo--step--img'
              alt='Conduite de projets'
              src={step2_5}
            />
            
            <p className='offer--container--methodo--step--text'>
              Avons-nous toutes les clefs en main pour mettre en place notre stratégie dans les meilleures conditions ?
            </p>

            <p className='offer--container--methodo--step--text'>
              A l’issue de cette étape, nous pourrons définir un <strong>plan d’actions</strong>.
            </p>

            <h5 className='offer--container--methodo--step--subtitle'>
              Étape 3 : Recommandations
            </h5>
            
            <p className='offer--container--methodo--step--text'>
              Quelles sont les opportunités d’amélioration immédiate ? A court terme ? Les changements à moyen-long terme ? C’est l’équation entre l’importance du risque (liée à l’organisation) et l’urgence de la transformation (liée à l’environnement) qui va définir les priorités et permettre de tendre vers un réalignement de manière sereine.
            </p>

            <img
              className='offer--container--methodo--step--img'
              alt='Conduite de projets'
              src={step2_6}
            />
            
            <p className='offer--container--methodo--step--text'>
              Et après ?
            </p>

            <h5 className='offer--container--methodo--step--subtitle'>
              Étape 4 : Retour d’expérience
            </h5>
            
            <p className='offer--container--methodo--step--text'>
              Après, on s’assure que l’on a bien capitalisé (et si c’était à refaire ?), que nos processus sont robustes, on célèbre avec les parties prenantes et on n’oublie pas que c’est une démarche itérative en constante évolution.
            </p>

            <img
              className='offer--container--methodo--step--img'
              alt='Conduite de projets'
              src={step2_7}
            />

          </li>
        </ul>

      </section>

      <div className='offer--img'>
        <img
          className='offer--img--icon'
          alt='Conduite de projets'
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
                Coordination équipe bureau d’étude
              </td>
              <td className='offer--container--table--body--row--content'>
                Aéronautique
              </td>
              <td className='offer--container--table--body--row--content'>
                🟢🟢🟢🟢🟢
              </td>
            </tr>
            <tr className='offer--container--table--body--row'>
              <td className='offer--container--table--body--row--content'>
                Management de la Supply Chain (environnement multiculturel)
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
                Restructuration d’un service (international)
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
                Coordination intervention fournisseurs sur site
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
                Analyse et recommandations sur la performance financière d’un café-concert.
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
                Mise en place rayonnage
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
                Analyse de récurrences sur les dommages générés en production, déduction de projets opérationnels
              </td>
              <td className='offer--container--table--body--row--content'>
                Aéronautique
              </td>
              <td className='offer--container--table--body--row--content'>
                NA
              </td>
            </tr>
            <tr className='offer--container--table--body--row'>
              <td className='offer--container--table--body--row--content'>
                Analyse technico-financière des interventions fournisseurs, négociation et mise en place de standards
              </td>
              <td className='offer--container--table--body--row--content'>
                Aéronautique
              </td>
              <td className='offer--container--table--body--row--content'>
                NA
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <div className='offer--img'>
        <img
          className='offer--img--icon'
          alt='Conduite de projets'
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

export default ConduiteDeProjets;
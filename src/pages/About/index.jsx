import React from 'react';

import './styles.scss';

import mathieu_martin from '../../media/about/mathieu_martin.jpg';
import linkedin from '../../media/about/linkedin.svg';

const About = () => {

  return (
    <div className='about'>
      <section className='about--header'>
        <h3 className='about--header--title'>
          À propos
        </h3>
        <p className='about--header--text'>
          "<strong>MaDaM</strong>, c'est la rencontre de <strong>Ma</strong>thieu et <strong>Ma</strong>rtin autour d'une ambition :
        </p>
        <p className='about--header--text'>
          vous aider à prendre les bonnes <strong>D</strong>écisions au bon moment, grâce à l'exploitation de <strong>D</strong>onnées, et prendre part au développement de modèles d'affaires plus <strong>D</strong>urables."
        </p>

        <div className='about--header--icon'>
          <img
            className='about--header--icon--img'
            alt='Mathieu et Martin'
            src={mathieu_martin}
          />
        </div>
      </section>

      <section className='about--container'>
        <h4 className='about--container--title'>
          Valeurs
        </h4>

        <div className='about--container--box'>
          <h5 className='about--container--box--label'>
            Transparence
          </h5>

          <p className='about--container--box--text'>
            Nous construisons le développement de nos activités sur la confiance mutuelle entre nous et nos clients. Nous ne voyons aucun intérêt à présenter des éléments incomplets ou orientés à des fins commerciales. C’est avec l’exhaustivité des faits, satisfaisants ou non, que nous construisons ensemble des solutions durables.
          </p>
        </div>

        <div className='about--container--box'>
          <h5 className='about--container--box--label'>
            Proximité
          </h5>

          <p className='about--container--box--text'>
            Il nous apparaît essentiel de tisser prioritairement des liens avec l’écosystème local. Les nombreux industriels, prestataires de services et compétences font du bassin nantais un territoire dynamique auquel nous sommes profondément attachés.
            <br />
            Notre bonne connaissance de ces acteurs locaux, visant à créer une dynamique de réseau, vous permettra de bénéficier de solutions techniques sur mesure, développées au plus près de votre activité.
          </p>
        </div>

        <div className='about--container--box'>
          <h5 className='about--container--box--label'>
            Responsabilité
          </h5>

          <p className='about--container--box--text'>
            En tant qu’individus et pour la personne morale que nous représentons, nous considérons avoir une responsabilité envers notre environnement et la société. Cela implique des devoirs, légaux et moraux, qui découlent des enjeux écologiques et sociétaux auxquels nous sommes tous confrontés.
            <br />
            L’intégration de ces enjeux est une conditions sine qua non dans la réalisation de nos missions.
          </p>
        </div>
      </section>

      <section className='about--container'>
        <h4 className='about--container--title'>
          Diplômes et compétences
        </h4>

        <a
          className='about--container--links'
          rel='noreferrer'
          target='_blank'
          href='https://www.linkedin.com/in/martin-letouvet-baliros-9343b678/'
        >
          <div className='about--container--links--icon'>
            <img
              className='about--container--links--icon--img'
              alt='Lien vers le LinkedIn de Martin'
              src={linkedin}
            />
          </div>
          <p className='about--container--links--label'>
            Martin Letouvet-Baliros
          </p>
        </a>

        <a
          className='about--container--links'
          rel='noreferrer'
          target='_blank'
          href='https://www.linkedin.com/in/matthieu-saunier-6427284a/'
        >
          <div className='about--container--links--icon'>
            <img
              className='about--container--links--icon--img'
              alt='Lien vers le LinkedIn de Matthieu'
              src={linkedin}
            />
          </div>
          <p className='about--container--links--label'>
            Matthieu Saunier
          </p>
        </a>

      </section>

      <section className='about--container'>
        <h4 className='about--container--title'>
          Ce qui nous différencie
        </h4>

        <div className='about--container--box'>
          <h5 className='about--container--box--label'>
            ✅ Une équipe poly-compétente pour une approche systémique
          </h5>
          <p className='about--container--box--text'>
            Data science, lean, six sigma et intelligence économique : des compétences variées, certifiées par des diplômes, qui garantissent une réelle valeur ajoutée pour vos projets.
          </p>
        </div>

        <div className='about--container--box'>
          <h5 className='about--container--box--label'>
            ✅ Communication
          </h5>
          <p className='about--container--box--text'>
            Parce que nous considérons que toute l’entreprise est cliente d’un projet, nous travaillons la communication pour la rendre spécifique à tous les niveaux de l’organisation (newsletter, reporting projet, reporting comité de pilotage…).
          </p>
        </div>

        <div className='about--container--box'>
          <h5 className='about--container--box--label'>
            ✅ Animation et engagement
          </h5>
          <p className='about--container--box--text'>
            De la qualité d’animation des rituels découle l’engagement autour d’un projet. Sens, pédagogie, ludisme et compréhension sont les maîtres mots de nos interventions et garantissent l’adhésion des parties prenantes.
          </p>
        </div>

        <div className='about--container--box'>
          <h5 className='about--container--box--label'>
            ✅ Méthodologie et flexibilité
          </h5>
          <p className='about--container--box--text'>
            Nos activités se réfèrent à des méthodologies éprouvées et nécessitent une grande rigueur d’exécution. Notre expérience multi-sectorielle et internationale nous a apporté la flexibilité nécessaire pour les transposer dans différents secteurs, qui peuvent avoir tendance à s’ignorer, sans en dégrader l’efficacité.
          </p>
        </div>

        <div className='about--container--box'>
          <h5 className='about--container--box--label'>
            ✅ Une passion pour le métier du conseil
          </h5>
          <p className='about--container--box--text'>
            Notre attrait pour la résolution de problèmes et la mise en pratique de théories nous a conduit vers ce métier, riche d’une grande variété de rencontres et de missions.
          </p>
        </div>

        <div className='about--container--box'>
          <h5 className='about--container--box--label'>
            ✅ Et surtout
          </h5>
          <p className='about--container--box--text'>
            On est HYPER sympas
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
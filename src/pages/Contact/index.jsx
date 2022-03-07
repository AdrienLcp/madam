import React, { useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';

import './styles.scss';

import send from '../../media/contact/send.svg';
import success from '../../media/contact/success.svg';

const Contact = () => {

  const [state, handleSubmit] = useForm('mknkynke');

  useEffect(() => {
    document.title = "Contact - MaDaM";
  }, []);

  if (state.succeeded) {
    return (
      <div className='contact'>

        <h4 className='contact--title'>
          Contact
        </h4>
        <section className='contact--container'>
          <section className='contact--container--success'>
            <div className='contact--container--success--icon'>
              <img
                src={success}
                alt='Succès'
                className='contact--container--success--icon--img'
              />
            </div>
            <p className='contact--container--success--message'>
              Message envoyé !
            </p>
          </section>





        </section>
      </div>
    );
  };

  return (
    <div className='contact'>

      <h4 className='contact--title'>
        Contact
      </h4>
      <section className='contact--container'>
        <form
          className='contact--container--form'
          onSubmit={handleSubmit}
        >
          <input
            className='contact--container--form--input'
            id='email'
            type='email' 
            name='email'
            placeholder='Insérez votre adresse mail'
          />
          <ValidationError
            prefix='Email' 
            field='email'
            errors={state.errors}
          />
          <textarea
            className='contact--container--form--area'
            id='message'
            name='message'
            type='text'
            placeholder='Envoyez nous un message'
          />
          <ValidationError
            prefix='Message'
            field='message'
            errors={state.errors}
          />
          <button 
            className='contact--container--form--submit'
            type='submit'
            disabled={state.submitting}
          >
            <div className='contact--container--form--submit--icon'>
              <img
                className='contact--container--form--submit--icon--img'
                alt='Envoyer le message'
                src={send}
              />
            </div>
            <p className='contact--container--form--submit--label'>
              Envoyer
            </p>
          </button>
        </form>









        
      </section>
    </div>
  );
};

export default Contact;
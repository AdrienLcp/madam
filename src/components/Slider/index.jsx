import React, { useEffect, useState, useRef } from 'react';

import './styles.scss';

import arrow from '../../media/slider/arrow.svg';

const Slider = ({ slide1, slide2, slide3, slide4, numberOfSlides }) => {

  const slideRef1 = useRef(null);
  const slideRef2 = useRef(null);
  const slideRef3 = useRef(null);
  const slideRef4 = useRef(null);

  const leftArrowRef = useRef(null);
  const rightArrowRef = useRef(null);

  const [showFourthSlide, setShowFourthSlide] = useState(false);
  const [activeSlide, setActiveSlide] = useState(1);

  useEffect(() => {
    if (numberOfSlides > 3) {
      setShowFourthSlide(true);
    };
  }, [numberOfSlides]);

  const slideToLeft = () => {

    if (activeSlide === 4) {

      slideRef4.current.style.transform = 'translateX(100%)';
      slideRef4.current.style.opacity = '0';
      slideRef4.current.classList.remove('active_slide');

      slideRef3.current.classList.add('active_slide');
      setActiveSlide(3);
      rightArrowRef.current.style.visibility = 'visible';

    } else if (activeSlide === 3) {

      slideRef3.current.style.transform = 'translateX(100%)';
      slideRef3.current.style.opacity = '0';
      slideRef3.current.classList.remove('active_slide');

      slideRef2.current.classList.add('active_slide');
      setActiveSlide(2);
      
      rightArrowRef.current.style.visibility = 'visible';

    } else if (activeSlide === 2) {

      slideRef2.current.style.transform = 'translateX(100%)';
      slideRef2.current.style.opacity = '0';
      slideRef2.current.classList.remove('active_slide');

      slideRef1.current.classList.add('active_slide');
      setActiveSlide(1);

      leftArrowRef.current.style.visibility = 'hidden';
    };
  };

  const slideToRight = () => {

    if (activeSlide === 1) {

      slideRef1.current.style.transform = 'translateX(-100%)';
      slideRef1.current.style.opacity = '0';
      slideRef1.current.classList.remove('active_slide');

      slideRef2.current.classList.add('active_slide');
      setActiveSlide(2);
      leftArrowRef.current.style.visibility = 'visible';

    } else if (activeSlide === 2) {

      slideRef2.current.style.transform = 'translateX(-100%)';
      slideRef2.current.style.opacity = '0';
      slideRef2.current.classList.remove('active_slide');

      slideRef3.current.classList.add('active_slide');
      setActiveSlide(3);
      
      if (numberOfSlides === 3) {
        rightArrowRef.current.style.visibility = 'hidden';
      };

    } else if (activeSlide === 3) {
      
      if (numberOfSlides === 3) {
        return;
      } else {

        slideRef3.current.style.transform = 'translateX(-100%)';
        slideRef3.current.style.opacity = '0';
        slideRef3.current.classList.remove('active_slide');

        slideRef4.current.classList.add('active_slide');
        setActiveSlide(4);

        rightArrowRef.current.style.visibility = 'hidden';

      }
    };
  };

  return (
    <section className='slider'>

      <button
        className='slider--button'
        onClick={() => {
          slideToLeft();
        }}
      >
        <img
          className='slider--button_left'
          ref={leftArrowRef}
          alt="Voir le texte précédent"
          src={arrow}
        />
      </button>

      <div className='slider--container'>

        <img
          className='slider--container--element active_slide'
          alt='Slide 1'
          src={slide1}
          ref={slideRef1}
        />

        <img
          className='slider--container--element'
          alt='Slide 2'
          src={slide2}
          ref={slideRef2}
        />

        <img
          className='slider--container--element'
          alt='Slide 3'
          src={slide3}
          ref={slideRef3}
        />

        {showFourthSlide && (

          <img
            className='slider--container--element'
            alt='Slide 4'
            src={slide4}
            ref={slideRef4}
          />

        )}
      </div>

      <button
        className='slider--button'
        onClick={() => {
          slideToRight();
        }}
      >
        <img
          className='slider--button_right'
          ref={rightArrowRef}
          alt="Voir le texte suivant"
          src={arrow}
        />
      </button>

    </section>
  );
};

export default Slider;
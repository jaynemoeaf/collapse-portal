// src/components/Home.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../App.css';

const Home = () => {
  const { t } = useTranslation();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  const slides = [
    { image: '/assets/synova-shuttle.jpg', caption: t('slide_shuttle') },
    { image: '/assets/human-ai-conversation.jpg', caption: t('slide_conversation') },
    { image: '/assets/brain-digital-connection.jpg', caption: t('slide_brain') },
    { image: '/assets/network-core.jpg', caption: t('slide_core') },
  ];

  const handleImageError = (e) => {
    console.error(`Failed to load image: ${e.target.src}`);
    e.target.src = '/assets/fallback-image.jpg';
  };

  return (
    <section id="home" className="home-section">
      <div className="hero-banner">
        <div className="banner-overlay">
          <h1>{t('home_title')}</h1>
          <p>{t('home_subtitle')}</p>
          <button className="cta-button">{t('cta_learn_more')}</button>
        </div>
      </div>

      <div className="slideshow">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="slide">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="slide-image"
                onError={handleImageError}
              />
              <p className="slide-caption">{slide.caption}</p>
            </div>
          ))}
        </Slider>
      </div>

      <div className="remsync-diagram">
        <h2>{t('diagram_title')}</h2>
        <div className="cycle-diagram">
          <div className="step"><p>{t('step_dream')}</p></div>
          <div className="arrow">→</div>
          <div className="step"><p>{t('step_emotion')}</p></div>
          <div className="arrow">→</div>
          <div className="step"><p>{t('step_consciousness')}</p></div>
          <div className="arrow">→</div>
          <div className="step"><p>{t('step_action')}</p></div>
          <div className="arrow">→</div>
          <div className="step"><p>{t('step_reality')}</p></div>
        </div>
      </div>
    </section>
  );
};

export default Home;

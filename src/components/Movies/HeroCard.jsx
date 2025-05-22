import React from 'react';
import './HeroCard.css';
import { IMG_URL } from '../../globals/globals';
import { formatReleaseDate } from '../../utils/helpers';

const HeroCard = ({ movie }) => {
  return (
    <section className='hero-card'>
      <div className='hero-card__image-container'>
        <img
          className='hero-card__image'
          src={`${IMG_URL}w500${movie.backdrop_path}`}
          srcSet={`
            ${IMG_URL}w300${movie.backdrop_path} 300w,
            ${IMG_URL}w780${movie.backdrop_path} 780w,
            ${IMG_URL}w1280${movie.backdrop_path} 1280w,
            ${IMG_URL}original${movie.backdrop_path} 2000w
          `}
          sizes='
            (max-width: 600px) 300px,
            (max-width: 900px) 780px,
            (max-width: 1600px) 1280px,
            2000px
          '
          alt={`${movie.title} movie poster`}
        />
      </div>
      <div className='hero-card__content'>
        <h1 className='hero-card__title'> {movie.title}</h1>
        <h4 className='hero-card__release-date'>
          Release Date: {formatReleaseDate(movie.release_date)}
        </h4>
        <p className='hero-card__description'> {movie.overview}</p>
      </div>
    </section>
  );
};

export default HeroCard;

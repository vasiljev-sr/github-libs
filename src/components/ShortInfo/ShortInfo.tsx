import React, { FC } from 'react';
import './ShortInfo.css';
import { StarIcon } from '@components/Icons/StarIcon';
import { ForkIcon } from '@components/Icons/ForkIcon';

interface ShortInfoProps {
  title: string;
  description: string;
  stars: number;
  forks: number;
}

export const ShortInfo: FC<ShortInfoProps> = ({ title, description, stars, forks }) => {
  return (
    <article className="short-info">
      <h2 className="short-info__title">{title}</h2>
      <p className="short-info__text">{description}</p>
      <div className="short-info__popularity">
        <div className="short-info__item">
          <StarIcon className="short-info__item-icon" />
          <p className="short-info__item-value">{stars}</p>
        </div>
        <div className="short-info__item">
          <ForkIcon className="short-info__item-icon" />
          <p className="short-info__item-value">{forks}</p>
        </div>
      </div>
    </article>
  );
};
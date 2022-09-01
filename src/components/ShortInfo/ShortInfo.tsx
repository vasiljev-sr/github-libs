import React, { FC } from 'react';
import './ShortInfo.css';
import { StarIcon } from '@components/Icons/StarIcon';
import { ForkIcon } from '@components/Icons/ForkIcon';
import { IRepo } from '@app/types';
import { useAppDispatch } from '@app/hooks';
import { setActiveRepo, setShowModal } from '@features/reposSlider/slice';

interface ShortInfoProps extends Omit<IRepo, 'owner' | 'topics' | 'homepage'> {
  className?: string;
}

export const ShortInfo: FC<ShortInfoProps> = ({ name, description, stargazers_count, forks, id }) => {
  const dispatch = useAppDispatch();

  const onClick = () => {
    dispatch(setActiveRepo(id));
    dispatch(setShowModal(true));
  };
  return (
    <article className="short-info" onClick={onClick}>
      <h2 className="short-info__title">{name}</h2>
      <p className="short-info__text">{description}</p>
      <div className="short-info__popularity">
        <div className="short-info__item">
          <StarIcon className="short-info__item-icon" />
          <p className="short-info__item-value">{stargazers_count}</p>
        </div>
        <div className="short-info__item">
          <ForkIcon className="short-info__item-icon" />
          <p className="short-info__item-value">{forks}</p>
        </div>
      </div>
    </article>
  );
};

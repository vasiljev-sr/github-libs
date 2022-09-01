import React, { FC } from 'react';
import './ShortInfo.css';
import { StarIcon } from '@components/Icons/StarIcon';
import { ForkIcon } from '@components/Icons/ForkIcon';
import { SkeletonText } from '@components/SkeletonText/SkeletonText';

export const ShortInfoSkeleton: FC = () => {
  return (
    <article className="short-info">
      <h2 className="short-info__title">
        <SkeletonText dark={true} />
      </h2>
      <p className="short-info__text">
        <SkeletonText rowsCount={3} />
      </p>
      <div className="short-info__popularity">
        <div className="short-info__item">
          <StarIcon className="short-info__item-icon" />
          <p className="short-info__item-value-skeleton">
            <SkeletonText />
          </p>
        </div>
        <div className="short-info__item">
          <ForkIcon className="short-info__item-icon" />
          <p className="short-info__item-value-skeleton">
            <SkeletonText />
          </p>
        </div>
      </div>
    </article>
  );
};

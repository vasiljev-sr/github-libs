import React, { FC } from 'react';
import { ModalWrapper } from '@components/ModalWrapper/ModalWrapper';
import './RepoModal.css';
import { LinkIcon } from '@components/Icons/LinkIcon';
import { StarIcon } from '@components/Icons/StarIcon';
import { ForkIcon } from '@components/Icons/ForkIcon';
import { useAppDispatch, useAppSelector } from '@app/hooks';
import classNames from 'classnames';
import { CrossIcon } from '@components/Icons/CrossIcon';
import { setShowModal } from '@features/reposSlider/slice';

export const RepoModal: FC = () => {
  const { activeRepo } = useAppSelector((state) => state.reposReducer);
  const dispatch = useAppDispatch();
  return (
    <ModalWrapper>
      {activeRepo && (
        <article className="repo-modal">
          <h2 className="repo-modal__org">{activeRepo.owner.login}</h2>
          <h3 className={classNames('repo-modal__name', 'title')}>{activeRepo.name}</h3>
          <p className="repo-modal__description">{activeRepo.description}</p>
          <div className="repo-modal__link">
            <LinkIcon className="repo-modal__link-icon" />
            <a href={activeRepo.homepage} target="_blank" rel="noreferrer" className="repo-modal__link-item">
              {activeRepo.homepage.replace('https://', '')}
            </a>
          </div>
          <div className="repo-modal__topics">
            {activeRepo.topics.map((item) => {
              return (
                <div key={item} className="repo-modal__topic">
                  {item}
                </div>
              );
            })}
          </div>
          <div className="short-info__popularity">
            <div className="short-info__item">
              <StarIcon className="short-info__item-icon" />
              <p className="short-info__item-value">{activeRepo.stargazers_count}</p>
            </div>
            <div className="short-info__item">
              <ForkIcon className="short-info__item-icon" />
              <p className="short-info__item-value">{activeRepo.forks}</p>
            </div>
          </div>
          <button onClick={() => dispatch(setShowModal(false))}>
            <CrossIcon className="repo-modal_close-icon" />
          </button>
        </article>
      )}
    </ModalWrapper>
  );
};

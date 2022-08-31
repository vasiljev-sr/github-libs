import React, { FC, useEffect } from 'react';
import classNames from 'classnames';
import './Page.css';
import { ShortInfo } from '@components/ShortInfo/ShortInfo';
import { Slider } from '@features/reposSlider/components/Slider/Slider';
import { useAppDispatch, useAppSelector } from '@app/hooks';
import { fetchRepos } from '@features/reposSlider/actions';

export const Page: FC = () => {
  const { repos, activeRepo } = useAppSelector((state) => state.reposReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchRepos());
  }, []);

  useEffect(() => {
    console.log(activeRepo);
  }, [activeRepo]);

  return (
    <main className="page">
      <h1 className={classNames('title', 'page__title')}>Топ популярных Javascript репозиториев</h1>
      <section className="page__slider">
        <Slider>
          {repos.map((item) => {
            return (
              <ShortInfo
                key={item.id}
                id={item.id}
                name={item.name}
                description={item.description}
                stargazers_count={item.stargazers_count}
                forks={item.forks}
              />
            );
          })}
        </Slider>
      </section>
    </main>
  );
};

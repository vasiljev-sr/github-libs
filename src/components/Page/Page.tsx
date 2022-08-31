import React, { FC } from 'react';
import classNames from 'classnames';
import './Page.css';
import { ShortInfo } from '@components/ShortInfo/ShortInfo';
import { Slider } from '@components/Slider/Slider';

export const Page: FC = () => {
  return (
    <main className="page">
      <h1 className={classNames('title', 'page__title')}>Топ популярных Javascript репозиториев</h1>
      <section className="page__slider">
        <Slider>
          <ShortInfo
            title={'React'}
            description={'A declarative, efficient, and flexible JavaScript library for building user interfaces.'}
            stars={180000}
            forks={12000}
          />
          <ShortInfo title={'ada'} description={'asda dddddddddddddd '} stars={180000} forks={12000} />
          <ShortInfo title={'ada'} description={'asda dddddddddddddd '} stars={180000} forks={12000} />
        </Slider>
      </section>
    </main>
  );
};

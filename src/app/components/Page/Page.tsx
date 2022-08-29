import React, { FC } from 'react';
import classNames from 'classnames';
import './Page.css';
import { ShortInfo } from '@app/components/ShortInfo/ShortInfo';

export const Page: FC = () => {
  return (
    <main className="page">
      <h1 className={classNames('title', 'page__title')}>Топ популярных Javascript репозиториев</h1>
      <ShortInfo title={'ada'} description={'asda dddddddddddddd '} stars={12} forks={12} />
    </main>
  );
};

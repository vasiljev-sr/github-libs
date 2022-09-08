import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '@app/components/App/Layout';
import { Page } from '@components/Page/Page';

export const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Page />} />
          <Route path="*" element={<Page />} />
        </Route>
      </Routes>
    </>
  );
};
